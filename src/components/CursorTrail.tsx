import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CursorTrailProps {
  targetRef: React.RefObject<HTMLDivElement>;
}

const CursorTrail = ({ targetRef }: CursorTrailProps) => {
  const [trail, setTrail] = useState<{ x: number; y: number; id: string }[]>([]);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (!targetRef.current) return;

      const { left, top, width, height } = targetRef.current.getBoundingClientRect();
      
      if (e.clientX >= left && e.clientX <= left + width && e.clientY >= top && e.clientY <= top + height) {
        setTrail((prev) => [
          ...prev.slice(-10),
          { x: e.clientX - left, y: e.clientY - top, id: Math.random().toString() },
        ]);
      }
    };

    if (targetRef.current) {
      targetRef.current.addEventListener("mousemove", moveCursor);
    }

    return () => {
      if (targetRef.current) {
        targetRef.current.removeEventListener("mousemove", moveCursor);
      }
    };
  }, [targetRef]);

  return (
    <div className="absolute inset-0 pointer-events-none z-50">
      {trail.map(({ x, y, id }, index) => (
        <motion.div
          key={id}
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 1.5 }}
          transition={{ duration: 0.5 }}
          className="absolute"
          style={{
            left: x,
            top: y,
            width: "1px",
            height: "150px",
            background: `hsl(${(index * 36) % 360}, 100%, 70%)`,
            transform: "translate(-50%, -50%) rotate(45deg)",
          }}
        />
      ))}
    </div>
  );
};

export default CursorTrail;
