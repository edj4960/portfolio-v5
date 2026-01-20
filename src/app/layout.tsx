import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageCascade from "@/components/PageCascade";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Evan Jones | Full Stack Web Developer",
  description:
    "Full Stack Web Developer with 5 years of experience building web applications with Next.js, TypeScript, and modern backend stacks.",
  openGraph: {
    title: "Evan Jones — Full Stack Web Developer",
    description:
      "Full Stack Web Developer with experience across Next.js, TypeScript, CMS tooling, search, and checkout flows.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="forest">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <div className="sticky top-0 z-50 border-b border-base-300 bg-base-100/80 backdrop-blur">
            <Navbar />
          </div>
          <main className="flex-1">
            <div className="mx-auto w-full max-w-6xl px-6 py-16">
              {children}
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
