"use client";

import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const path = usePathname();

  return (
    <html lang="en">
      <body className="flex flex-col gap-8 min-h-screen text-gray-900">
        {path !== "/login" && (
          <header className="flex items-center gap-2 py-2 px-4">
            <h1 className="text-xl font-bold">PLACE MATE</h1>

            <nav className="flex-auto flex justify-center gap-4">
              <Link
                href="/"
                className={`${
                  path === "/" && "text-indigo-500"
                } transition hover:opacity-70`}
              >
                home
              </Link>

              <Link
                href="/community"
                className={`${
                  path === "/community" && "text-indigo-500"
                } transition hover:opacity-70`}
              >
                community
              </Link>
            </nav>

            <Link
              href="/login"
              className="ml-auto py-1 px-3 text-white text-sm bg-indigo-400 rounded transition hover:opacity-70"
            >
              Log out
            </Link>
          </header>
        )}

        <main className="flex-1">{children}</main>

        {path !== "/login" && (
          <footer className="py-6 px-4 text-zinc-300 text-center bg-gray-800">
            <p>&copy; aryeon - practice Next.js</p>
          </footer>
        )}
      </body>
    </html>
  );
}
