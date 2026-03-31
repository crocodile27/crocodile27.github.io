import React from "react";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import GoldDivider from "@/components/ui/GoldDivider";

export default function Footer() {
  return (
    <footer className="bg-card-dark text-cream">
      {/* Ornate gold top border */}
      <div className="px-6 md:px-12 lg:px-24 pt-8">
        <GoldDivider />
      </div>

      <div className="px-6 md:px-12 lg:px-24 py-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Logo + tagline */}
          <div className="text-center md:text-left">
            <p className="font-playfair text-2xl font-bold gold-shimmer-text mb-2">
              Lumeria
            </p>
            <p className="font-inter text-sm text-cream/50 italic">
              Illuminate your skin with clinical clarity.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a
              href="#"
              className="font-inter text-xs text-cream/50 hover:text-primary-gold transition-colors tracking-widest uppercase"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="font-inter text-xs text-cream/50 hover:text-primary-gold transition-colors tracking-widest uppercase"
            >
              Terms of Service
            </a>
            <a
              href="mailto:hello@lumeria.ai"
              className="font-inter text-xs text-cream/50 hover:text-primary-gold transition-colors tracking-widest uppercase"
            >
              Contact
            </a>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="Instagram"
              className="w-8 h-8 rounded-full border border-primary-gold/30 flex items-center justify-center text-cream/50 hover:text-primary-gold hover:border-primary-gold/60 transition-all duration-200"
            >
              <Instagram size={14} />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-full border border-primary-gold/30 flex items-center justify-center text-cream/50 hover:text-primary-gold hover:border-primary-gold/60 transition-all duration-200"
            >
              <Linkedin size={14} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="w-8 h-8 rounded-full border border-primary-gold/30 flex items-center justify-center text-cream/50 hover:text-primary-gold hover:border-primary-gold/60 transition-all duration-200"
            >
              <Twitter size={14} />
            </a>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-10 pt-6 border-t border-primary-gold/15 text-center">
          <p className="font-inter text-xs text-cream/30 tracking-wide">
            © 2026 Lumeria. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
