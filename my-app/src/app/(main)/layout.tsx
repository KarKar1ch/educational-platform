
import Header from "@/containers/Header";
import "@/app/globals.css";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Educational platform",
  description: "platform for educational purposes",
};

export default function MainLayout({children}:any) {
  return (
    <>
      <Header key="main-header"/>
        <main>{children}</main>
    </>
      
  );
}
