"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#111B38]/90 backdrop-blur-md border-b border-[#D4AF37]/20 py-2.5 shadow-xl"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* BRAND LOGO */}
        <Link href="/" className="flex items-center group">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 -mr-3 sm:-mr-4 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/logo.png"
              alt="BULAENG Logo"
              fill
              sizes="(max-width: 640px) 64px, 80px"
              className="object-contain mix-blend-screen scale-125"
              priority
            />
          </div>
          
          <div className="flex flex-col justify-center pl-1">
            <div className="flex items-center gap-2">
              <span className="text-2xl sm:text-3xl font-extrabold tracking-wider text-white leading-none font-sans">
                BULAENG
              </span>
              <span className="px-2 py-0.5 text-[10px] font-extrabold bg-[#D4AF37] text-[#111B38] rounded-md uppercase tracking-wider font-sans">
                EDTECH
              </span>
            </div>
            <span className="text-[10px] sm:text-[11px] font-bold text-[#D4AF37] tracking-[0.2em] uppercase mt-1 font-sans">
              ILMU ADALAH EMAS
            </span>
          </div>
        </Link>

        {/* NAVIGATION LINKS */}
        <nav className="hidden md:flex items-center gap-16 lg:gap-20 py-2">
          <Link
            href="#beranda"
            className="text-xs font-semibold text-slate-200 tracking-wider hover:text-[#D4AF37] transition-all duration-300 font-sans"
          >
            Beranda
          </Link>
          <Link
            href="#keunggulan"
            className="text-xs font-semibold text-slate-200 tracking-wider hover:text-[#D4AF37] transition-all duration-300 font-sans"
          >
            Keunggulan
          </Link>
          <Link
            href="#ekosistem"
            className="text-xs font-semibold text-slate-200 tracking-wider hover:text-[#D4AF37] transition-all duration-300 font-sans"
          >
            Ekosistem
          </Link>
          <Link
            href="#faq"
            className="text-xs font-semibold text-slate-200 tracking-wider hover:text-[#D4AF37] transition-all duration-300 font-sans"
          >
            FAQ
          </Link>
        </nav>

        {/* CTA BUTTON: LOGIN (Standard Primary Button BLG-DS-001) */}
        <div className="flex items-center gap-4">
          <Link
            href="/auth/login"
            className="h-[42px] px-7 bg-[#D4AF37] hover:bg-[#b8972e] text-[#111B38] font-semibold text-xs rounded-[14px] flex items-center justify-center transition-all duration-300 hover:scale-105 shadow-[0_12px_40px_rgba(0,0,0,0.08)] font-sans tracking-wider uppercase"
          >
            LOGIN
          </Link>
        </div>

      </div>
    </header>
  );
};

export default Header;