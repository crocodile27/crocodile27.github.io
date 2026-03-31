import React from "react";

interface OrnateCornersProps {
  className?: string;
  color?: string;
  size?: number;
}

export default function OrnateCorners({
  className = "",
  color = "#C9A84C",
  size = 40,
}: OrnateCornersProps) {
  const CornerSVG = ({ rotate }: { rotate: number }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <path
        d="M2 2 L2 14 M2 2 L14 2"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M2 8 L8 2"
        stroke={color}
        strokeWidth="0.75"
        strokeLinecap="round"
        opacity="0.6"
      />
      <circle cx="2" cy="2" r="1.5" fill={color} />
      <path
        d="M6 2 L6 5 M2 6 L5 6"
        stroke={color}
        strokeWidth="0.75"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      <div className="absolute top-0 left-0">
        <CornerSVG rotate={0} />
      </div>
      <div className="absolute top-0 right-0">
        <CornerSVG rotate={90} />
      </div>
      <div className="absolute bottom-0 right-0">
        <CornerSVG rotate={180} />
      </div>
      <div className="absolute bottom-0 left-0">
        <CornerSVG rotate={270} />
      </div>
    </div>
  );
}
