import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yonas Kassahun | YOKA 3D Portfolio",
  description: "Creative Developer & 3D Interactive Portfolio",
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
    <html lang="en" className={`${inter.className} scroll-smooth`}>
      <body className="bg-[#f5f5f7] text-zinc-900 antialiased selection:bg-zinc-300 selection:text-zinc-900">
        {children}
      </body>
    </html>
  );
}
