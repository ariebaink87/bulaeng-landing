"use client";

import React from "react";
import Image from "next/image";

interface TrustItem {
  id: string;
  title: string;
  subtitle: string;
  logoSrc: string;
  imageStyle?: string; // Class kustom per logo
}

const trustItems: TrustItem[] = [
  {
    id: "sumbawa",
    title: "Sumbawa Barat",
    subtitle: "Titik Inovasi Awal",
    logoSrc: "/ksblogo.png",
    imageStyle: "translate-y-1 scale-110", // Diturunkan sedikit & disesuaikan ukurannya
  },
  {
    id: "kurikulum",
    title: "Kurikulum Merdeka",
    subtitle: "Salaras Capaian",
    logoSrc: "/curriculum.png",
    imageStyle: "scale-140 sm:scale-[1.45]", // Diperbesar signifikan agar seimbang
  },
  {
    id: "nasional",
    title: "Standar Nasional",
    subtitle: "Multijenjang",
    logoSrc: "/Logosekolah.png",
    imageStyle: "scale-110",
  },
];

export const TrustBar: React.FC = () => {
  return (
    <section className="py-10 bg-[#0A1128] relative z-10 border-b border-slate-800/60 overflow-visible">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SUBTITLE SECTION */}
        <p className="text-[10px] sm:text-xs font-bold text-[#D4AF37] tracking-[0.25em] uppercase text-center mb-6">
          STANDAR TEKNOLOGI TERPERCAYA UNTUK EKOSISTEM PENDIDIKAN INDONESIA
        </p>

        {/* GRID CARD - DENGAN BORDER GOLD */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 items-center justify-between">
          {trustItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-center gap-3.5 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-[#131F3A]/60 border border-[#D4AF37]/40 backdrop-blur-sm shadow-lg hover:border-[#D4AF37] hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:-translate-y-0.5 transition-all duration-300 w-full"
            >
              {/* CONTAINER LOGO */}
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 shrink-0 flex items-center justify-center">
                <Image
                  src={item.logoSrc}
                  alt={item.title}
                  fill
                  sizes="56px"
                  className={`object-contain mix-blend-screen p-1 transition-transform duration-300 ${
                    item.imageStyle || ""
                  }`}
                />
              </div>

              {/* TEKS INFORMASI */}
              <div className="flex flex-col justify-center min-w-0 text-left">
                <h4 className="text-sm sm:text-base font-bold text-white tracking-tight truncate leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs font-medium text-slate-400 truncate mt-0.5">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TrustBar;