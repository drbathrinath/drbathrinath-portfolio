import type { Metadata } from "next";
import {
  Fraunces,
  Plus_Jakarta_Sans,
  Geist_Mono,
} from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. BATHRINATH M S | Clinical Intelligence Portfolio",
  description:
    "Pharm.D graduate focused on Pharmacovigilance, Drug Safety, Clinical Data Management and Clinical Research.",
  keywords: [
    "Dr. Bathrinath M S",
    "Pharm.D",
    "Pharmacovigilance",
    "Drug Safety",
    "Clinical Research",
    "Clinical Data Management",
  ],
  openGraph: {
    title: "Dr. BATHRINATH M S | Clinical Intelligence Portfolio",
    description:
      "Evidence-led Pharm.D portfolio for Drug Safety, Pharmacovigilance, Clinical Data Management and Clinical Research roles.",
    type: "profile",
  },
  twitter: {
    card: "summary",
    title: "Dr. BATHRINATH M S | Clinical Intelligence Portfolio",
    description:
      "Evidence-led Pharm.D portfolio for Drug Safety, Pharmacovigilance, Clinical Data Management and Clinical Research roles.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${fraunces.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
