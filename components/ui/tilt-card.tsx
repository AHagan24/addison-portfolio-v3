"use client";

import { useCallback, useState, type CSSProperties, type ReactNode } from "react";
import { motion } from "framer-motion";

interface MousePos {
  readonly x: number;
  readonly y: number;
}

const MAX_TILT_DEG = 5;
const HOVER_SCALE = 1.02;

export function TiltCard({
  children,
  className,
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  const [mousePos, setMousePos] = useState<MousePos>({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({
      x: (x / rect.width - 0.5) * MAX_TILT_DEG * 2,
      y: (y / rect.height - 0.5) * -MAX_TILT_DEG * 2,
    });
  }, []);

  const handleLeave = useCallback(() => {
    setHovered(false);
    setMousePos({ x: 0, y: 0 });
  }, []);

  return (
    <motion.div
      className={className}
      style={{ ...style, transformStyle: "preserve-3d" }}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleLeave}
      animate={{
        rotateX: mousePos.y,
        rotateY: mousePos.x,
        scale: hovered ? HOVER_SCALE : 1,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 35, mass: 0.8 }}
    >
      {children}
    </motion.div>
  );
}
