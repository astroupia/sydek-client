"use client";

import type React from "react";
import { useEffect, useRef } from "react";

interface InteractiveBackgroundProps {
  particleCount?: number; // Optional prop to control max particles
  className?: string; // Allow custom classes
}

// Define Particle class outside the component for clarity
class Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 3 + 1;
    this.speedX = Math.random() * 2 - 1;
    this.speedY = Math.random() * 2 - 1;
    this.color = `hsla(${Math.random() * 60 + 200}, 70%, 60%, 0.5)`;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.size > 0.2) this.size -= 0.1;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

const InteractiveBackground: React.FC<InteractiveBackgroundProps> = ({
  particleCount = 100,
  className = "",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]); // Use ref to persist particles across renders

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticle = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      // Limit the number of particles to prevent performance issues
      if (particlesRef.current.length < particleCount) {
        for (let i = 0; i < 3; i++) {
          particlesRef.current.push(new Particle(x, y));
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesRef.current.length; i++) {
        const particle = particlesRef.current[i];
        particle.update();
        particle.draw(ctx);

        if (particle.size <= 0.2) {
          particlesRef.current.splice(i, 1);
          i--;
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    // Initial setup
    window.addEventListener("resize", handleResize);
    canvas.addEventListener("mousemove", createParticle);
    handleResize();
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", createParticle);
      cancelAnimationFrame(animationFrameId);
    };
  }, [particleCount]); // Re-run effect if particleCount changes

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 z-0 ${className}`} // Remove pointer-events-none to allow interaction
    />
  );
};

export default InteractiveBackground;
