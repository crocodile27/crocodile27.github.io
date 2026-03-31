"use client";

import React from "react";
import { motion } from "framer-motion";
import GoldDivider from "@/components/ui/GoldDivider";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import OrnateCorners from "@/components/ui/OrnateCorners";

const FOUNDERS = [
  {
    name: "Maryanne Alhallak",
    initials: "MA",
    title: "Co-Founder",
    credentials: "BioE + Econ '27",
    highlights: [
      "2x BioTech Startup Founder",
      "Beauty & Lifestyle Influencer",
      "3x Product Manager",
      "BioE Researcher",
    ],
  },
  {
    name: "Anthea Guo",
    initials: "AG",
    title: "Co-Founder",
    credentials: "EECS + BioE '26",
    highlights: [
      "CompBio Researcher + President",
      "SCET Innovation Lead",
    ],
  },
];

const ADVISORS = [
  {
    name: "Daniel Fletcher",
    initials: "DF",
    title: "Scientific Advisor",
    description: "UCB Bioengineering Light Optics Professor, CellScope Inventor",
  },
  {
    name: "Gibran Leesha",
    initials: "GL",
    title: "Clinical Advisor",
    description: "Allskin Dermatology Clinic Manager, 20 years dermatology experience",
  },
  {
    name: "Felix Tu",
    initials: "FT",
    title: "Investor Advisor",
    description: "NFX Biosciences Investor & Market Analyst",
  },
  {
    name: "Jerel Lim",
    initials: "JL",
    title: "Business Advisor",
    description: "CEO of Decode, Board of Directors at Custos Technology, Partner at IOVC",
  },
  {
    name: "Gisu Sue Sadaghiani",
    initials: "GS",
    title: "Legal Advisor",
    description: "General Counsel, AI & Tech Law, Ex-Amazon, Ex-Meta",
  },
];

const TRACTION = [
  { value: "100+", label: "Waitlist" },
  { value: "50+", label: "Customer Interviews" },
  { value: "5", label: "Advisors" },
  { value: "2", label: "Clinical Partnerships" },
];

const CLINICAL_PARTNERS = ["Nucleate", "AllSkin Dermatology"];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Team() {
  return (
    <section id="team" className="bg-cream">
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
            The People
          </motion.p>
          <AnimatedHeading
            as="h2"
            className="text-3xl md:text-4xl lg:text-5xl text-dark-text mb-4"
            shimmer={true}
          >
            Meet the Team
          </AnimatedHeading>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="max-w-xs mx-auto"
          >
            <GoldDivider />
          </motion.div>
        </div>

        {/* Founders */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-16"
        >
          {FOUNDERS.map((founder) => (
            <motion.div
              key={founder.name}
              variants={itemVariants}
              className="relative p-8 border border-primary-gold/25 bg-white/50 rounded-sm overflow-hidden group hover:border-primary-gold/50 transition-colors duration-300"
            >
              <OrnateCorners size={28} />
              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Avatar */}
                <div className="w-20 h-20 rounded-full border-2 border-primary-gold/50 bg-gradient-to-br from-primary-gold/20 to-primary-gold/5 flex items-center justify-center mb-5 group-hover:border-primary-gold transition-colors duration-300">
                  <span className="font-playfair text-xl font-bold text-primary-gold">
                    {founder.initials}
                  </span>
                </div>

                {/* Name & title */}
                <h3 className="font-playfair text-xl font-semibold text-dark-text mb-1">
                  {founder.name}
                </h3>
                <p className="font-inter text-xs text-primary-gold tracking-[0.2em] uppercase mb-1">
                  {founder.title}
                </p>
                <p className="font-inter text-xs text-dark-text/50 mb-5">
                  {founder.credentials}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {founder.highlights.map((h) => (
                    <span
                      key={h}
                      className="font-inter text-xs px-2.5 py-1 border border-primary-gold/30 text-dark-text/70 rounded-sm bg-primary-gold/5"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* Traction callout banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-card-dark border border-primary-gold/25 rounded-sm px-8 py-8 mb-16 overflow-hidden"
        >
          <OrnateCorners size={24} />
          <div className="relative z-10">
            {/* Stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
              {TRACTION.map(({ value, label }) => (
                <div key={label} className="text-center">
                  <p className="font-playfair text-2xl md:text-3xl font-bold gold-shimmer-text mb-1">
                    {value}
                  </p>
                  <p className="font-inter text-xs text-cream/60 tracking-wide uppercase">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            {/* Clinical partners */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <p className="font-inter text-xs text-cream/40 tracking-[0.2em] uppercase">
                Clinical Partners
              </p>
              <div className="flex items-center gap-3">
                {CLINICAL_PARTNERS.map((partner) => (
                  <span
                    key={partner}
                    className="font-inter text-xs font-semibold px-3 py-1.5 border border-primary-gold/40 text-primary-gold bg-primary-gold/10 rounded-sm tracking-wide"
                  >
                    {partner}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Advisors */}
        <div className="mb-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <p className="font-inter text-xs text-primary-gold/70 tracking-[0.25em] uppercase mb-3">
              Advisory Board
            </p>
            <h3 className="font-playfair text-2xl md:text-3xl text-dark-text">
              Our <span className="gold-shimmer-text">Advisors</span>
            </h3>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
          >
            {ADVISORS.map((advisor) => (
              <motion.div
                key={advisor.name}
                variants={itemVariants}
                className="relative p-5 border border-primary-gold/20 bg-white/40 rounded-sm text-center group hover:border-primary-gold/45 transition-colors duration-300 overflow-hidden"
              >
                {/* Small corner accents */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-primary-gold/40" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-primary-gold/40" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-primary-gold/40" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-primary-gold/40" />

                {/* Avatar */}
                <div className="w-12 h-12 rounded-full border border-primary-gold/40 bg-gradient-to-br from-primary-gold/15 to-primary-gold/5 flex items-center justify-center mx-auto mb-3 group-hover:border-primary-gold/70 transition-colors duration-300">
                  <span className="font-playfair text-sm font-bold text-primary-gold">
                    {advisor.initials}
                  </span>
                </div>
                <h4 className="font-playfair text-sm font-semibold text-dark-text mb-1 leading-tight">
                  {advisor.name}
                </h4>
                <p className="font-inter text-xs text-primary-gold/80 tracking-wide uppercase mb-2">
                  {advisor.title}
                </p>
                <p className="font-inter text-xs text-dark-text/55 leading-relaxed">
                  {advisor.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom divider */}
        <div className="mt-8">
          <GoldDivider />
        </div>
      </div>
    </section>
  );
}
