// src/components/CanvasBackground.jsx
import React, { useEffect, useRef } from "react";

export default function CanvasBackground({ snakeCount = 3 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const gridSize = 20;

    // Initialize snakes
    const snakes = [];
    for (let i = 0; i < snakeCount; i++) {
      snakes.push({
        body: [{ x: Math.floor(Math.random() * (canvas.width / gridSize)), y: Math.floor(Math.random() * (canvas.height / gridSize)) }],
        color: `hsl(${Math.random() * 360}, 70%, 50%)`, // unique color per snake
        cake: { x: Math.floor(Math.random() * (canvas.width / gridSize)), y: Math.floor(Math.random() * (canvas.height / gridSize)) },
      });
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      snakes.forEach((snake) => {
        const head = { ...snake.body[0] };

        // Move head toward cake
        if (head.x < snake.cake.x) head.x += 1;
        else if (head.x > snake.cake.x) head.x -= 1;
        if (head.y < snake.cake.y) head.y += 1;
        else if (head.y > snake.cake.y) head.y -= 1;

        snake.body.unshift(head);

        // Check if cake eaten
        if (head.x === snake.cake.x && head.y === snake.cake.y) {
          snake.cake = { x: Math.floor(Math.random() * (canvas.width / gridSize)), y: Math.floor(Math.random() * (canvas.height / gridSize)) };
        } else {
          snake.body.pop();
        }

        // Draw cake
        ctx.fillStyle = "#FBBF24";
        ctx.fillRect(snake.cake.x * gridSize, snake.cake.y * gridSize, gridSize, gridSize);

        // Draw snake
        ctx.fillStyle = snake.color;
        snake.body.forEach((segment) => ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize, gridSize));
      });
    }

    const interval = setInterval(draw, 100);

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, [snakeCount]);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full pointer-events-none" />;
}
