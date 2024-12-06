
import Header from "@/containers/Header";
import "./globals.css";
import type { Metadata } from "next";
import getUserState from "@/services/auth/userStatus";
import { useEffect } from "react";
import { setupTokenRefresh } from "@/services/auth/setupTokenRefresh";
import RefreshProvider from "@/services/auth/refreshProvider";


export const metadata: Metadata = {
  title: "Educational platform",
  description: "platform for educational purposes",
};

export default async function RootLayout({children}:any) {
  const userState = await getUserState();
  return (
    <html>
      <body>
        <Header userState={userState}/>
        <RefreshProvider>{children}</RefreshProvider>
      </body>
    </html>
  );
}
