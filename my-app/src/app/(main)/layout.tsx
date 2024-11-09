
import Header from "@/containers/Header";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Educational platform",
  description: "platform for educational purposes",
};

export default function MainLayout({children}:any) {
  return (
    <>
        <main>{children}</main>
    </>
      
  );
}
