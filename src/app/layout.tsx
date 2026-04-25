import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CODED MANIFESTATIONS™️ - Transform Your Mindset",
  description: "Transform your mindset with daily affirmations. Cultivate positivity, boost confidence, and create lasting change through the power of daily affirmations.",
  keywords: ["affirmations", "manifestation", "mindfulness", "meditation", "positivity", "wellness"],
  authors: [{ name: "NEXATECH®️ LLC" }],
  creator: "NEXATECH®️ LLC",
  publisher: "NEXATECH®️ LLC",
  metadataBase: new URL("https://www.codedmanifestations.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "CODED MANIFESTATIONS™️ - Transform Your Mindset",
    description: "Transform your mindset with daily affirmations. Cultivate positivity, boost confidence, and create lasting change.",
    url: "https://www.codedmanifestations.com",
    siteName: "CODED MANIFESTATIONS™️",
    images: [
      {
        url: "/favicon.png",
        secureUrl: "https://www.codedmanifestations.com/favicon.png",
        width: 512,
        height: 512,
        alt: "CODED MANIFESTATIONS™️ - Transform Your Mindset",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "CODED MANIFESTATIONS™️ - Transform Your Mindset",
    description: "Transform your mindset with daily affirmations. Cultivate positivity, boost confidence, and create lasting change.",
    images: ["https://www.codedmanifestations.com/favicon.png"],
    creator: "@codedmanifestation",
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.png", sizes: "96x96", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: [
      { url: "/favicon.png", sizes: "180x180", type: "image/png" },
    ],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="google-site-verification" content="FkbCrqq9HGDcAVFk0SWHsRwL5J9vNtFKj5Np58_YgmY" />
        <meta name="google-adsense-account" content="ca-pub-1474614683509926" />
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-L6F3359D8T"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-L6F3359D8T');
            `,
          }}
        />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1474614683509926"
          crossOrigin="anonymous"></script>
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
