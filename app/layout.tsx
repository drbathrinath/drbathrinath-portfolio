import type { Metadata } from "next";
import {
  Plus_Jakarta_Sans,
  Geist_Mono,
} from "next/font/google";
import "./globals.css";

/* ================= FONTS ================= */
const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* ================= SEO METADATA ================= */
export const metadata: Metadata = {
  title: "Dr. Bathrinath M.S. | Pharmacovigilance Portfolio",
  description:
    "Pharm.D Graduate focused on Pharmacovigilance, Drug Safety, Clinical Research and Regulatory Compliance.",

  keywords: [
    "Pharmacovigilance",
    "Drug Safety",
    "Clinical Research",
    "Regulatory Affairs",
    "GCP",
    "PharmD Portfolio",
  ],

  authors: [{ name: "Dr. Bathrinath M.S." }],

  openGraph: {
    title: "Dr. Bathrinath M.S. | Pharmacovigilance Portfolio",
    description:
      "Pharm.D Graduate focused on Pharmacovigilance, Drug Safety, Clinical Research and Regulatory Compliance.",
    url: "https://your-domain.vercel.app",
    siteName: "Dr Portfolio",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Dr Portfolio",
    description:
      "Pharmacovigilance Portfolio - Drug Safety & Clinical Research Professional",
  },
};

/* ================= ROOT LAYOUT ================= */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#050816] text-white antialiased">
        {children}
      </body>
    </html>
  );
}