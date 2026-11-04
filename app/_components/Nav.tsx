'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu } from "react-icons/fi";

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
        bg-slate-950/60 text-amber-50
        rounded-md
      "
    >
      <div className="md:flex items-center gap-1 hidden">
        {buttons.map((el) => (
          <Link
            key={el.link}
            href={el.link}
            className={
              `
                py-1 px-4
                rounded-md
                cursor-pointer
                duration-500
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
      </div>
      <div
        className="
          py-2 px-6 rounded-md
          bg-green-700
          text-gray-800 text-lg
          cursor-pointer duration-300
          active:scale-95
          block md:hidden
        "
      >
        <FiMenu />
      </div>
    </nav>
  )
}