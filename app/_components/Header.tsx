import { SiGithub, SiTelegram } from "react-icons/si";
import { ReactNode } from "react";
import Link from "next/link";

import Nav from "./Nav";

interface SocialButton {
  logo: ReactNode;
  name: string;
  link: string;
}

interface PortfolioData {
  brand: string[];
  buttons: SocialButton[];
}

const data: PortfolioData = {
  "brand": [
    "Xushnud",
    ".dev"
  ],
  "buttons": [
    {
      "logo": <SiGithub />,
      "name": "@Xushnud",
      "link": "https://github.com/xushnudd"
    },
    {
      "logo": <SiTelegram />,
      "name": "telegram",
      "link": "https://t.me/nishonov_xushnud"
    }
  ]
}

export default function Header() {
  return (
    <header className="bg-slate-950/70">
      <div
        className="
          w-full
          p-4
          flex justify-between items-center
          text-xs
        "
      >
        <div
          className="
            flex items-center gap-1
        "
        >
          <div
            className="
            flex
            text-white text-lg
            font-bold
            cursor-pointer
            hover:text-green-600
          "
          >
            {data.brand.map((el, i) => (
              <span
                key={i}
                className={
                  `${i == 1 ? "text-green-600" : ""}`
                }
              >
                {el}
              </span>
            ))}
          </div>
          <div
            className="
            inline-block
            py-0.5 px-1
            border border-gray-500 rounded-[5px]
            bg-gray-600
            text-amber-50 text-xs
            cursor-pointer
          "
          >
            v0.0.1
          </div>
        </div>
        <Nav />
        <div className="w-max flex gap-2">
          {data.buttons.map((el, i) => (
            <Link
              key={el.link}
              href={el.link}
              className={
                `
                  w-max
                  py-1 px-4 rounded-md
                  flex justify-center items-center gap-0.5
                  ${
                    i == 1
                    ? "bg-green-600"
                    : "bg-gray-600 hover:bg-gray-500 hover:text-green-600"
                  }
                `
              }
            >
              <span>{el.logo}</span>
              <span>{el.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}