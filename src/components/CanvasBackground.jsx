// src/components/CanvasBackground.jsx
import React, { useEffect, useRef } from "react";

export default function CanvasBackground({ snakeCount = 3 }) {
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

    const blockSize = 20;

    // Initialize snakes
    const snakes = [];
    for (let i = 0; i < snakeCount; i++) {
      snakes.push({
        body: [{ x: Math.floor(Math.random() * (canvas.width / blockSize)), y: Math.floor(Math.random() * (canvas.height / blockSize)) }],
        color: `hsl(${Math.random() * 360}, 70%, 50%)`,
        cake: {
          x: Math.floor(Math.random() * (canvas.width / blockSize)),
          y: Math.floor(Math.random() * (canvas.height / blockSize)),
        },
        speed: 5 + Math.floor(Math.random() * 5), // frames per move
        counter: 0,
      });
    }

    function draw() {
      // Clear canvas but keep underlying gradient visible
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      snakes.forEach((snake) => {
        snake.counter++;
        if (snake.counter < snake.speed) return;
        snake.counter = 0;

        // Move snake head toward cake
        const head = { ...snake.body[0] };
        if (head.x < snake.cake.x) head.x += 1;
        else if (head.x > snake.cake.x) head.x -= 1;
        if (head.y < snake.cake.y) head.y += 1;
        else if (head.y > snake.cake.y) head.y -= 1;

        snake.body.unshift(head);

        // Check if cake eaten
        if (head.x === snake.cake.x && head.y === snake.cake.y) {
          snake.cake = {
            x: Math.floor(Math.random() * (canvas.width / blockSize)),
            y: Math.floor(Math.random() * (canvas.height / blockSize)),
          };
          // Snake grows automatically
        } else {
          snake.body.pop(); // maintain length if cake not eaten
        }

        // Draw cake
        ctx.fillStyle = "#FBBF24";
        ctx.fillRect(snake.cake.x * blockSize, snake.cake.y * blockSize, blockSize, blockSize);

        // Draw snake
        ctx.fillStyle = snake.color;
        snake.body.forEach((segment) =>
          ctx.fillRect(segment.x * blockSize, segment.y * blockSize, blockSize, blockSize)
        );
      });
    }

    const interval = setInterval(draw, 100);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [snakeCount]);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full pointer-events-none" />;
}
