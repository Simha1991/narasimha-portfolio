import React, { useEffect, useRef } from "react";

export default function CanvasBackground({ snakeCount = 5 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const gridSize = 20;

    const randomColor = () => `hsl(${Math.random() * 360}, 70%, 65%)`;

    const snakes = [];
    for (let i = 0; i < snakeCount; i++) {
      snakes.push({
        body: [
          {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
          },
        ],
        color: randomColor(),
        cake: {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
        },
        speed: 1 + Math.random() * 1.5,
      });
    }

    function draw() {
      // Clear canvas slightly to create smooth trails over gradient
      ctx.fillStyle = "rgba(255,255,255,0)"; // fully transparent, preserves gradient
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      snakes.forEach((snake) => {
        const head = { ...snake.body[0] };

        const dx = snake.cake.x - head.x;
        const dy = snake.cake.y - head.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist > 1) {
          head.x += (dx / dist) * snake.speed;
          head.y += (dy / dist) * snake.speed;
        }

        snake.body.unshift(head);

        if (dist < 5) {
          snake.cake = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
          };
        } else {
          snake.body.pop();
        }

        // Draw cake
        ctx.fillStyle = "#FBBF24";
        ctx.beginPath();
        ctx.arc(snake.cake.x, snake.cake.y, gridSize / 2, 0, Math.PI * 2);
        ctx.fill();

        // Draw snake with fading trail
        for (let i = 0; i < snake.body.length; i++) {
          const alpha = 1 - i / snake.body.length;
          ctx.fillStyle = snake.color.replace("hsl", "hsla").replace(")", `,${alpha})`);
          ctx.beginPath();
          ctx.arc(snake.body[i].x, snake.body[i].y, gridSize / 2, 0, Math.PI * 2);
          ctx.fill();
        }
      });
    }

    const animate = () => {
      draw();
      requestAnimationFrame(animate);
    };
    animate();

    return () => window.removeEventListener("resize", resizeCanvas);
  }, [snakeCount]);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full pointer-events-none" />;
}
