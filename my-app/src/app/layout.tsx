import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Educational platform",
  description: "platform for educational purposes",
};

export default function RootLayout({children}:any) {
  return (
    <html lang="en" className="w-[100%]">
      <body className=" w-[100%] h-[100%]">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
