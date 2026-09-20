import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yonas Kassahun | Full-Stack Developer, AI Learner & Video Editor",
  description:
    "Official portfolio of Yonas Kassahun — Full-Stack Developer, AI Learner, and Cinematic Video Editor. Specializing in high-performance web systems, intelligent multi-agent AI architectures, and dynamic video post-production.",
  keywords: [
    "Yonas Kassahun",
    "Full-Stack Developer",
    "AI Learner",
    "Video Editor",
    "Next.js",
    "TypeScript",
    "Python",
    "PyTorch",
    "AgarAI",
    "AdwaSec",
    "Software Engineer",
    "Ethiopia",
  ],
  authors: [{ name: "Yonas Kassahun" }],
  creator: "Yonas Kassahun",
  openGraph: {
    title: "Yonas Kassahun | Full-Stack Developer, AI Learner & Video Editor",
    description:
      "Official portfolio of Yonas Kassahun — Full-Stack Developer, AI Learner, and Cinematic Video Editor.",
    url: "https://yonaskassahun.pro.et",
    siteName: "Yonas Kassahun Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yonas Kassahun | Full-Stack Developer, AI Learner & Video Editor",
    description:
      "Official portfolio of Yonas Kassahun — Full-Stack Developer, AI Learner, and Cinematic Video Editor.",
  },
  alternates: {
    canonical: "https://yonaskassahun.pro.et",
  },
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
