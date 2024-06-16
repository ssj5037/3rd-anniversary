"use client";

import localFont from "next/font/local";
import Link from "next/link";
import { usePathname } from "next/navigation";

const gmarketSansMedium = localFont({
  src: "../../../public/font/GmarketSansMedium.otf",
  display: "swap",
});

const gmarketSansLight = localFont({
  src: "../../../public/font/GmarketSansLight.otf",
  display: "swap",
});

const linkCss = `hover:text-violet-400`;
const activeCss = `font-bold text-violet-300 ${gmarketSansMedium.className}`;

export default function Nav() {
  const path = usePathname();
  return (
    <nav
      className={`flex gap-8 items-end justify-center font-light text-xl pb-4 *:transition-all  ${gmarketSansLight.className}`}
    >
      <Link href='/' className={`${linkCss} ${path === "/" && activeCss}`}>
        Main
      </Link>
      <Link
        href='/gallery'
        className={`${linkCss} ${path === "/gallery" && activeCss}`}
      >
        Gallery
      </Link>
      <Link
        href='/message'
        className={`${linkCss} ${path === "/message" && activeCss}`}
      >
        Message
      </Link>
    </nav>
  );
}
