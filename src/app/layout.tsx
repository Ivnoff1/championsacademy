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
  title: {
    default: "The Champions Academy Mx",
    template: "%s | The Champions Academy Mx",
  },
  description:
    "The Champions Academy Mx La academia con más campeonatos año tras año.",
  keywords: ["Futbol", "Academia de futbol"],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL,
  },
  icons: {
    icon: "/favicon.ico",
  },
  // OpenGraph para redes sociales (Facebook, LinkedIn, etc.)
  openGraph: {
    title: "The Champions Academy Mx",
    description: "La academia con más campeonatos año tras año.",
    url:
      process.env.NEXT_PUBLIC_BASE_URL ||
      "https://www.championsacademy.vercel.app",
    siteName: "Atlético San Rafael",
    images: [
      {
        url: "/opengraph-image.png", // Imagen por defecto: 1200x630px recomendada
        width: 1200,
        height: 630,
        alt: "The Champions Academy Mx",
        type: "image/jpeg",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  // Twitter Cards para X/Twitter
  twitter: {
    card: "summary_large_image",
    title: "The Champions Academy Mx",
    description: "La academia con más campeonatos año tras año.",
    images: ["/opengraph-image.png"], // Reutiliza la misma imagen OG
    creator: "@championsacademy", // Reemplaza con tu handle de Twitter si tienes
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
