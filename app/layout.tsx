import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { Alex_Brush, Mada } from 'next/font/google';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const alexBrush = Alex_Brush({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-alex-brush',
  display: 'swap',
});

const mada = Mada({
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['arabic', 'latin'],
  variable: '--font-mada',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "أ. محمد السيد ابو سريع افضل محامي في الأسكندرية",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar">
      <head>
        {/* Other meta tags if needed */}
      </head>
      <body className={`${mada.variable} ${alexBrush.variable}`}>
        {children}
      </body>
    </html>
  );
}
