import type { Metadata } from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/themeProvider";
import Footer from "@/components/Footer";

const inter=Inter({subsets:["latin"]})


export const metadata: Metadata = {
  title: "Jira clone",
  description: "project management app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <main>{children}</main>
      <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
