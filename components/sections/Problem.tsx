"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock, Eye, Activity, TrendingUp } from "lucide-react";
import GoldDivider from "@/components/ui/GoldDivider";
import AnimatedHeading from "@/components/ui/AnimatedHeading";

const STATS = [
  {
    number: "1 in 4",
    label: "Americans",
    description:
      "have a skin condition causing pain, scarring, sleep disturbance, and serious psychosocial impact",
  },
  {
    number: "32 Days",
    label: "Average Wait Time",
    description: "average wait time for a dermatologist appointment",
  },
  {
    number: "$5B/yr",
    label: "Economic Burden",
    description:
      "lost from direct and indirect costs like lack of early diagnosis and overprescription",
  },
];

const PAIN_POINTS = [
  {
    Icon: Clock,
    title: "Access & Wait Times",
    description:
      "Long wait times, limited information, & delays between follow-ups leave patients without timely care.",
  },
  {
    Icon: Eye,
    title: "Blind Diagnosis",
    description:
      "Inability to make a precise diagnosis without objective knowledge of the skin leads to misdiagnosis.",
  },
  {
    Icon: Activity,
    title: "No Continuous Monitoring",
    description:
      "No objective clinical eye on progress between appointments means conditions can worsen undetected.",
  },
  {
    Icon: TrendingUp,
    title: "Symptoms Exacerbate",
    description:
      "Prolonged diagnosis can intensify and trigger downstream conditions, compounding the patient's suffering.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Problem() {
  return (
    <section id="problem" className="bg-card-dark text-cream">
      <div className="px-6 md:px-12 lg:px-24 py-20 md:py-28 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-inter text-xs text-primary-gold/70 tracking-[0.25em] uppercase mb-4"
          >
            The Problem
          </motion.p>
          <AnimatedHeading
            as="h2"
            className="text-3xl md:text-4xl lg:text-5xl mb-6 text-cream"
            shimmer={false}
          >
            <span className="gold-shimmer-text">This Story Is Very Common...</span>
          </AnimatedHeading>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="max-w-xl mx-auto"
          >
            <GoldDivider />
          </motion.div>
        </div>

        {/* Stat cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="relative p-8 border border-primary-gold/25 bg-white/5 rounded-sm overflow-hidden group"
            >
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-primary-gold/50" />
              <div className="absolute top-0 right-0 w-5 h-5 border-t border-r border-primary-gold/50" />
              <div className="absolute bottom-0 left-0 w-5 h-5 border-b border-l border-primary-gold/50" />
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-primary-gold/50" />

              <div className="relative z-10">
                <p className="font-playfair text-4xl md:text-5xl font-bold gold-shimmer-text mb-2">
                  {stat.number}
                </p>
                <p className="font-inter text-primary-gold text-xs tracking-[0.2em] uppercase mb-3">
                  {stat.label}
                </p>
                <p className="font-inter text-cream/60 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-gold/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* Gold divider between stats and pain points */}
        <div className="mb-16">
          <GoldDivider />
        </div>

        {/* Pain point grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {PAIN_POINTS.map(({ Icon, title, description }, i) => (
            <motion.div
              key={title}
              variants={itemVariants}
              className="flex gap-5 p-6 border border-primary-gold/15 bg-white/3 rounded-sm hover:border-primary-gold/35 transition-colors duration-300 group"
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-10 h-10 rounded-sm bg-primary-gold/10 border border-primary-gold/30 flex items-center justify-center group-hover:bg-primary-gold/20 transition-colors duration-300">
                <Icon size={18} className="text-primary-gold" />
              </div>
              {/* Text */}
              <div>
                <h3 className="font-playfair text-base font-semibold text-cream mb-2">
                  {title}
                </h3>
                <p className="font-inter text-cream/55 text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
