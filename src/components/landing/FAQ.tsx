"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Apakah butuh koneksi internet cepat?",
    answer:
      "Tidak. BULAENG tetap dapat digunakan meski koneksi terbatas — modul dapat diputar online atau diunduh untuk dipakai offline penuh.",
  },
  {
    question: "Perangkat apa saja yang bisa digunakan?",
    answer:
      "Fleksibel: Smart TV, Android TV, Proyektor/Infokus, Laptop (Windows/Mac), serta Tablet/Smartphone.",
  },
  {
    question: "Apakah materi sesuai Kurikulum Merdeka?",
    answer:
      "Ya, seluruh materi mengacu pada Kurikulum Merdeka dan Capaian Pembelajaran (CP).",
  },
  {
    question: "Apakah ada pelatihan untuk guru?",
    answer:
      "Ada — pelatihan singkat 30–60 menit beserta panduan pengoperasian praktis.",
  },
  {
    question: "Apakah Pilot Project ini gratis?",
    answer:
      "Ya, gratis 100% untuk 5 sekolah terpilih di Kabupaten Sumbawa Barat.",
  },
  {
    question: "Apa saja yang didapatkan sekolah?",
    answer:
      "Video Animasi 3D, Worksheet Siap Cetak, Panduan Guru, Aktivitas Diskusi, dan Evaluasi Ringkas.",
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    // Section Padding 80px (py-20) & Background Navy #111B38 sesuai DS BLG-DS-001
    <section id="faq" className="py-20 bg-[#111B38] relative overflow-hidden">
      {/* Visual Accent Circle Pattern khas Brand Book */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full border border-[#D4AF37]/10 pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute top-0 right-0 w-60 h-60 rounded-full border border-[#D4AF37]/10 pointer-events-none translate-x-1/3 -translate-y-1/3" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10">
        {/* SECTION HEADER */}
        <div className="text-center mb-16">
          {/* Caption: Inter Medium 12/13px + Gold BULAENG #D4AF37 */}
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-[#D4AF37]"></span>
            <p className="text-[13px] font-medium text-[#D4AF37] uppercase tracking-widest font-sans">
              Pertanyaan &amp; Jawaban
            </p>
            <span className="w-6 h-[2px] bg-[#D4AF37]"></span>
          </div>

          {/* Heading: Poppins ExtraBold + Warna White #FFFFFF */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
            Sering Ditanyakan
          </h2>

          <p className="mt-4 text-[15px] text-[#A0A6B1] max-w-xl mx-auto font-sans leading-relaxed">
            Segala informasi dasar mengenai fleksibilitas dan pelaksanaan Pilot Project BULAENG.
          </p>
        </div>

        {/* ACCORDION LIST */}
        <div className="space-y-5">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                // Card System: Radius 20px, Shadow Lembut, Header Navy, Accent Gold, Tanpa Border Hitam
                className={`rounded-[20px] bg-[#111B38] border transition-all duration-300 shadow-[0_12px_40px_rgba(0,0,0,0.08)] ${
                  isOpen
                    ? "border-[#D4AF37] bg-opacity-100"
                    : "border-[#D4AF37]/20 hover:border-[#D4AF37]/60"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  // Card Padding 24px (p-6)
                  className="w-full p-6 flex items-center justify-between text-left focus:outline-none group"
                >
                  {/* Sub Heading / Question: Poppins SemiBold */}
                  <span className="text-18px sm:text-[18px] font-semibold text-white group-hover:text-[#D4AF37] transition-colors duration-300 font-sans pr-4">
                    {item.question}
                  </span>

                  {/* Icon System: Outline style (Lucide) + Accent Gold */}
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-300 shrink-0 ${
                      isOpen
                        ? "bg-[#D4AF37] text-[#111B38] border-[#D4AF37] rotate-180"
                        : "bg-transparent text-[#D4AF37] border-[#D4AF37]/40"
                    }`}
                  >
                    <ChevronDown size={20} strokeWidth={2} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-[#D4AF37]/10">
                    {/* Body Text: Inter + Warna Soft Grey / Light Grey */}
                    <p className="text-[15px] text-[#A0A6B1] leading-relaxed font-sans">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;