"use client";

import React from "react";
import { motion } from "framer-motion";
import OrnateCorners from "./OrnateCorners";

interface StatCardProps {
  number: string;
  label: string;
  description: string;
  delay?: number;
}

export default function StatCard({
  number,
  label,
  description,
  delay = 0,
}: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="relative p-8 border border-primary-gold/30 bg-card-dark/80 rounded-sm overflow-hidden group"
    >
      <OrnateCorners size={28} />
      <div className="relative z-10">
        <p className="font-playfair text-4xl md:text-5xl font-bold gold-shimmer-text mb-1">
          {number}
        </p>
        <p className="font-playfair text-lg text-primary-gold mb-3 uppercase tracking-widest text-sm">
          {label}
        </p>
        <p className="font-inter text-cream/70 text-sm leading-relaxed">
          {description}
        </p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}
