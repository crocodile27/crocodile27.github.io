"use client";

import React from "react";
import { motion } from "framer-motion";

interface AnimatedHeadingProps {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4";
  className?: string;
  shimmer?: boolean;
  delay?: number;
}

export default function AnimatedHeading({
  children,
  as: Tag = "h2",
  className = "",
  shimmer = true,
  delay = 0,
}: AnimatedHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      <Tag
        className={`font-playfair ${
          shimmer ? "gold-shimmer-text" : ""
        } ${className}`}
      >
        {children}
      </Tag>
    </motion.div>
  );
}
