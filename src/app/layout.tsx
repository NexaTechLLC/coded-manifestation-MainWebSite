import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Coded Manifestation - Transform Your Mindset",
  description: "Transform your mindset with daily affirmations. Cultivate positivity, boost confidence, and create lasting change through the power of daily affirmations.",
  keywords: ["affirmations", "manifestation", "mindfulness", "meditation", "positivity", "wellness"],
  authors: [{ name: "NexaTech LLC" }],
  creator: "NexaTech LLC",
  publisher: "NexaTech LLC",
  metadataBase: new URL("https://www.codedmanifestations.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Coded Manifestation - Transform Your Mindset",
    description: "Transform your mindset with daily affirmations. Cultivate positivity, boost confidence, and create lasting change.",
    url: "https://www.codedmanifestations.com",
    siteName: "Coded Manifestation",
    images: [
      {
        url: "/1.png",
        width: 1200,
        height: 630,
        alt: "Coded Manifestation - Transform Your Mindset",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coded Manifestation - Transform Your Mindset",
    description: "Transform your mindset with daily affirmations. Cultivate positivity, boost confidence, and create lasting change.",
    images: ["/1.png"],
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
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1474614683509926"
          crossOrigin="anonymous"></script>
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
