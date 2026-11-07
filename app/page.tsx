import { FiTerminal } from "react-icons/fi";
import { LuFolderCode } from "react-icons/lu";
import { MdCellTower } from "react-icons/md";

const data = {
  "system_log": {
    "command": {"icon": <FiTerminal />,"text": "system.log --v2025.init"},
    "status": "PARSER_READY",
    "sections": [
      {
        "type": "paragraph",
        "text": [
          "Ignited in late ",
          "2025",
          ", my programming odyssey began by dissecting DOM layout engines and modern frontend mechanics. That foundational curiosity rapidly expanded into orchestrating complete end-to-end distributed systems."
        ]
      },
      {
        "type": "paragraph",
        "text": "Today, I architect reactive, state-driven interfaces tightly coupled to modular backend APIs. Driven by hyper-clean syntax, zero dead code paths, and strict architectural predictability."
      }
    ],
    "metadata": {
      "focus": ["REACT", "FASTAPI", "TS"],
      "base": "TASHKENT (UTC+5)",
      "compilation": "ZERO ERROR TOLERANCE"
    }
  },
  "buttons": [
    {"logo": <LuFolderCode />, "name": "Explore repositories", "link": "/repositories"},
    {"logo": <MdCellTower />, "name": "Explore repositories", "link": "/repositories"}
  ],
  "terminal": {
    "titlebar": {
      "buttons": ["pink", "chocolate", "green"],
      "name": {"icon": <FiTerminal />, "text": "zsh — node xushnud.runtime.ts"},
      "status": "200 OK"
    },
    "runtime": {
      "commant": {"icon": "$", "text": "npx tsx runtime/profile.ts --inspect"},
      "constanta": "develop"
    }
  }
}

const banner = {
  "title": ["Hi! I'm ", "Xushnud 👋"],
  "subtitle": "Aspiring Full-Stack Developer & Software Craftsman",
  "text": "Synthesizing reactive client-side experiences with high-throughput backend nodes. Transforming technical specifications into resilient software infrastructure."
}

function Info() {
  return (
    <div 
      className="
        w-max bg-slate-800 py-1 px-3 rounded-sm
        text-xs font-bold
        flex items-center justify-center gap-2
      "
    >
      <span className="relative flex h-2.5 w-2.5">
        <span
          className="
            animate-ping
            absolute
            inline-flex
            h-full w-full rounded-full
            bg-green-400 opacity-75
          "
        />
        <span
          className="
            relative
            inline-flex
            rounded-full h-2.5 w-2.5
            bg-green-500
          "
        />
      </span>
      <span className="text-green-600">AVAILABLE FOR ROLES & CONTRACTS</span>
      <span
        className="
          text-[8px] tracking-[3px] py-0.5 px-1
          bg-slate-700 rounded-sm
        "
      >
        STN // TBN-01
      </span>
    </div>
  )
}

function Banner() {
  return (
    <div>
      <div className="text-5xl font-bold">
        {banner.title.map((el: string, i: number) => (
          <span
            className={
              `${
                i == 0
                  ? "text-white"
                  : "text-green-600"
              }`
            }
          >
            {el}
          </span>
        ))}
      </div>
      <div className="text-sky-300 text-xl leading-10">
        {banner.subtitle}
      </div>
      <div className="text-sm">
        {banner.text}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <main className="p-3">
      <div
        className="
          py-10
          flex flex-col gap-10
        "
      >
        <Info />
        <Banner />
      </div>
    </main>
  );
}
