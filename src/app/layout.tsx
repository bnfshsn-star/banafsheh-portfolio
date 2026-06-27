import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BANAFSHEH | Multidisciplinary Designer",
  description: "Portfolio of Banafsheh Soryaneshan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fa"
      dir="rtl"
      suppressHydrationWarning
      className="h-full scroll-smooth"
    >
      <body
        className="
          min-h-screen
          text-white
          antialiased
          overflow-x-hidden
        "
      >
        {children}
      </body>
    </html>
  );
}