
import Header from "@/containers/Header";
import "./globals.css";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Educational platform",
  description: "platform for educational purposes",
};

export default function RootLayout({children}:any) {
  return (
    <html>
      <body>
        <Header/>
          {children}
      </body>
    </html>
  );
}
