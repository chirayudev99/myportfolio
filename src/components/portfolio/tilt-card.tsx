import { motion, useMotionValue, useSpring } from "motion/react";
import {
  useRef,
  type HTMLAttributes,
  type MouseEvent,
  type PointerEvent,
  type ReactNode,
} from "react";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function TiltCard({ children, className = "", delay = 0 }: TiltCardProps) {
  const card = useRef<HTMLDivElement>(null);
  const rotateX = useSpring(useMotionValue(0), { stiffness: 180, damping: 22 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 180, damping: 22 });

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (!card.current || event.pointerType !== "mouse") return;
    const bounds = card.current.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    card.current.style.setProperty("--pointer-x", `${(x + 0.5) * 100}%`);
    card.current.style.setProperty("--pointer-y", `${(y + 0.5) * 100}%`);
    rotateX.set(y * -5);
    rotateY.set(x * 5);
  }

  function resetTilt() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      ref={card}
      className={`portfolio-tilt-card ${className}`}
      style={{ rotateX, rotateY, transformPerspective: 1100 }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.99 }}
    >
      {children}
    </motion.div>
  );
}

export function SpotlightCard({
  children,
  className = "",
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  const card = useRef<HTMLDivElement>(null);

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    if (!card.current) return;
    const bounds = card.current.getBoundingClientRect();
    card.current.style.setProperty("--mx", `${event.clientX - bounds.left}px`);
    card.current.style.setProperty("--my", `${event.clientY - bounds.top}px`);
  }

  return (
    <div
      ref={card}
      className={`spotlight-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        card.current?.style.removeProperty("--mx");
        card.current?.style.removeProperty("--my");
      }}
      {...props}
    >
      {children}
    </div>
  );
}
