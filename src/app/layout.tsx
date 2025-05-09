import type { Metadata } from "next";
import "./globals.css";

import { ThemeProvider } from "@/context/theme-provider";
import Navbar from "@/components/Navbar";
import ToastPortal  from "@/components/ToastPortal";
import { SpeedInsights } from "@vercel/speed-insights/next"
export const metadata: Metadata = {
  title: "Nexe",
  description: "Nexe: Share Media",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8352205427716619"
          crossOrigin="anonymous"></script>
      </head>
      <body
      >
        {/* <AuthProvider> */}
        <ThemeProvider>
          <Navbar />
          {children}
          <SpeedInsights />
          <ToastPortal/>
        </ThemeProvider>
        {/* </AuthProvider> */}
       
      </body>
    </html>
  );
}
