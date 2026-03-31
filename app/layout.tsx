import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://crocodile27.github.io/lumeria-web"),
  title: "Lumeria — Illuminate Your Skin",
  description:
    "Lumeria is the first at-home skin diagnostic tool fusing clinical-grade multispectral imaging with AI to deliver personalized recommendations and direct dermatologist support.",
  keywords: ["skin care", "dermatology", "AI", "skin diagnostics", "multispectral imaging"],
  openGraph: {
    title: "Lumeria — Illuminate Your Skin",
    description:
      "The first at-home skin diagnostic tool that fuses clinical-grade imaging with AI to deliver precise recommendations and direct dermatologist support.",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lumeria — Illuminate Your Skin With Clinical Clarity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumeria — Illuminate Your Skin",
    description:
      "The first at-home skin diagnostic tool that fuses clinical-grade imaging with AI.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-cream text-dark-text antialiased">{children}</body>
    </html>
  );
}
