import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const ag = localFont({
  src: [
    {
      path: '/fonts/ag300.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '/fonts/ag400.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '/fonts/ag700.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: "--font-ag",
});

const agg = localFont({
  src: [
    {
      path: '/fonts/agg200.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '/fonts/agg900.otf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: "--font-agg",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Automate Operations, Cut Costs, Scale Fast | AI Systems by Integration.ai",
  description: `We build AI agents that make you more money, cut your overhead, and scale your business without extra hires. 
    Join 100+ businesses using Integration.ai to run automatically, move faster, and scale without limits.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ag.variable} ${agg.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
