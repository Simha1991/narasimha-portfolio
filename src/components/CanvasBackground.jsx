// src/components/CanvasBackground.jsx
import React, { useEffect, useRef } from "react";

/**
 * Nokia-style multi-snake canvas background
 * Props:
 *  - snakeCount (number) default 3
 *  - blockSize (number) default 18
 */
export default function CanvasBackground({ snakeCount = 3, blockSize = 18 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    // Resize canvas to container size (Hero section). Use offsetWidth/Height so gradient remains visible.
    const resizeCanvas = () => {
      const { offsetWidth, offsetHeight } = canvas;
      canvas.width = offsetWidth;
      canvas.height = offsetHeight;
      // optional: could clamp to min size
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Utility: unique integer speeds generator (frames per move)
    const makeUniqueSpeeds = (count, min = 3) => {
      const arr = Array.from({ length: count }, (_, i) => min + i); // e.g. [3,4,5,...]
      // shuffle
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    };

    // Helper to randomize initial grid coords
    const randGrid = (max) => Math.floor(Math.random() * max);

    // Setup snakes
    let snakes = [];
    const speeds = makeUniqueSpeeds(snakeCount, 3); // each snake has unique speed (frames per move)
    const colors = []; // pre-generate nice colors (avoid super-bright/incompatible)
    for (let i = 0; i < snakeCount; i++) {
      // pastel-ish palette but still saturated for contrast
      const hue = Math.floor((i * 73) % 360); // spread hues
      colors.push(`hsl(${hue}, 70%, 45%)`);
    }

    const initSnakes = () => {
      const cols = Math.max(2, Math.floor(canvas.width / blockSize));
      const rows = Math.max(2, Math.floor(canvas.height / blockSize));

      snakes = [];
      for (let i = 0; i < snakeCount; i++) {
        const initX = randGrid(cols);
        const initY = randGrid(rows);
        const initialLength = 3 + Math.floor(Math.random() * 3); // 3..5 blocks
        const body = [];
        // make initial body horizontal to the left if possible
        for (let j = 0; j < initialLength; j++) {
          body.push({
            x: Math.max(0, initX - j),
            y: initY,
          });
        }

        snakes.push({
          body,
          color: colors[i],
          speed: speeds[i], // frames per move (unique)
          counter: 0,
          cake: { x: randGrid(cols), y: randGrid(rows) },
          cols,
          rows,
        });
      }
    };

    initSnakes();

    // On resize we need to recompute grid and ensure snakes/cakes are valid
    const handleResize = () => {
      const cols = Math.max(2, Math.floor(canvas.width / blockSize));
      const rows = Math.max(2, Math.floor(canvas.height / blockSize));
      snakes.forEach((s) => {
        // clamp body and cake positions to new grid
        s.body = s.body.map((seg) => ({
          x: Math.min(cols - 1, Math.max(0, Math.floor((seg.x * (canvas.width / (s.cols * blockSize))) || seg.x))),
          y: Math.min(rows - 1, Math.max(0, Math.floor((seg.y * (canvas.height / (s.rows * blockSize))) || seg.y))),
        }));
        s.cake = { x: Math.min(cols - 1, s.cake.x), y: Math.min(rows - 1, s.cake.y) };
        s.cols = cols;
        s.rows = rows;
      });
    };

    // Determine next step: only horizontal or vertical; no diagonal.
    // Move head by 1 grid in x or y toward cake. If both dx and dy non-zero, choose the axis with larger abs distance;
    // if equal, randomly pick axis (adds varied movement).
    const stepToward = (head, cake) => {
      const dx = cake.x - head.x;
      const dy = cake.y - head.y;
      if (dx === 0 && dy === 0) return { x: head.x, y: head.y };

      if (Math.abs(dx) > Math.abs(dy)) {
        return { x: head.x + Math.sign(dx), y: head.y };
      } else if (Math.abs(dy) > Math.abs(dx)) {
        return { x: head.x, y: head.y + Math.sign(dy) };
      } else {
        // equal distance -> random axis
        if (Math.random() < 0.5) return { x: head.x + Math.sign(dx), y: head.y };
        return { x: head.x, y: head.y + Math.sign(dy) };
      }
    };

    // Draw function (retro blocks)
    function drawFrame() {
      // clear the canvas each frame so the Hero gradient shows through
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // draw each snake and its cake
      snakes.forEach((snake) => {
        // increment frame counter; actual movement happens only when counter >= speed
        snake.counter++;
        if (snake.counter >= snake.speed) {
          snake.counter = 0;

          const head = { ...snake.body[0] };
          const next = stepToward(head, snake.cake);

          // Keep next inside bounds
          next.x = Math.max(0, Math.min(snake.cols - 1, next.x));
          next.y = Math.max(0, Math.min(snake.rows - 1, next.y));

          // Add new head
          snake.body.unshift(next);

          // If cake eaten -> grow (do not pop)
          if (next.x === snake.cake.x && next.y === snake.cake.y) {
            // place new cake in a random empty location
            let attempts = 0;
            let placed = false;
            while (!placed && attempts < 100) {
              const cx = Math.floor(Math.random() * snake.cols);
              const cy = Math.floor(Math.random() * snake.rows);
              // ensure cake not on any segment of this snake
              const collision = snake.body.some((seg) => seg.x === cx && seg.y === cy);
              if (!collision) {
                snake.cake = { x: cx, y: cy };
                placed = true;
              }
              attempts++;
            }
            if (!placed) {
              snake.cake = { x: Math.floor(Math.random() * snake.cols), y: Math.floor(Math.random() * snake.rows) };
            }
          } else {
            // normal move: remove tail to keep length
            snake.body.pop();
          }
        }

        // draw cake as retro square (contrasting color)
        ctx.fillStyle = "#FBBF24";
        ctx.fillRect(snake.cake.x * blockSize + 1, snake.cake.y * blockSize + 1, blockSize - 2, blockSize - 2);

        // draw snake body (head first)
        ctx.fillStyle = snake.color;
        snake.body.forEach((seg, idx) => {
          // slight border to give pixel look
          ctx.fillRect(seg.x * blockSize + 1, seg.y * blockSize + 1, blockSize - 2, blockSize - 2);
          // optional: darker tail segments (commented out)
          // if (idx === 0) { /* head rendering if desired */ }
        });
      });
    }

    let rafId = null;
    const loop = () => {
      drawFrame();
      rafId = requestAnimationFrame(loop);
    };
    loop();

    // ensure grid and snake data consistent if container resizes
    const resizeObserver = new ResizeObserver(() => {
      resizeCanvas();
      // recompute cols/rows for each snake and clamp positions
      const cols = Math.max(2, Math.floor(canvas.width / blockSize));
      const rows = Math.max(2, Math.floor(canvas.height / blockSize));
      snakes.forEach((s) => {
        s.cols = cols;
        s.rows = rows;
        // clamp body and cake
        s.body = s.body.map((seg) => ({
          x: Math.min(cols - 1, Math.max(0, seg.x)),
          y: Math.min(rows - 1, Math.max(0, seg.y)),
        }));
        s.cake.x = Math.min(cols - 1, Math.max(0, s.cake.x));
        s.cake.y = Math.min(rows - 1, Math.max(0, s.cake.y));
      });
    });
    resizeObserver.observe(canvas);

    // cleanup
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resizeCanvas);
      resizeObserver.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [snakeCount, blockSize]);

  // canvas is absolute inside Hero. pointer-events-none so it doesn't block clicks.
  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full pointer-events-none" />;
}
