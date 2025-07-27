import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { Alex_Brush, Mada } from 'next/font/google';
import { Analytics } from "@vercel/analytics/next"

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
    <html lang="ar" className="dark">
      <head>
        {/* SEO Meta Tags */}
        <meta name="description" content="مكتب المحامي محمد السيد ابو سريع - افضل محامي في الأسكندرية يقدم استشارات قانونية وخدمات قضايا مدنية، تجارية، جنائية وأسرية بخبرة واحترافية عالية." />
        <meta name="keywords" content="محامي في الأسكندرية, المحامي محمد ابو سريع, افضل محامي في الأسكندرية, استشارات قانونية, محامي قضايا جنائية, محامي قضايا مدنية, محامي قضايا تجارية, محامي قضايا أسرية, محامي صياغة عقود, محامي متخصص, مكتب محاماة الأسكندرية, استشارات قانونية الأسكندرية, محامي طلاق, محامي أحوال شخصية, محامي شركات, محامي قضايا ميراث, محامي قضايا عقارية, محامي قضايا عمالية, محامي قضايا تعويضات, محامي قضايا جنح, محامي قضايا جنايات, محامي قضايا تنفيذ, محامي قضايا استئناف, محامي قضايا نقض, محامي قضايا محكمة الأسرة, محامي قضايا محكمة الجنايات, محامي قضايا محكمة النقض, محامي قضايا محكمة الاستئناف, lawyer in Alexandria, best lawyer in Alexandria, legal consultant Alexandria, Mohamed Abosree lawyer" />
        <meta property="og:title" content="أ. محمد السيد ابو سريع - افضل محامي في الأسكندرية" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://abusreelawfirm.com/" />
        <meta property="og:site_name" content="مكتب المحامي محمد السيد ابو سريع" />
        <meta property="og:description" content="افضل محامي في الأسكندرية - خبرة في القضايا المدنية، التجارية، الجنائية، والأسرية. استشارات قانونية واحترافية عالية من مكتب المحامي محمد السيد ابو سريع." />
        <meta property="og:image" content="/hero-section.jpeg" />
        <meta name="twitter:image" content="/hero-section.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="أ. محمد السيد ابو سريع - افضل محامي في الأسكندرية" />
        <meta name="twitter:description" content="افضل محامي في الأسكندرية - خبرة في القضايا المدنية، التجارية، الجنائية، والأسرية. استشارات قانونية واحترافية عالية من مكتب المحامي محمد السيد ابو سريع." />
        <link rel="canonical" href="https://abusreelawfirm.com/" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "LegalService",
            "name": "مكتب المحامي محمد السيد ابو سريع",
            "image": "/hero-section.jpeg",
            "url": "https://abusreelawfirm.com/",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "الإسكندرية",
              "addressCountry": "مصر"
            },
            "description": "افضل محامي في الأسكندرية يقدم استشارات قانونية وخدمات قضايا مدنية، تجارية، جنائية وأسرية بخبرة واحترافية عالية.",
            "areaServed": "الإسكندرية",
            "telephone": "",
            "priceRange": ""
          }
        `}</script>
        <link rel="icon" href="/favicon.ico" />
        {/* Other meta tags if needed */}
      </head>
      <body className={`${mada.variable} ${alexBrush.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
