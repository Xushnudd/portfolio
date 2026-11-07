import { ReactNode } from "react";
import Link from "next/link";
import { SiGithub, SiTelegram } from "react-icons/si";
import { FiClock } from "react-icons/fi";
import Nav from "./Nav";
import PulseDot from "./PulseDot";

interface Time {
  logo: ReactNode;
  name: string;
}

interface SocialButton {
  logo: ReactNode;
  name: string;
  link: string;
}

interface PortfolioData {
  brand: string[];
  action: string;
  buttons: SocialButton[];
  time: Time;
}

const data: PortfolioData = {
  "brand": [
    "Xushnud",
    ".dev"
  ],
  "action": "OPEN TO WORK / ACTIVE",
  "time": {
    "logo": <FiClock />,
    "name": "Tashkent UTC+5"
  },
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
    <header
      className="
        w-full
        sticky top-0 z-50
        bg-slate-950/70
        border-b border-gray-900
        "
    >
      <div
        className="
          max-w-7xl
          mx-auto p-4
          flex justify-between items-center
          text-xs
        "
      >
        <div
          className="
            sm:flex items-center gap-1
            hidden
        "
        >
          <div
            className="
            flex
            text-white text-lg
            font-bold
            cursor-pointer
            hover:text-emerald-400
          "
          >
            {data.brand.map((el, i) => (
              <span
                key={i}
                className={
                  `${i == 1 ? "text-emerald-400" : ""}`
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

        <div
          className="
          px-2 py-0.5 rounded-md
          bg-slate-950/60
          border border-emerald-950
          hidden xl:block
        "
        >
          <div className="flex items-center gap-2">
            <PulseDot size={10} color="bg-emerald-400" />
            <span className="text-emerald-400">
              {data.action}
            </span>
          </div>
        </div>

        <Nav />

        <div
          className="
            w-max bg-gray-600
            px-2 py-1 rounded-md
            items-center justify-center gap-1
            text-amber-100
            hidden lg:flex
          "
        >
          <span className="text-blue-300">{data.time.logo}</span>
          <span>{data.time.name}</span>
        </div>

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
                  ${i == 1
                  ? "bg-emerald-500 text-black"
                  : "bg-gray-600 hover:bg-gray-500 hover:text-emerald-400"
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