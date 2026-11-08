import { FiTerminal } from "react-icons/fi";
import { LuFolderCode } from "react-icons/lu";
import { MdCellTower } from "react-icons/md";
import PulseDot from "./_components/PulseDot";
import { ReactNode } from "react";
import Circle from "./_components/Circle";
import { FaDollarSign, FaRegCheckCircle } from "react-icons/fa";
import Link from "next/link";

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
  focus: string[];
  location: string;
}

interface terminalData {
  titlebar: terminalTitleBarData;
  runtime: terminalRuntimeData
}

const banner_title: BannerData = {
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
  {"logo": <LuFolderCode />, "name": "Explore repositories", "link": "/repository"},
  {"logo": <MdCellTower />, "name": "Direct Transmission", "link": "/contact"}
]

const terminal: terminalData = {
  "titlebar": {
    "buttons": ["bg-red-200", "bg-orange-300", "bg-emerald-500"],
    "name": {"icon": <FiTerminal />, "text": "zsh — node xushnud.runtime.ts"},
    "status": "200 OK"
  },
  "runtime": {
    "command": {"icon": <FaDollarSign />, "text": "npx tsx runtime/profile.ts --inspect"},
    "focus": ["TypeScript", "React", "Python", "FastAPI"],
    "location": "Tashkent, UZ"
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

function BannerTitle() {
  return (
    <div>
      <div className="text-5xl font-bold">
        {banner_title.title.map((el: string, i: number) => (
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
        {banner_title.subtitle}
      </div>
      <div className="text-sm">
        {banner_title.text}
      </div>
    </div>
  )
}

function SystemLog() {
  return (
    <div
      className="
        w-full p-5 rounded-md
        bg-slate-800
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
        <div className="flex justify-between mb-3">
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
            <Circle size={8} color="bg-red-200" />
            <span className="mr-3">BASE: </span>
            {system_log.metadata.base}
          </div>
          <div className="flex items-center gap-1">
            <Circle size={8} color="bg-emerald-500" />
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
        <Link
          href={el.link}
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
        </Link>
      ))}
    </div>
  )
}

function Terminal() {
  return (
    <div>
      <div
        className="
          w-full p-3 rounded-t-md
        bg-slate-800
          flex justify-between items-center
          text-sm
        "
      >
        <div className="flex gap-2">
          {terminal.titlebar.buttons.map((el, i) => (
            <Circle key={i} size={13} color={el} />
          ))}
        </div>
        <div className="flex gap-1 items-center text-slate-400">
          <span>{terminal.titlebar.name.icon}</span>
          <span className="-mt-1 text-xs">{terminal.titlebar.name.text}</span>
        </div>
        <div className="text-emerald-400 font-bold">
          <span className="text-xs">{terminal.titlebar.status}</span>
        </div>
      </div>
      <div
        className="
          w-full p-3 rounded-b-md
          bg-slate-950
        "
      >
        <div
          className="
            flex items-center gap-1.5
            text-sm
          "
        >
          <span className="text-blue-400">
            {terminal.runtime.command.icon}
          </span>
          <span className="-mt-1 text-slate-400">
            {terminal.runtime.command.text}
          </span>
        </div>
        <div
          className="
            mt-5
          "
        >
          <div>
            <div
              className="
                w-full
                flex gap-2
              "
            >
              <span className="text-violet-400">const</span>
              <span className="text-blue-400">developer</span>
              <span className="text-white">=</span>
              <span className="text-violet-400">await</span>
              <div>
                <span className="text-white">Xushnud.</span>
                <span className="text-emerald-300">resolve</span>
                <span>&#40;&#123;</span>
              </div>
            </div>
            <div
              className="
                w-full ml-4
                flex flex-col
              "
            >
              <div className="flex gap-2">
                <span className="text-white">status:</span>
                <div>
                  <span className="text-emerald-300">&quot;coding&quot;</span>
                  <span>,</span>
                </div>
              </div>
              <div className="flex gap-2">
                <span className="text-white">focus:</span>
                <div>
                  [
                    {terminal.runtime.focus.map((el, i) => (
                      <span key={i}>
                        <span className="text-blue-400">&quot;{el}&quot;</span>
                        <span
                          className={
                            `
                            ${
                              terminal.runtime.focus.length-1 != i
                              ? "inline-block"
                              : "hidden"
                            }
                            `
                          }
                        >
                          ,&nbsp;&nbsp;
                        </span>
                      </span>
                    ))}
                  ],
                </div>
              </div>
              <div className="flex gap-2">
                <span className="text-white">location:</span>
                <div>
                  <span className="text-blue-400">&quot;{terminal.runtime.location}&quot;</span>
                </div>
              </div>
            </div>
            <div
              className="
                w-full
                flex gap-2
              "
            >
              <span>&#41;&#125;</span>
            </div>
          </div>
          <hr
            className="
              my-5 w-full
              text-slate-600
            "
          />
          <div>
            <div
              className="
                flex items-center gap-2
                text-emerald-300
              "
            >
              <FaRegCheckCircle />
              <span
                className="
                  -mt-1.5
                  flex items-center gap-2
                "
              >[RESOLVED] Developer Instance: Xushnud Nishonov</span>
            </div>
            <div className="ml-6">
              <div className="flex flex-col">
                <span className="text-xs my-1">Engine: V8 x64 | Latency: 1.4ms | Mode: Continuous Improvement</span>
                <span>
                  <span>Output stream ready </span>
                  <span
                    className="
                      -mb-0.5 ml-1 w-2 h-4
                      bg-emerald-400
                      inline-block animate-pulse
                    "
                  />
                </span>
              </div>
            </div>

            {/* Helped AI */}
            <div
              className="
                my-5 w-full bg-slate-900 p-2
                border border-gray-800 rounded-md
                flex items-center justify-between
                text-white text-sm
              "
            >
              <div>
                <p
                  className="
                    text-xs tracking-wider
                    text-gray-400 font-mono
                  "
                >
                  COMMITS VELOCITY
                </p>
                <h2 className="text-2xl font-bold mt-1">99.8%</h2>
              </div>
              <div className="w-32 h-12">
                <svg
                  viewBox="0 0 120 40"
                  className="w-full h-full overflow-visible"
                >
                  <defs>
                    <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 0 30 L 15 25 L 30 28 L 45 33 L 60 20 L 75 24 L 90 18 L 105 22 L 120 10 L 120 40 L 0 40 Z"
                    fill="url(#greenGradient)"
                  />
                  <path
                    d="M 0 30 L 15 25 L 30 28 L 45 33 L 60 20 L 75 24 L 90 18 L 105 22 L 120 10"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            {/* Helped AI */}
          </div>
        </div>
      </div>
    </div>
  )
}

function Banner() {
  const style = "w-full py-10 flex flex-col gap-10";
  return (
    <div>
      <div
        className="
          w-full p-3
          lg:flex justify-between gap-10
        "
      >
        <div className={`lg:w-6/10 ${style}`}>
          <Info />
          <BannerTitle />
          <SystemLog />
          <Buttons />
        </div>
        <div className={`lg:w-4/10 ${style}`}>
          <Terminal />
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <main>
      <Banner />
    </main>
  );
}
