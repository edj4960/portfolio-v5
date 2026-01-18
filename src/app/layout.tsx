import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Evan Jones | Next.js Developer",
  description:
    "Next.js developer specializing in pixel-perfect builds from Figma, production debugging, performance fixes, and CMS-driven sites. Available for freelance and contract work.",
  openGraph: {
    title: "Evan Jones — Next.js Developer (Build + Debug + Optimize)",
    description:
      "I build and rescue production Next.js apps: pixel-perfect implementation, debugging/hydration fixes, performance tuning, and CMS integrations.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="night">
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
