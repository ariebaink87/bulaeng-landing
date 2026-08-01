import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingDock } from "@/components/layout/FloatingDock";
import { Hero } from "@/components/landing/Hero";
import TrustBar from "@/components/landing/TrustBar";
import { WhyBulaeng } from "@/components/landing/WhyBulaeng";
import { FAQ } from "@/components/landing/FAQ";
import { ContactForm } from "@/components/landing/ContactForm";

export default function Home() {
  return (
    // Background Utama: Navy BULAENG #111B38 | Selection: Gold #D4AF37
    <main className="min-h-screen bg-[#111B38] text-white relative selection:bg-[#D4AF37] selection:text-[#111B38]">
      <Header />
      <FloatingDock />
      <Hero />
      <TrustBar />

      {/* Section Keunggulan / Why Bulaeng (Spacing Section: 80px / py-20) */}
      <section className="py-20 bg-[#111B38]">
        <WhyBulaeng />
      </section>

      {/* BANNER STATISTIK 4 KOLOM DI ATAS FAQ */}
      <section className="py-10 bg-[#111B38]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8">
          <div className="bg-[#111B38] border border-[#D4AF37]/30 rounded-[20px] p-8 sm:p-10 shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-[#D4AF37]/20 text-center items-center">
              
              {/* Item 1 */}
              <div className="pt-4 md:pt-0">
                <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#D4AF37] mb-2 font-sans tracking-tight">
                  100%
                </p>
                <p className="text-xs sm:text-sm font-semibold text-slate-200 tracking-wider uppercase font-sans">
                  Modul Belajar Interaktif
                </p>
              </div>

              {/* Item 2 */}
              <div className="pt-6 md:pt-0">
                <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#D4AF37] mb-2 font-sans tracking-tight">
                  95+
                </p>
                <p className="text-xs sm:text-sm font-semibold text-slate-200 tracking-wider uppercase font-sans">
                  Skor Performa Lighthouse
                </p>
              </div>

              {/* Item 3 */}
              <div className="pt-6 md:pt-0">
                <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#D4AF37] mb-2 font-sans tracking-tight">
                  100%
                </p>
                <p className="text-xs sm:text-sm font-semibold text-slate-200 tracking-wider uppercase font-sans">
                  Standar Kurikulum Nasional
                </p>
              </div>

              {/* Item 4 */}
              <div className="pt-6 md:pt-0">
                <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#D4AF37] mb-2 font-sans tracking-tight">
                  24/7
                </p>
                <p className="text-xs sm:text-sm font-semibold text-slate-200 tracking-wider uppercase font-sans">
                  Sistem Cloud Terintegrasi
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SECTION FAQ (Pertanyaan Umum) */}
      <FAQ />

      {/* Section Tahapan Kemitraan & Form Kontak (Spacing Section: 80px / py-20) */}
      <section className="py-20 bg-[#111B38]">
        <ContactForm />
      </section>

      <Footer />
    </main>
  );
}