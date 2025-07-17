"use client";

import { useEffect, useRef, useState } from "react";

export default function TechLinesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [showCanvas, setShowCanvas] = useState(true);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let columns: number[];
    const fontSize = 14;
    const binaryChars = ["0", "1"];
    const introDuration = 4000;
    const speedMultiplier = 0.25;

    // Dynamically detect dark/light mode
    const getCurrentTheme = () =>
      document.documentElement.classList.contains("dark") ? "dark" : "light";

    setTheme(getCurrentTheme());

    const observer = new MutationObserver(() => {
      const newTheme = getCurrentTheme();
      setTheme(newTheme);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const columnCount = Math.floor(canvas.width / fontSize);
      columns = new Array(columnCount).fill(0);
    };

    const draw = () => {
      ctx.fillStyle =
        theme === "dark" ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = theme === "dark" ? "#00ff00" : "#003300";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < columns.length; i++) {
        if (Math.random() > speedMultiplier) continue;

        const char = binaryChars[Math.floor(Math.random() * 2)];
        const x = i * fontSize;
        const y = columns[i] * fontSize;

        if (y <= canvas.height) {
          ctx.fillText(char, x, y);
          columns[i]++;
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    resizeCanvas();
    draw();

    const timeout = setTimeout(() => {
      cancelAnimationFrame(animationFrameId);
      setShowCanvas(false);
      observer.disconnect();
    }, introDuration);

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed top-0 left-0 w-full h-full pointer-events-none z-[-1] transition-opacity duration-1000 ${
        showCanvas ? "opacity-100" : "opacity-0"
      }`}
    />
  );
}
