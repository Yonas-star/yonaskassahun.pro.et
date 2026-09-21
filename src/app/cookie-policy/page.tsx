import type { Metadata } from "next";
import CookiePolicyClient from "./CookiePolicyClient";

export const metadata: Metadata = {
  title: "Cookie Policy | Yonas Kassahun",
  description:
    "Official Cookie and Local Storage Policy for Yonas Kassahun's portfolio website. Learn how your data and preferences are protected.",
  alternates: {
    canonical: "https://yonaskassahun.pro.et/cookie-policy",
  },
  openGraph: {
    title: "Cookie Policy | Yonas Kassahun",
    description:
      "Official Cookie and Local Storage Policy for Yonas Kassahun's portfolio website.",
    url: "https://yonaskassahun.pro.et/cookie-policy",
    siteName: "Yonas Kassahun Portfolio",
    type: "website",
  },
};

export default function CookiePolicyPage() {
  return <CookiePolicyClient />;
}
