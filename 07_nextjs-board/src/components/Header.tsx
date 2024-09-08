"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const path = usePathname();

  return (
    <>
      <header className="flex items-center gap-2 py-2 px-4">
        <h1 className="text-xl font-bold">ALOTUS</h1>

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
    </>
  );
};
export default Header;
