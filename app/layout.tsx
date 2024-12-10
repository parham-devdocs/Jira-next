import type { Metadata } from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/themeProvider";
import { dark } from "@clerk/themes";
import Footer from "@/components/Footer";

import {
  ClerkProvider,
 
} from '@clerk/nextjs'
import Header from "@/components/header";
const inter = Inter({ subsets: ["latin"] })


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
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        variables: {
          colorBackground: "#2563eb",
          colorInputText: "#2784ed",
          colorInputBackground: "#FFFFFF",
          colorPrimary:"#FFFFFF"
        
          
          
        },
        
      }}
      
    >
      <html lang="en">
        <body className={`${inter.className}`}>
          <ThemeProvider attribute="class" defaultTheme="dark">
            <main>
              <Header />

              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
