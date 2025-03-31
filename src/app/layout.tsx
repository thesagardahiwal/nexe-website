import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/context/authContext";
import { ThemeProvider } from "@/context/theme-provider";
import Navbar from "@/components/Navbar";

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
        <AuthProvider>
          <ThemeProvider>
              <Navbar/>
              {children}
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
