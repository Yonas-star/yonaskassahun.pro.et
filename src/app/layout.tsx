import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yonas Kassahun | Full-Stack Developer & AI Learner",
  description: "Portfolio of Yonas Kassahun — Full-Stack Developer, AI Learner & Video Editor.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} scroll-smooth bg-[#09090b]`}>
      <body className="bg-[#09090b] text-zinc-100 antialiased selection:bg-zinc-800 selection:text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
