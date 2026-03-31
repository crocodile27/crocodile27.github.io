import React from "react";
import GoldDivider from "./GoldDivider";

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  variant?: "light" | "dark";
  className?: string;
  showTopDivider?: boolean;
  showBottomDivider?: boolean;
}

export default function SectionWrapper({
  children,
  id,
  variant = "light",
  className = "",
  showTopDivider = true,
  showBottomDivider = true,
}: SectionWrapperProps) {
  const bgClass = variant === "dark" ? "bg-card-dark" : "bg-cream";
  const textClass = variant === "dark" ? "text-cream" : "text-dark-text";

  return (
    <section
      id={id}
      className={`relative w-full ${bgClass} ${textClass} ${className}`}
    >
      {showTopDivider && (
        <div className="px-6 md:px-12 lg:px-24 pt-6">
          <GoldDivider />
        </div>
      )}
      <div className="px-6 md:px-12 lg:px-24 py-16 md:py-24">{children}</div>
      {showBottomDivider && (
        <div className="px-6 md:px-12 lg:px-24 pb-6">
          <GoldDivider />
        </div>
      )}
    </section>
  );
}
