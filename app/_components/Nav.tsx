'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Button {
  name: string;
  link: string;
}

const buttons: Button[] = [
  { "name": "Overview", "link": "/" },
  { "name": "Skills", "link": "/skills" },
  { "name": "Repository", "link": "/repository" },
  { "name": "Contact", "link": "/contact" }
]

export default function Nav() {
  const pathname = usePathname()
  return (
    <nav
      className="
        w-max p-1
        flex items-center gap-1
        bg-slate-950/60 text-amber-50
        rounded-md
      "
    >
      {buttons.map((el) => (
        <Link
          key={el.link}
          href={el.link}
          className={
            `
              py-1 px-4
              rounded-md
              cursor-pointer
              ${
                pathname === el.link
                ? "py-2 px-6 bg-green-700 text-gray-800"
                : "hover:bg-gray-600"
              }
            `
          }
        >
          {el.name}
        </Link>
      ))}
    </nav>
  )
}