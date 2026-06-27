"use client";

import { useState } from "react";
import Link from "next/link";

type NavbarProps = {
  lang?: "fa" | "en";
};

export default function Navbar({ lang = "en" }: NavbarProps) {
  const [open, setOpen] = useState(false);

  const links = {
    fa: [
      { title: "خانه", href: "/" },
      { title: "نمونه کار", href: "/portfolio" },
      { title: "خدمات", href: "/services" },
      { title: "درباره من", href: "/about" },
      { title: "تماس", href: "/contact" },
    ],

    en: [
      { title: "Home", href: "/" },
      { title: "Portfolio", href: "/portfolio" },
      { title: "Services", href: "/services" },
      { title: "About", href: "/about" },
      { title: "Contact", href: "/contact" },
    ],
  };

  return (
    <nav
      dir={lang === "fa" ? "rtl" : "ltr"}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl"
    >
      {/* Desktop */}

      <div className="hidden lg:flex items-center justify-between glass rounded-full px-8 py-3">

        {/* Logo */}

        <Link
          href="/"
          className="select-none"
        >
          <h1 className="text-xl font-bold tracking-[0.35em]">
            BANAFSHEH
          </h1>

          <p className="text-[11px] text-white/60 tracking-[0.28em]">
            DESIGN STUDIO
          </p>
        </Link>

        {/* Links */}

        <div className="flex items-center gap-2">

          {links[lang].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="
              px-4
              py-2
              rounded-full
              text-white/75
              hover:text-white
              hover:bg-white/10
              transition-all
              duration-300
              "
            >
              {item.title}
            </Link>
          ))}

        </div>

        {/* Buttons */}

        <div className="flex gap-3">

          <Link
            href="/reviews"
            className="glass-btn"
          >
            {lang === "fa" ? "نظرات" : "Reviews"}
          </Link>

          <Link
            href="/order"
            className="glass-btn"
          >
            {lang === "fa" ? "ثبت سفارش" : "Order"}
          </Link>

        </div>

      </div>

      {/* Mobile Header */}

      <div className="lg:hidden flex items-center justify-between glass rounded-full px-5 py-3">

        <div>

          <h1 className="font-bold tracking-[0.25em]">
            BANAFSHEH
          </h1>

        </div>

        <button
          className="menu-btn text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}

      <div
        className={`
        transition-all
        duration-300
        overflow-hidden
        ${open ? "max-h-[700px] mt-4" : "max-h-0"}
        `}
      >
        <div className="glass rounded-3xl p-5">

          <div className="flex flex-col gap-2">

            {links[lang].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="
                rounded-xl
                px-4
                py-3
                text-white/80
                hover:text-white
                hover:bg-white/10
                transition
                "
              >
                {item.title}
              </Link>
            ))}

          </div>

          <div className="mt-6 flex flex-col gap-3">

            <Link
              href="/reviews"
              className="glass-btn justify-center"
            >
              {lang === "fa" ? "نظرات" : "Reviews"}
            </Link>

            <Link
              href="/order"
              className="glass-btn justify-center"
            >
              {lang === "fa" ? "ثبت سفارش" : "Order"}
            </Link>

          </div>

        </div>

      </div>

    </nav>
  );
}