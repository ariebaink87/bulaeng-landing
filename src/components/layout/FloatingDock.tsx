"use client";

import React from "react";

export const FloatingDock: React.FC = () => {
  const navItems = [
    { label: "Presensi Realtime", icon: "⏱️", href: "#" },
    { label: "Dashboard Guru", icon: "👨‍🏫", href: "#" },
    { label: "Portal Kepsek", icon: "🏛️", href: "#" },
    { label: "Portal Orang Tua", icon: "👨‍👩‍👧", href: "#" },
    { label: "HQ Admin", icon: "⚙️", href: "#" },
  ];

  return (
    <aside className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3">
      {navItems.map((item, index) => (
        <a
          key={index}
          href={item.href}
          title={item.label}
          /* Dimensi 60px x 60px dengan Hover Glow Emas Membesar & Scale */
          className="w-[60px] h-[60px] rounded-[20px] bg-[#131F3A]/90 border border-[#D4AF37]/30 flex items-center justify-center text-xl backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-[#D4AF37] hover:bg-[#1c2c52] glow-gold-premium-hover group relative"
        >
          <span>{item.icon}</span>

          {/* Tooltip Label */}
          <span className="absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-[#0A1128] text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 border border-[#D4AF37]/30 pointer-events-none shadow-lg">
            {item.label}
          </span>
        </a>
      ))}
    </aside>
  );
};

export default FloatingDock;