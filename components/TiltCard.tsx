"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface TiltCardProps {
  children?: React.ReactNode;
  image?: string;
  imageAlt?: string;
  className?: string;
  intensity?: number;
  scaleOnHover?: boolean;
  gradientFrom?: string;
  gradientTo?: string;
  height?: string;
  colSpan?: number;
}

export default function TiltCard({
  children,
  image,
  imageAlt = "",
  className = "",
  intensity = 15,
  scaleOnHover = true,
  gradientFrom = "from-primary-500",
  gradientTo = "to-primary-700",
  height = "h-48",
  colSpan = 1,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, {
    stiffness: 500,
    damping: 100,
  });
  const mouseYSpring = useSpring(y, {
    stiffness: 500,
    damping: 100,
  });

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    [`${intensity}deg`, `-${intensity}deg`]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    [`-${intensity}deg`, `${intensity}deg`]
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const colSpanClass = colSpan === 2 ? "col-span-2" : "";

  return (
    <motion.div
      ref={ref}
      className={`${colSpanClass} ${height} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={scaleOnHover ? { scale: 1.05 } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <motion.div
        className={`w-full h-full rounded-2xl shadow-xl overflow-hidden ${
          image
            ? "relative"
            : `bg-gradient-to-br ${gradientFrom} ${gradientTo}`
        }`}
        style={{
          transform: "translateZ(20px)",
        }}
      >
        {image ? (
          <div className="relative w-full h-full">
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {children && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                {children}
              </div>
            )}
          </div>
        ) : (
          <div className="h-full flex items-center justify-center text-white">
            {children}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

