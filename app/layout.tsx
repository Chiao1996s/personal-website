import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chiao Lin — Designer & Founder",
  description: "Human-Centered Product & Systems Designer. Founder & CEO at Mixel Studio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        <Nav />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-gray-200 py-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Chiao Lin
        </footer>
      </body>
    </html>
  );
}
