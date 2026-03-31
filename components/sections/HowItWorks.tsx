"use client";

import React from "react";
import { motion } from "framer-motion";
import { Camera, MessageSquare, BarChart2, ChevronRight } from "lucide-react";
import GoldDivider from "@/components/ui/GoldDivider";
import AnimatedHeading from "@/components/ui/AnimatedHeading";

const STEPS = [
  {
    step: "01",
    Icon: Camera,
    title: "Analyze",
    description:
      "Snap a photo with the Lumoscope™. Choose your body part, capture, repeat.",
  },
  {
    step: "02",
    Icon: MessageSquare,
    title: "Interview",
    description:
      "1:1 interview with Dermbot collects habits, locality, and environment changes.",
  },
  {
    step: "03",
    Icon: BarChart2,
    title: "Results",
    description:
      "Immediate AI-powered recommendations with continuous monitoring and progress tracking.",
  },
];

const FEATURES = [
  { label: "Hydration levels", tech: "Near Infrared" },
  { label: "Redness / Inflammation", tech: "RGB" },
  { label: "Hyperpigmentation & Sebum", tech: "UV" },
  { label: "Texture & Surface Topography", tech: "Polarized" },
  { label: "Lesion Size & Distribution", tech: "High-Res Color Mapping" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const slideInVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const featureVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-cream">
      <div className="px-6 md:px-12 lg:px-24 py-20 md:py-28 max-w-7xl mx-auto">
        {/* Top divider */}
        <div className="mb-16">
          <GoldDivider />
        </div>

        {/* Section header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-inter text-xs text-primary-gold/70 tracking-[0.25em] uppercase mb-4"
          >
            The Process
          </motion.p>
          <AnimatedHeading
            as="h2"
            className="text-3xl md:text-4xl lg:text-5xl text-dark-text mb-4"
            shimmer={true}
          >
            How Lumeria Works
          </AnimatedHeading>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="font-inter text-dark-text/60 text-base max-w-lg mx-auto"
          >
            Three simple steps from capture to clinical-grade insights.
          </motion.p>
        </div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 mb-20 relative"
        >
          {STEPS.map(({ step, Icon, title, description }, i) => (
            <React.Fragment key={step}>
              <motion.div
                variants={slideInVariants}
                className="relative flex flex-col items-center text-center p-8 group"
              >
                {/* Step number background */}
                <div className="relative mb-6">
                  <span className="font-playfair text-7xl font-bold text-primary-gold/10 select-none leading-none">
                    {step}
                  </span>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-primary-gold/10 border border-primary-gold/30 flex items-center justify-center group-hover:bg-primary-gold/20 transition-colors duration-300">
                      <Icon size={22} className="text-primary-gold" />
                    </div>
                  </div>
                </div>

                {/* Step label */}
                <p className="font-inter text-xs text-primary-gold/60 tracking-[0.2em] uppercase mb-2">
                  Step {step}
                </p>
                <h3 className="font-playfair text-xl font-semibold text-dark-text mb-3">
                  {title}
                </h3>
                <p className="font-inter text-dark-text/60 text-sm leading-relaxed max-w-xs">
                  {description}
                </p>
              </motion.div>

              {/* Connector arrow (between steps, hidden on mobile) */}
              {i < STEPS.length - 1 && (
                <div className="hidden md:flex items-center justify-center absolute top-1/2 -translate-y-1/2"
                  style={{ left: `${(i + 1) * 33.333}%`, transform: "translate(-50%, -50%)" }}
                >
                  <div className="flex items-center gap-1 text-primary-gold/40">
                    <div className="w-8 h-px bg-primary-gold/30" />
                    <ChevronRight size={14} className="text-primary-gold/40" />
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </motion.div>

        {/* Gold divider */}
        <div className="mb-16">
          <GoldDivider />
        </div>

        {/* Features grid */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <p className="font-inter text-xs text-primary-gold/70 tracking-[0.25em] uppercase mb-3">
              Multispectral Capabilities
            </p>
            <h3 className="font-playfair text-2xl md:text-3xl text-dark-text">
              What the{" "}
              <span className="gold-shimmer-text">Lumoscope™</span>{" "}
              Detects
            </h3>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {FEATURES.map(({ label, tech }) => (
              <motion.div
                key={label}
                variants={featureVariants}
                className="flex items-center justify-between px-5 py-4 border border-primary-gold/20 bg-white/60 rounded-sm hover:border-primary-gold/50 hover:bg-white/80 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-gold flex-shrink-0" />
                  <span className="font-inter text-sm text-dark-text">
                    {label}
                  </span>
                </div>
                <span className="font-inter text-xs text-primary-gold/70 bg-primary-gold/10 px-2.5 py-1 rounded-sm border border-primary-gold/20 tracking-wide">
                  {tech}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom divider */}
        <div className="mt-16">
          <GoldDivider />
        </div>
      </div>
    </section>
  );
}
