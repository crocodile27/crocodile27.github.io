import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "outline" | "filled";
}

export default function Badge({
  children,
  className = "",
  variant = "outline",
}: BadgeProps) {
  const variantClass =
    variant === "filled"
      ? "bg-primary-gold text-card-dark"
      : "border border-primary-gold/60 text-primary-gold bg-primary-gold/10";

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-inter font-medium tracking-wider uppercase ${variantClass} ${className}`}
    >
      {children}
    </span>
  );
}
