import { FiTerminal } from "react-icons/fi";
import { LuFolderCode } from "react-icons/lu";
import { MdCellTower } from "react-icons/md";
import PulseDot from "./_components/PulseDot";
import { ReactNode } from "react";
import Circle from "./_components/Circle";
import { FaDollarSign } from "react-icons/fa";

interface BannerData {
  title: string[];
  subtitle: string;
  text: string;
}

interface CommandData {
  icon: ReactNode;
  text: string;
}

interface MetaData {
  focus: string[];
  base: string;
  compilation: string;
}

interface SystemLogData {
  command: CommandData;
  status: string;
  sections: (string | string[])[];
  metadata: MetaData;
}

interface ButtonData {
  logo: ReactNode;
  name: string;
  link: string;
}

interface terminalTitleBarNameData {
  icon: ReactNode;
  text: string;
}

interface terminalTitleBarData {
  buttons: string[];
  name: terminalTitleBarNameData;
  status: string;
}

interface terminalRuntimeData {
  command: terminalTitleBarNameData;
  constanta: string;
}

interface terminalData {
  titlebar: terminalTitleBarData;
  runtime: terminalRuntimeData
}

const banner: BannerData = {
  "title": ["Hi! I'm ", "Xushnud 👋"],
  "subtitle": "Aspiring Full-Stack Developer & Software Craftsman",
  "text": "Synthesizing reactive client-side experiences with high-throughput backend nodes. Transforming technical specifications into resilient software infrastructure."
}

const system_log: SystemLogData = {
  "command": {
    "icon": <FiTerminal />,
    "text": "system.log --v2025.init"
  },
  "status": "PARSER_READY",
  "sections": [
    [
      "Ignited in late ",
      "2025",
      ", my programming odyssey began by dissecting DOM layout engines and modern frontend mechanics. That foundational curiosity rapidly expanded into orchestrating complete end-to-end distributed systems."
    ],
    "Today, I architect reactive, state-driven interfaces tightly coupled to modular backend APIs. Driven by hyper-clean syntax, zero dead code paths, and strict architectural predictability."
  ],
  "metadata": {
    "focus": ["REACT", "FASTAPI", "TS"],
    "base": "TASHKENT (UTC+5)",
    "compilation": "ZERO ERROR TOLERANCE"
  }
}

const buttons: ButtonData[] = [
  {"logo": <LuFolderCode />, "name": "Explore repositories", "link": "/repositories"},
  {"logo": <MdCellTower />, "name": "Direct Transmission", "link": "/repositories"}
]

const terminal: terminalData = {
  "titlebar": {
    "buttons": ["pink", "chocolate", "green"],
    "name": {"icon": <FiTerminal />, "text": "zsh — node xushnud.runtime.ts"},
    "status": "200 OK"
  },
  "runtime": {
    "command": {"icon": <FaDollarSign />, "text": "npx tsx runtime/profile.ts --inspect"},
    "constanta": "develop"
  }
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
      <PulseDot size={10} color="bg-emerald-500" />
      <span className="text-emerald-500">AVAILABLE FOR ROLES & CONTRACTS</span>
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
            key={i}
            className={
              `${
                  i == 0
                    ? "text-white"
                    : "text-emerald-500"
                }
              `
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

function SystemLog() {
  return (
    <div
      className="
        w-full p-5 rounded-md
        bg-slate-900
        relative overflow-hidden
        group
      "
    >
      <div
        className="
          absolute -top-25 -right-25
          w-50 h-50 rounded-full
          duration-300
          bg-teal-700/40 blur-3xl
          group-hover:bg-teal-700/90
        "
      />
      <div>
        <div className="flex justify-between">
          <div
            className="
              w-max
              flex items-center gap-1
              text-white
            "
          >
            <span className="text-emerald-500">{system_log.command.icon}</span>
            <span className="-mt-1">{system_log.command.text}</span>
          </div>
          <div className="flex items-center gap-1">
            <PulseDot size={10} color="bg-emerald-500" />
            <span className="text-xs -mt-0.5">
              {system_log.status}
            </span>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-2">
            {system_log.sections.map((el, i) => (
              <div
                key={i}
                className={`
                  ${
                    i == 0
                    ? "text-white"
                    : "text-sm"
                  }
                `}
              >
                {el}
              </div>
            ))}
          </div>
        </div>
        <div
          className="
            mt-5 text-xs leading-5
            flex flex-wrap gap-5
          "
        >
          <div className="flex items-center gap-1">
            <Circle size={8} color="bg-blue-300" />
            <span className="mr-3">FOCUS: </span>
            {system_log.metadata.focus.map((el, i) => (
              <span key={i}>
                <span>{el}</span>
                <span
                  className={`
                    mx-3
                    ${
                      system_log.metadata.focus.length-1 == i
                      ? "hidden"
                      : "inline-block"
                    }
                  `}
                >
                  /
                </span>
              </span>
            ))}
          </div>
          <div className="flex items-center gap-1">
            <Circle size={8} color="bg-blue-300" />
            <span className="mr-3">BASE: </span>
            {system_log.metadata.base}
          </div>
          <div className="flex items-center gap-1">
            <Circle size={8} color="bg-blue-300" />
            <span className="mr-3">COMPILATION: </span>
            {system_log.metadata.compilation}
          </div>
        </div>
      </div>
    </div>
  )
}

function Buttons() {
  return (
    <div className="flex gap-5">
      {buttons.map((el, i) => (
        <button
          key={el.link}
          className={
            `
              py-3 px-7 rounded-md
              flex items-center gap-2
              uppercase text-sm
              duration-500
              ${
                i == 0
                ? "bg-emerald-500 text-black hover:bg-emerald-300 hover:shadow-emerald-300 hover:shadow-[0_0_20px]"
                : "bg-slate-800 text-white hover:text-blue-300 hover:bg-slate-600"
              }
            `
          }
        >
          <span>{el.logo}</span>
          <span>{el.name}</span>
        </button>
      ))}
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
        <SystemLog />
        <Buttons />
      </div>
    </main>
  );
}
