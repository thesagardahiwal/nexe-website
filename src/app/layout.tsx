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
