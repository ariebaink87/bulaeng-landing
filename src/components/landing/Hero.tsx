"use client";

import React from "react";
import Image from "next/image";

export const Hero: React.FC = () => {
  return (
    <section id="beranda" className="relative min-h-screen pt-32 pb-20 bg-[#111B38] overflow-hidden flex items-center">
      
      {/* 1. POLA BINTIK-BINTIK EMAS (BACKGROUND DOT PATTERN) */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-25"
        style={{
          backgroundImage: `radial-gradient(#D4AF37 1px, transparent 1px)`,
          backgroundSize: `24px 24px`,
        }}
      />

      {/* 2. SOFT AMBIENT GLOW BACKGROUND */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#D4AF37]/10 blur-[140px] rounded-full pointer-events-none z-0" />

      {/* Grid Container 12 Kolom (Max Width 1440px) */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Pioneer Badge */}
        <div className="flex justify-start mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111B38]/90 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold animate-subtle-float font-sans backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping" />
            ✦ Pionir Transformasi Digital Pendidikan Modern Indonesia
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          {/* Kolom Kiri: Headline & CTA */}
          <div className="lg:col-span-7 space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15] tracking-tight font-sans">
              Ekosistem Pendidikan <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-[#D4AF37] to-amber-500">
                Masa Depan yang Terstruktur &amp; Visioner
              </span>
            </h1>

            {/* Body Text Font Inter */}
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed max-w-2xl font-medium font-sans">
              <strong className="text-white font-bold">BULAENG</strong> mengdigitalisasi ekosistem belajar masa depan melalui modul pembelajaran Kurikulum Merdeka yang interaktif, personal, dan mudah dikelola oleh pendidik di berbagai jenjang.
            </p>

            {/* Feature Badges dengan Animasi Mengapung (Floating) & Staggered Delay */}
            <div className="flex flex-wrap gap-3 pt-2">
              {[
                { icon: "🤖", text: "AI-Powered Learning", delay: "0s" },
                { icon: "📘", text: "Kurikulum Merdeka", delay: "0.2s" },
                { icon: "👨‍👩‍👧", text: "Terintegrasi Orang Tua", delay: "0.4s" },
                { icon: "🏫", text: "Ramah Pendidik & Guru", delay: "0.6s" },
              ].map((badge, index) => (
                <div
                  key={index}
                  style={{ animationDelay: badge.delay }}
                  className="h-[44px] px-5 bg-[#111B38]/90 border border-[#D4AF37]/30 rounded-[24px] flex items-center gap-2.5 text-xs font-semibold text-slate-200 shadow-sm transition-all duration-300 hover:border-[#D4AF37] hover:scale-105 hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] font-sans backdrop-blur-sm animate-bounce [animation-duration:3s]"
                >
                  <span className="text-base">{badge.icon}</span>
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#contact"
                className="h-[52px] px-8 bg-[#D4AF37] hover:bg-[#b8972e] text-[#111B38] font-semibold text-sm rounded-[14px] flex items-center justify-center transition-all duration-300 hover:scale-[1.02] shadow-[0_12px_40px_rgba(0,0,0,0.08)] font-sans uppercase tracking-wide"
              >
                Mulai Pilot Project Gratis
              </a>
              <a
                href="#ekosistem"
                className="h-[52px] px-8 bg-[#111B38]/80 hover:bg-[#1c2c52] text-white border border-[#D4AF37]/30 font-semibold text-sm rounded-[14px] flex items-center justify-center transition-all duration-300 hover:border-[#D4AF37]/60 font-sans backdrop-blur-sm"
              >
                Pelajari Ekosistem
              </a>
            </div>
          </div>

          {/* Kolom Kanan: Founder Card & Video Showcase */}
          <div className="lg:col-span-5 space-y-7"> 
            
            {/* 1. Founder Card */}
            <div className="bg-[#111B38]/90 border border-[#D4AF37]/30 rounded-[20px] p-6 relative backdrop-blur-md shadow-xl">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#D4AF37] to-amber-700 p-0.5 shadow-lg overflow-hidden shrink-0 flex items-center justify-center">
                  <Image
                    src="/bustanil-founder.png"
                    alt="Bustanil Arifin - Founder BULAENG"
                    width={56}
                    height={56}
                    className="object-cover rounded-full w-full h-full"
                  />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base font-sans">Bustanil Arifin</h4>
                  <p className="text-xs text-[#D4AF37] font-semibold font-sans">Founder &amp; CEO BULAENG</p>
                </div>
              </div>
              <p className="text-slate-200 text-xs sm:text-sm italic leading-relaxed font-medium font-sans">
                &ldquo;Kami tidak membangun sekadar platform digital. Kami membangun jembatan agar setiap anak memperoleh pengalaman belajar yang lebih baik.&rdquo;
              </p>
            </div>

            {/* 2. Video Showcase Card */}
            <div className="bg-[#111B38]/90 border border-[#D4AF37]/30 rounded-[20px] p-4 backdrop-blur-md shadow-xl">
              <div className="relative aspect-video rounded-[14px] overflow-hidden bg-slate-900 border border-[#D4AF37]/20">
                <iframe
                  className="w-full h-full border-0"
                  src="https://drive.google.com/file/d/1nwskcx-QftlMCueXUIo7YjLcMMhwI1H3/preview"
                  title="BULAENG Interactive Demo"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>
              <div className="flex items-center justify-between mt-3 px-1 font-sans">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                  <span className="text-xs font-semibold text-slate-200">Demo Platform Showcase</span>
                </div>
                <span className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-bold">
                  Interactive Showcase
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;