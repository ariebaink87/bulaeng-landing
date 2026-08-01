import React from "react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export const Founder: React.FC = () => {
  return (
    <section id="founder" className="py-24 bg-[#111B38] border-y border-white/5 relative z-10 overflow-visible">
      <Container>
        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge>Tim & Kepemimpinan</Badge>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-4 font-heading">
            Didedikasikan untuk Transisi <br />
            <span className="text-[#D4AF37]">Digitalisasi Pendidikan Indonesia</span>
          </h2>
          <p className="text-gray-300 mt-4 text-sm md:text-base leading-relaxed">
            BULAENG OS dibangun atas dasar pemahaman mendalam terhadap tantangan administratif guru dan tata kelola sekolah enterprise.
          </p>
        </div>

        {/* THREE FEATURE CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 overflow-visible p-4">
          {/* Card 1: Manajemen Mutu */}
          <Card 
            className="text-center hover:border-[#D4AF37]/80 transition-all duration-300"
            style={{ boxShadow: "0 0 30px rgba(212, 175, 55, 0.30)" }}
          >
            <div className="w-20 h-20 mx-auto rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] font-bold text-2xl mb-6">
              M
            </div>
            <h3 className="text-xl font-bold text-white font-heading">Manajemen Mutu</h3>
            <p className="text-[#D4AF37] text-xs font-medium mt-1">Sistem Standarisasi</p>
            <p className="text-gray-400 text-xs mt-4 leading-relaxed">
              Menghubungkan standar akreditasi dan kurikulum nasional ke dalam workflows kerja harian sekolah.
            </p>
          </Card>

          {/* Card 2: Teacher Copilot (Featured Card - Stronger Gold Ambient Glow) */}
          <Card 
            className="text-center border-[#D4AF37]/80 bg-[#111B38] transition-all duration-300 relative z-20"
            style={{ boxShadow: "0 0 45px rgba(212, 175, 55, 0.50)" }}
          >
            <div className="w-20 h-20 mx-auto rounded-2xl bg-[#D4AF37] flex items-center justify-center text-[#111B38] font-bold text-2xl mb-6">
              AI
            </div>
            <h3 className="text-xl font-bold text-white font-heading">Teacher Copilot</h3>
            <p className="text-[#D4AF37] text-xs font-medium mt-1">Inovasi Kecerdasan Buatan</p>
            <p className="text-gray-400 text-xs mt-4 leading-relaxed">
              Menghemat hingga 70% waktu administratif guru dalam penyusunan modul ajar, asesmen, dan analisis siswa.
            </p>
          </Card>

          {/* Card 3: Integrasi Dinas */}
          <Card 
            className="text-center hover:border-[#D4AF37]/80 transition-all duration-300"
            style={{ boxShadow: "0 0 30px rgba(212, 175, 55, 0.30)" }}
          >
            <div className="w-20 h-20 mx-auto rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] font-bold text-2xl mb-6">
              D
            </div>
            <h3 className="text-xl font-bold text-white font-heading">Integrasi Dinas</h3>
            <p className="text-[#D4AF37] text-xs font-medium mt-1">Big Data Pendidikan</p>
            <p className="text-gray-400 text-xs mt-4 leading-relaxed">
              Memberikan visibilitas dan pelaporan real-time untuk pengawasan tingkat dinas dan wilayah.
            </p>
          </Card>
        </div>
      </Container>
    </section>
  );
};