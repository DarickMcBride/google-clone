import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Footer from "./components/Footer";



export const metadata: Metadata = {
  title: "Pixel",
  description: "A Google clone made with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="relative min-h-screen">
        <Providers>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
