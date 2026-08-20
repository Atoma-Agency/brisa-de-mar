import type { Metadata } from "next";
import { Manrope, Fraunces } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal"],
});

export const metadata: Metadata = {
  title: "Brisa de Mar | Centro de belleza y bienestar",
  description:
    "Centro de belleza y bienestar en Cunit, a un paso del Mediterráneo. Tratamientos pensados para cuidarte y desconectar en un espacio íntimo.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${manrope.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
