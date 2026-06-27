"use client";

import { useState } from "react";
import Navbar from "./Navbar";

export default function Home() {
  const [lang, setLang] = useState<"fa" | "en" | null>(null);

  const content = {
    fa: {
      title: "BANAFSHEH SORAYANESHAN",
      persian: "بنفشه ثریانشان",
      role1: "Multidisciplinary Designer",
      role2: "Visual Artist",
      role3: "Photographer",
      desc: "طراحی گرافیک • طراحی صنعتی • طراحی مد و فشن • عکاسی",
      portfolio: "مشاهده نمونه‌کارها",
      start: "شروع همکاری",
    },

    en: {
      title: "BANAFSHEH SORAYANESHAN",
      persian: "بنفشه ثریانشان",
      role1: "Multidisciplinary Designer",
      role2: "Visual Artist",
      role3: "Photographer",
      desc: "Graphic Design • Industrial Design • Fashion Design • Photography",
      portfolio: "View Portfolio",
      start: "Start Journey",
    },
  };

  const t = lang ? content[lang] : null;

  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">

      <Navbar lang={lang || "en"} />

      {/* Pearl Glow Background */}
      <div className="absolute inset-0 -z-10">
        <div className="blob blob-1 opacity-70" />
        <div className="blob blob-2 opacity-60" />
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
      </div>

      {/* Language Gate */}
      {!lang && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-2xl">
          <div className="glass w-[90%] max-w-md p-10 text-center rounded-[30px]">

            <h2 className="text-3xl font-light tracking-wider mb-3">
              Choose Language
            </h2>

            <p className="text-white/60 mb-10 text-sm">
              لطفاً زبان مورد نظر خود را انتخاب کنید
            </p>

            <div className="flex gap-4">
              <button onClick={() => setLang("fa")} className="glass-btn flex-1">
                فارسی
              </button>

              <button onClick={() => setLang("en")} className="glass-btn flex-1">
                English
              </button>
            </div>

          </div>
        </div>
      )}

      {/* HERO */}
      {t && (
        <section className="w-full max-w-5xl text-center mt-24">

          <div className="glass rounded-[50px] px-8 py-14 md:px-16 md:py-20">

            {/* Main Name */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-[0.35em] uppercase">
              {t.title}
            </h1>

            {/* Persian Name (more prominent than before) */}
            <h2 className="mt-6 text-2xl md:text-5xl font-medium text-white/95">
              {t.persian}
            </h2>

            {/* Roles stacked (luxury editorial style) */}
            <div className="mt-8 space-y-1">
              <p className="text-lg md:text-2xl text-white/80 tracking-wide">
                {t.role1}
              </p>
              <p className="text-lg md:text-2xl text-white/80 tracking-wide">
                {t.role2}
              </p>
              <p className="text-lg md:text-2xl text-white/80 tracking-wide">
                {t.role3}
              </p>
            </div>

            {/* Description */}
            <p className="mt-8 text-white/60 text-sm md:text-base tracking-[0.15em]">
              {t.desc}
            </p>

            {/* CTA */}
            <div className="mt-14 flex flex-col sm:flex-row justify-center gap-6">
              <button className="glass-btn min-w-[220px] text-base">
                {t.portfolio}
              </button>

              <button className="glass-btn min-w-[220px] text-base">
                {t.start}
              </button>
            </div>

          </div>

        </section>
      )}
    </main>
  );
}