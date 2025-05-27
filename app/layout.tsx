import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: {
    icon: "/logo.png"
  },
  title: "Studio Bruno Muniz",
  description: "Treinamento personalizado com abordagem integrada de saúde, nutrição e performance. Transforme seu corpo e sua vida com acompanhamento especializado.",
  keywords: [
    "treinamento personalizado",
    "saúde integrada",
    "nutrição",
    "performance humana",
    "Studio Bruno Muniz",
    "academia Belo Horizonte"
  ],
  authors: [{ name: "Studio Bruno Muniz", url: "https://vigel.tech" }],
  openGraph: {
    title: "Studio Bruno Muniz",
    description: "Seu treino, seu resultado. Transforme seu corpo e sua vida com nossa metodologia exclusiva.",
    url: "https://bruno-landing-one.vercel.app",
    siteName: "Studio Bruno Muniz",
    images: [
      {
        url: "https://bruno-landing-one.vercel.app/new/IMG_5296.jpg",
        width: 1200,
        height: 630,
        alt: "Studio Bruno Muniz - Treinamento Personalizado"
      }
    ],
    locale: "pt_BR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio Bruno Muniz",
    description: "Treinamento personalizado com abordagem integrada de saúde, nutrição e performance.",
    images: ["https://bruno-landing-one.vercel.app/new/IMG_5296.jpg"]
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
