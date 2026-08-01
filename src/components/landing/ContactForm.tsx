"use client";

import React, { useState } from "react";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    schoolName: "",
    picName: "",
    whatsappNumber: "",
    schoolEmail: "",
    specialNotes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const targetAdminPhone = "6285808466078";
    const message =
      `Halo Tim Kemitraan BULAENG Indonesia,\n\n` +
      `Saya ingin mendaftarkan sekolah kami untuk Program Pilot Project EdTech BULAENG:\n\n` +
      `🏫 *Nama Sekolah*: ${formData.schoolName}\n` +
      `👤 *Penanggung Jawab*: ${formData.picName}\n` +
      `📱 *No. WA Resmi*: ${formData.whatsappNumber}\n` +
      `✉️ *Email Resmi*: ${formData.schoolEmail}\n` +
      `📝 *Visi / Kebutuhan*: ${formData.specialNotes || "-"}\n\n` +
      `Mohon info langkah orientasi selanjutnya. Terima kasih!`;

    window.open(`https://wa.me/${targetAdminPhone}?text=${encodeURIComponent(message)}`, "_blank");
  };

  // Kelas Standar Input Khas BULAENG (Border Jelas & Glow Emas saat Hover/Focus)
  const inputStyle = "w-full px-5 py-3.5 rounded-xl border-2 border-[#111B38]/30 bg-slate-50/50 text-[#0B132B] placeholder-slate-400 font-medium text-sm transition-all duration-300 outline-none hover:border-[#D4AF37]/70 focus:bg-white focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/20";

  return (
    <section id="kontak" className="py-20 md:py-28 bg-[#FAFAFC] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-2xl space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-[#D4AF37]">
              Formulir Kemitraan B2B
            </h2>
            <p className="text-2xl sm:text-3xl font-extrabold text-[#0B132B] font-heading leading-tight">
              Daftarkan Sekolah Anda untuk Pilot Project BULAENG
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase text-[#0B132B] mb-2.5 font-sans">
                  Nama Sekolah / Lembaga
                </label>
                <input
                  type="text"
                  required
                  placeholder="Lembaga / Sekolah Modern Indonesia"
                  value={formData.schoolName}
                  onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                  className={inputStyle}
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-[#0B132B] mb-2.5 font-sans">
                  Nama Kepala Sekolah / PJ
                </label>
                <input
                  type="text"
                  required
                  placeholder="Nama Lengkap & Gelar"
                  value={formData.picName}
                  onChange={(e) => setFormData({ ...formData, picName: e.target.value })}
                  className={inputStyle}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase text-[#0B132B] mb-2.5 font-sans">
                  Nomor WhatsApp Aktif
                </label>
                <input
                  type="tel"
                  required
                  placeholder="081234567890"
                  value={formData.whatsappNumber}
                  onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                  className={inputStyle}
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-[#0B132B] mb-2.5 font-sans">
                  Email Resmi Sekolah
                </label>
                <input
                  type="email"
                  required
                  placeholder="sekolah.modern@email.com"
                  value={formData.schoolEmail}
                  onChange={(e) => setFormData({ ...formData, schoolEmail: e.target.value })}
                  className={inputStyle}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-[#0B132B] mb-2.5 font-sans">
                Catatan / Kebutuhan Digitalisasi
              </label>
              <textarea
                rows={3}
                placeholder="Ceritakan singkat visi digitalisasi sekolah Anda..."
                value={formData.specialNotes}
                onChange={(e) => setFormData({ ...formData, specialNotes: e.target.value })}
                className={`${inputStyle} resize-none`}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-base py-4 rounded-xl shadow-lg flex items-center justify-center gap-3 transition-all duration-300 active:scale-[0.99] hover:shadow-xl font-sans"
            >
              <span>Hubungi WhatsApp Resmi BULAENG Indonesia</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};