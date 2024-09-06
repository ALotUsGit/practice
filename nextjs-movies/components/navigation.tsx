"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default async function Navigation({ id }: { id: string }) {
  const path = usePathname();

  return (
    <nav className="mb-4">
      <ul className="flex justify-center gap-4 py-4 text-white">
        <li>
          <Link
            href={`/${id}`}
            className={`px-2 ${
              path === `/${id}` && "text-yellow-500 font-bold"
            }`}
          >
            MOVIE
          </Link>
        </li>
        <li>
          <Link
            href={`/${id}/credits`}
            className={`px-2 ${
              path === `/${id}/credits` && "text-yellow-500 font-bold"
            }`}
          >
            CREDIT
          </Link>
        </li>
      </ul>
    </nav>
  );
}
