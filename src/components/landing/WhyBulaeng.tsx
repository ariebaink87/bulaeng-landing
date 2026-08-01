import React from "react";

export const WhyBulaeng: React.FC = () => {
  return (
    <>
      {/* SECTION KEUNGGULAN EKOSISTEM */}
      <section id="fitur" className="py-20 md:py-28 bg-[#FAFAFC] relative overflow-visible">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              Keunggulan Ekosistem BULAENG
            </h2>
            <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111B38] tracking-tight font-heading leading-tight">
              Satu Platform Terintegrasi untuk Seluruh Stakeholder
            </p>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Menghubungkan sekolah, pengajar, dan orang tua dalam satu lingkungan digital yang efisien, transparan, dan ramah tumbuh kembang peserta didik.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 overflow-visible p-2">
            {/* Card 01 - Navy Card di atas Latar Putih */}
            <div 
              className="bg-[#111B38] p-8 rounded-3xl border border-[#D4AF37]/40 space-y-5 transition-all duration-300 hover:border-[#D4AF37] hover:-translate-y-1"
              style={{ boxShadow: "0 10px 30px rgba(212, 175, 55, 0.25)" }}
            >
              <div className="w-14 h-14 rounded-2xl bg-[#D4AF37] text-[#111B38] flex items-center justify-center font-black text-2xl shadow-md">
                01
              </div>
              <h3 className="text-xl font-bold text-white font-heading">
                Pusat Pembelajaran Edukatif
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                Antarmuka modern dan ramah pengguna yang menyajikan materi interaktif secara terstruktur untuk mendukung perkembangan kognitif di setiap tahap belajar.
              </p>
            </div>

            {/* Card 02 */}
            <div 
              className="bg-[#111B38] p-8 rounded-3xl border border-[#D4AF37]/40 space-y-5 transition-all duration-300 hover:border-[#D4AF37] hover:-translate-y-1"
              style={{ boxShadow: "0 10px 30px rgba(212, 175, 55, 0.25)" }}
            >
              <div className="w-14 h-14 rounded-2xl bg-[#D4AF37] text-[#111B38] flex items-center justify-center font-black text-2xl shadow-md">
                02
              </div>
              <h3 className="text-xl font-bold text-white font-heading">
                Efisiensi Pengajar Modern
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                Para guru dapat menyusun modul, melakukan pencatatan presisi, dan mencetak laporan perkembangan murid dalam hitungan menit.
              </p>
            </div>

            {/* Card 03 */}
            <div 
              className="bg-[#111B38] p-8 rounded-3xl border border-[#D4AF37]/40 space-y-5 transition-all duration-300 hover:border-[#D4AF37] hover:-translate-y-1"
              style={{ boxShadow: "0 10px 30px rgba(212, 175, 55, 0.25)" }}
            >
              <div className="w-14 h-14 rounded-2xl bg-[#D4AF37] text-[#111B38] flex items-center justify-center font-black text-2xl shadow-md">
                03
              </div>
              <h3 className="text-xl font-bold text-white font-heading">
                Safe Cloud & Kinerja Tinggi
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                Arsitektur cloud global dengan performa Lighthouse skor tinggi (&ge; 95) serta standar keamanan data enkripsi tinggi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION TAHAPAN KEMITRAAN */}
      <section id="pilot" className="py-20 bg-[#FAFAFC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              Tahapan Kemitraan B2B
            </h2>
            <p className="text-3xl font-extrabold text-[#111B38] font-heading">
              Langkah Mudah Implementasi Pilot Project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="bg-[#111B38] p-6 rounded-2xl border border-[#D4AF37]/30 space-y-3 shadow-md transition-all hover:border-[#D4AF37]">
              <div className="w-10 h-10 rounded-full bg-[#D4AF37] text-[#111B38] font-bold flex items-center justify-center mx-auto text-sm">
                1
              </div>
              <h4 className="font-bold text-white text-sm">Pendaftaran</h4>
              <p className="text-xs text-gray-300">Isi formulir kemitraan singkat via WhatsApp.</p>
            </div>
            
            <div className="bg-[#111B38] p-6 rounded-2xl border border-[#D4AF37]/30 space-y-3 shadow-md transition-all hover:border-[#D4AF37]">
              <div className="w-10 h-10 rounded-full bg-[#D4AF37] text-[#111B38] font-bold flex items-center justify-center mx-auto text-sm">
                2
              </div>
              <h4 className="font-bold text-white text-sm">Orientasi Guru</h4>
              <p className="text-xs text-gray-300">Pelatihan singkat 30 menit penggunaan platform.</p>
            </div>

            <div className="bg-[#111B38] p-6 rounded-2xl border border-[#D4AF37]/30 space-y-3 shadow-md transition-all hover:border-[#D4AF37]">
              <div className="w-10 h-10 rounded-full bg-[#D4AF37] text-[#111B38] font-bold flex items-center justify-center mx-auto text-sm">
                3
              </div>
              <h4 className="font-bold text-white text-sm">Uji Coba Kelas</h4>
              <p className="text-xs text-gray-300">Penerapan modul interaktif bersama murid.</p>
            </div>

            <div 
              className="bg-[#111B38] p-6 rounded-2xl border border-[#D4AF37] space-y-3 shadow-lg"
              style={{ boxShadow: "0 0 20px rgba(212, 175, 55, 0.35)" }}
            >
              <div className="w-10 h-10 rounded-full bg-[#D4AF37] text-[#111B38] font-bold flex items-center justify-center mx-auto text-sm">
                4
              </div>
              <h4 className="font-bold text-white text-sm">Evaluasi Laporan</h4>
              <p className="text-xs text-gray-300">Penerbitan laporan hasil belajar digital anak.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};