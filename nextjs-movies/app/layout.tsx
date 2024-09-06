import "./global.css";
import Navigation from "../components/navigation";
import Link from "next/link";

export const metadata = {
  title: {
    template: "%s | My NextJS",
    default: "HOME | My NextJS",
  },
  description: "This is my first project with NextJS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden flex flex-col max-w-full min-h-screen text-white bg-gray-950">
        <Link
          href="/"
          className="py-4 text-gray-400 text-2xl font-bold text-center"
        >
          A_LOTUS^MOVIE
        </Link>
        {/* <Navigation /> */}

        <main className="flex-auto py-4 px-6 xl:px-12">{children}</main>

        <footer className="py-6 text-zinc-400 text-center">
          NextJS 연습 - nomadcoders.co nextJS CLASS 따라하기
        </footer>
      </body>
    </html>
  );
}
