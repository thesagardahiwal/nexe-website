import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/context/theme-provider";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import ToastPortal from "@/components/ToastPortal";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Nexe Technologies",
    template: "%s | Nexe Technologies",
  },
  description:
    "Nexe Technologies builds privacy-first digital infrastructure for anonymous sharing and secure communication.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8352205427716619"
          crossOrigin="anonymous"></script>
      </head>
      <body className="bg-background text-foreground antialiased">
        {/* <AuthProvider> */}
        <ThemeProvider>
          <Navbar />
          {children}
          <SiteFooter />
          <SpeedInsights />
          <ToastPortal/>
        </ThemeProvider>
        {/* </AuthProvider> */}
       
      </body>
    </html>
  );
}
