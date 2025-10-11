// src/components/CanvasBackground.jsx
import React, { useEffect, useRef } from "react";

export default function CanvasBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const gridSize = 20; // size of snake/cake blocks
    let snake = [{ x: 5, y: 5 }];
    let direction = { x: 1, y: 0 };
    let cake = { x: Math.floor(Math.random() * (canvas.width / gridSize)), y: Math.floor(Math.random() * (canvas.height / gridSize)) };

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // draw cake
      ctx.fillStyle = "#FBBF24"; // yellow cake
      ctx.fillRect(cake.x * gridSize, cake.y * gridSize, gridSize, gridSize);

      // move snake toward cake (simple AI)
      const head = { ...snake[0] };
      if (head.x < cake.x) head.x += 1;
      else if (head.x > cake.x) head.x -= 1;
      if (head.y < cake.y) head.y += 1;
      else if (head.y > cake.y) head.y -= 1;

      snake.unshift(head);

      // check if cake eaten
      if (head.x === cake.x && head.y === cake.y) {
        cake = { x: Math.floor(Math.random() * (canvas.width / gridSize)), y: Math.floor(Math.random() * (canvas.height / gridSize)) };
      } else {
        snake.pop();
      }

      // draw snake
      ctx.fillStyle = "#10B981"; // teal snake
      snake.forEach((segment) => ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize, gridSize));
    }

    const interval = setInterval(draw, 100);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full pointer-events-none" />;
}
