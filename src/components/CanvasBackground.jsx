// src/components/CanvasBackground.jsx
import React, { useEffect, useRef } from "react";

export default function CanvasBackground({ snakeCount = 5 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Resize canvas to Hero size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const gridSize = 20;

    // Utility: random pastel color for aesthetic snakes
    const randomColor = () => `hsl(${Math.random() * 360}, 70%, 65%)`;

    // Initialize snakes
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
        speed: 1 + Math.random() * 1.5, // pixels per frame
      });
    }

    function draw() {
      // Slight fade for trailing effect
      ctx.fillStyle = "rgba(0,0,0,0.15)"; 
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      snakes.forEach((snake) => {
        const head = { ...snake.body[0] };

        // Vector towards cake
        const dx = snake.cake.x - head.x;
        const dy = snake.cake.y - head.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist > 1) {
          head.x += (dx / dist) * snake.speed;
          head.y += (dy / dist) * snake.speed;
        }

        snake.body.unshift(head);

        // Check if cake reached
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

        // Draw snake with smooth gradient trail
        for (let i = 0; i < snake.body.length; i++) {
          const alpha = 1 - i / snake.body.length; // fading trail
          ctx.fillStyle = snake.color.replace("hsl", `hsla`).replace(")", `, ${alpha})`);
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
