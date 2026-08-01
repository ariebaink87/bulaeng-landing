import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, className = "" }) => {
  return (
    <span
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-brand-gold/10 text-brand-gold border border-brand-gold/30 backdrop-blur-md ${className}`}
    >
      {children}
    </span>
  );
};