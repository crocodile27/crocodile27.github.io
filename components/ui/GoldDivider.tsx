import React from "react";

interface GoldDividerProps {
  className?: string;
}

export default function GoldDivider({ className = "" }: GoldDividerProps) {
  return (
    <div className={`flex items-center gap-3 w-full ${className}`}>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary-gold to-primary-gold opacity-60" />
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <path
          d="M8 0L10.5 5.5L16 8L10.5 10.5L8 16L5.5 10.5L0 8L5.5 5.5L8 0Z"
          fill="#C9A84C"
        />
      </svg>
      <div className="flex-1 h-px bg-gradient-to-l from-transparent via-primary-gold to-primary-gold opacity-60" />
    </div>
  );
}
