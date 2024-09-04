"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const path = usePathname();

  return (
    <nav>
      <ul className="flex justify-center gap-4 py-4 text-white">
        <li>
          <Link
            href="/"
            className={`px-2 ${path === "/" && "text-yellow-500 font-bold"}`}
          >
            HOME
          </Link>
        </li>
        <li>
          <Link
            href="/credits"
            className={`px-2 ${
              path === "/credits" && "text-yellow-500 font-bold"
            }`}
          >
            CREDIT
          </Link>
        </li>
      </ul>
    </nav>
  );
}
