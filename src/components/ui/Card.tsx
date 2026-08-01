import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Card: React.FC<CardProps> = ({ children, className = "", style }) => {
  return (
    <div
      style={style}
      className={`bg-[#111B38] border border-[#D4AF37]/30 rounded-[20px] p-6 relative overflow-visible transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
};