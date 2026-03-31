"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import Badge from "@/components/ui/Badge";

const WAITLIST_URL = "https://forms.gle/YKtnnvbPhbG6e8zZ7";

export default function Hero() {
  const handleSeeHowItWorks = (e: React.MouseEvent) => {
    e.preventDefault();
    document
      .querySelector("#how-it-works")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-cream">
      {/* Animated radial gold glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(201,168,76,0.12) 0%, rgba(201,168,76,0.04) 50%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 60%)",
          }}
          animate={{
            scale: [1.05, 1, 1.05],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      {/* Decorative corner lines */}
      <div className="absolute top-24 left-6 md:left-16 opacity-30 pointer-events-none">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <path d="M4 4 L4 28 M4 4 L28 4" stroke="#C9A84C" strokeWidth="1" />
          <circle cx="4" cy="4" r="2" fill="#C9A84C" />
        </svg>
      </div>
      <div className="absolute top-24 right-6 md:right-16 opacity-30 pointer-events-none">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <path d="M76 4 L76 28 M76 4 L52 4" stroke="#C9A84C" strokeWidth="1" />
          <circle cx="76" cy="4" r="2" fill="#C9A84C" />
        </svg>
      </div>

      {/* Main content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-5xl mx-auto px-6 md:px-12"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="flex justify-center mb-6">
          <Badge className="gap-1.5">
            <Sparkles size={10} className="text-primary-gold" />
            Clinical-Grade · AI-Powered · At-Home
          </Badge>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          variants={itemVariants}
          className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
        >
          <span className="gold-shimmer-text">Illuminate Your Skin</span>
          <br />
          <span className="text-dark-text">With Clinical Clarity.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="font-inter text-dark-text/70 text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed mb-10"
        >
          The first at-home skin diagnostic tool that fuses clinical-grade
          multispectral imaging with AI to deliver precise recommendations and
          direct dermatologist support.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href={WAITLIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto font-inter font-semibold px-8 py-3.5 bg-primary-gold text-card-dark rounded-sm hover:bg-deep-gold transition-all duration-200 tracking-wide uppercase text-sm shadow-lg shadow-primary-gold/20 hover:shadow-primary-gold/30 text-center"
          >
            Join the Waitlist
          </a>
          <button
            onClick={handleSeeHowItWorks}
            className="w-full sm:w-auto font-inter font-semibold px-8 py-3.5 border border-primary-gold text-primary-gold rounded-sm hover:bg-primary-gold/10 transition-all duration-200 tracking-wide uppercase text-sm"
          >
            See How It Works
          </button>
        </motion.div>

        {/* Waitlist link hint */}
        <motion.p
          variants={itemVariants}
          className="font-inter text-xs text-dark-text/40 text-center"
        >
          No spam. Early access only.
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-primary-gold/50"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
