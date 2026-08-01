"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111B38] border-t border-[#D4AF37]/20 pt-16 pb-12 relative z-10 text-slate-300 font-sans">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Identity & Logo */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center">
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 shrink-0 -mr-2 sm:-mr-3 translate-y-1 sm:translate-y-1.5">
                <Image
                  src="/logo.png"
                  alt="BULAENG OS Logo"
                  fill
                  sizes="64px"
                  className="object-contain mix-blend-screen scale-125"
                />
              </div>
              <span className="text-3xl font-extrabold tracking-tight text-white pl-1 leading-none font-sans">
                BULAENG<span className="text-[#D4AF37]">OS</span>
              </span>
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed font-medium max-w-sm pt-1 font-sans">
              Platform Edukasi Terintegrasi Berbasis AI untuk Transformasi Pendidikan Enterprise. Menyajikan pengalaman belajar modern dan terstruktur bagi sekolah di seluruh Indonesia.
            </p>

            {/* TAMBAHAN 1: TITIK INOVASI */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#111B38] border border-[#D4AF37]/30 rounded-[10px] text-xs font-semibold text-[#D4AF37] pt-1 shadow-sm font-sans">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
              <span>Titik Inovasi: Sumbawa Barat, NTB</span>
            </div>
          </div>

          {/* Navigasi / Platform */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold text-[#D4AF37] tracking-wider uppercase font-sans">
              Platform
            </h5>
            <ul className="space-y-2 text-xs font-medium text-slate-400 font-sans">
              <li><Link href="#ekosistem" className="hover:text-white transition-colors">Teacher Copilot</Link></li>
              <li><Link href="#ekosistem" className="hover:text-white transition-colors">Dashboard Kepsek</Link></li>
              <li><Link href="#ekosistem" className="hover:text-white transition-colors">Portal Orang Tua</Link></li>
              <li><Link href="#ekosistem" className="hover:text-white transition-colors">Integrasi Dinas</Link></li>
            </ul>
          </div>

          {/* Perusahaan */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold text-[#D4AF37] tracking-wider uppercase font-sans">
              Perusahaan
            </h5>
            <ul className="space-y-2 text-xs font-medium text-slate-400 font-sans">
              <li><Link href="#beranda" className="hover:text-white transition-colors">Tentang BULAENG</Link></li>
              <li><Link href="#beranda" className="hover:text-white transition-colors">Tim Pendiri</Link></li>
              <li><Link href="#keunggulan" className="hover:text-white transition-colors">Roadmap 2026</Link></li>
            </ul>
          </div>

          {/* TAMBAHAN 2: KONTAK LENGKAP */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold text-[#D4AF37] tracking-wider uppercase font-sans">
              Kontak
            </h5>
            <div className="space-y-2.5 text-xs text-slate-400 font-medium leading-relaxed font-sans">
              <p className="flex items-start gap-2">
                <span className="shrink-0">📍</span>
                <span>Kabupaten Sumbawa Barat, Nusa Tenggara Barat, Indonesia</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="shrink-0">💬</span>
                <span>
                  WhatsApp Admin:{" "}
                  <a 
                    href="https://wa.me/6285808466078" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-[#D4AF37] transition-colors"
                  >
                    +62 858-0846-6078
                  </a>
                </span>
              </p>
              <p className="flex items-center gap-2">
                <span className="shrink-0">✉️</span>
                <span>
                  Kemitraan Resmi:{" "}
                  <a 
                    href="mailto:pilot@bulaeng.id" 
                    className="hover:text-[#D4AF37] transition-colors"
                  >
                    pilot@bulaeng.id
                  </a>
                </span>
              </p>
            </div>
          </div>

        </div>

        {/* Copyright Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 font-medium gap-4 font-sans">
          <p>© {new Date().getFullYear()} BULAENG OS. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Syarat &amp; Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;