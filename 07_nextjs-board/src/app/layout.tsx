"use client";

import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const path = usePathname();

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen text-gray-900">
        {path !== "/login" && <Header />}

        <main className="flex-1">{children}</main>

        {path !== "/login" && <Footer />}
      </body>
    </html>
  );
}
