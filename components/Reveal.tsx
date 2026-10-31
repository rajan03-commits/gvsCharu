"use client";

import type { ReactNode } from "react";
import { motion, MotionConfig } from "motion/react";

export default function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    // "user" = if the visitor's device asks for reduced motion, the slide is
    // skipped and only the gentle fade remains
    <MotionConfig reducedMotion="user">
      <motion.div
        className={className}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        // once: true = play the first time only.
        // Change to false to replay every time it scrolls into view (not recommended).
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4, delay, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </MotionConfig>
  );
}