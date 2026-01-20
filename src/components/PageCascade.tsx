"use client";

import type { ReactNode } from "react";
import { Children, useEffect, useState } from "react";
import { motion, useReducedMotion, easeOut } from "framer-motion";

type PageCascadeProps = {
  children: ReactNode;
  className?: string;
};

const containerVariants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: .2,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: easeOut, // use imported easing function
    },
  },
};

export default function PageCascade({ children, className }: PageCascadeProps) {
  const reduceMotion = useReducedMotion();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={isReady ? "show" : "hidden"}
      className={className}
    >
      {Children.toArray(children).map((child, index) => (
        <motion.div
          key={(child as { key?: string | null }).key ?? index}
          variants={itemVariants}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
