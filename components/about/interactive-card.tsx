"use client";

import type React from "react";
import { useState, useRef } from "react";
import { cn } from "@/lib/utils";

interface InteractiveCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export default function InteractiveCard({
  children,
  className = "",
  glowColor = "rgba(95, 31, 95, 0.4)",
}: InteractiveCardProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    // Calculate position relative to card center (in percentage)
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

    setPosition({ x, y });
  };

  return (
    <div
      ref={cardRef}
      className={cn(
        "relative rounded-xl overflow-hidden transition-all duration-300 transform perspective-1000",
        isHovering ? "shadow-xl scale-[1.02]" : "shadow-md",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{
        transform: isHovering
          ? `perspective(1000px) rotateX(${position.y * -5}deg) rotateY(${position.x * 5}deg)`
          : "perspective(1000px) rotateX(0) rotateY(0)",
      }}
    >
      {isHovering && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${50 + position.x * 30}% ${
              50 + position.y * 30
            }%, ${glowColor} 0%, rgba(0, 0, 0, 0) 60%)`,
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
