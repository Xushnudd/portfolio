import { FiTerminal } from "react-icons/fi";
import { LuFolderCode } from "react-icons/lu";
import { MdCellTower, MdConstruction, MdDataObject, MdOutlineAccountTree, MdOutlineContactSupport, MdOutlineHub, MdOutlineLayers, MdOutlineVerified, MdSensors } from "react-icons/md";
import PulseDot from "./_components/PulseDot";
import { ReactNode } from "react";
import Circle from "./_components/Circle";
import { FaArrowRight, FaDollarSign, FaRegCheckCircle } from "react-icons/fa";
import Link from "next/link";
import { GoRocket } from "react-icons/go";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { IoCodeSharp } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import Rectangle from "./_components/Rectangle";

interface ColorsData {
  text: string;
  gr_text: string;
  gr_bg: string;
  bg: string;
}

interface BannerData {
  title: string | string[];
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

interface BannerFooterTitleData {
  icon: ReactNode;
  name: string;
}

interface BannerFooterDatasData {
  name: string;
  data: string;
}

interface BannerFooterSystemData {
  icon: ReactNode;
  name: string;
  data: string;
}

interface BannerFooterData {
  title: BannerFooterTitleData;
  datas: BannerFooterDatasData[];
  system: BannerFooterSystemData[];
}

interface StatisticStyleData {
  name: ReactNode | string;
  color: string;
}

interface StatisticData {
  title: string;
  icon: StatisticStyleData;
  data: string;
  caption: StatisticStyleData;
}

interface WorkspaceData extends BannerData {
  footer: string | string[]; 
}

interface InfoCardData extends WorkspaceData {
  icon: ReactNode;
}

interface AboutData extends BannerData {
  info_card: InfoCardData[];
  workspace: WorkspaceData;
}

interface NavigateData {
  subtitle: string;
  data: string;
  card_data: InfoCardData[];
}

const colors: ColorsData[] = [
    {
      "text": "text-emerald-400",
      "gr_text": "group-hover:text-emerald-400",
      "gr_bg": "group-hover:bg-emerald-400",
      "bg": "bg-emerald-800"
    },
    {
      "text": "text-blue-400",
      "gr_text": "group-hover:text-blue-400",
      "gr_bg": "group-hover:bg-blue-400",
      "bg": "bg-blue-800"
    },
    {
      "text": "text-violet-400",
      "gr_text": "group-hover:text-violet-400",
      "gr_bg": "group-hover:bg-violet-400",
      "bg": "bg-violet-800"
    }
  ]

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

const statistic: StatisticData[] = [
  {
    "title": "EXP TIMELINE",
    "icon": {
      "name": <GoRocket />,
      "color": "text-emerald-400"
    },
    "data": "2025+",
    "caption": {
      "name": "Coding Odyssey",
      "color": "text-blue-400"
    }
  },
  {
    "title": "ARSENAL",
    "icon": {
      "name": <MdOutlineLayers />,
      "color": "text-blue-400"
    },
    "data": "15+",
    "caption": {
      "name": "Tech Stack Tools",
      "color": "text-blue-400"
    }
  },
  {
    "title": "COMMITMENT",
    "icon": {
      "name": <HiOutlineLightningBolt />,
      "color": "text-violet-300"
    },
    "data": "100%",
    "caption": {
      "name": "Passion & Drive",
      "color": "text-violet-300"
    }
  },
  {
    "title": "QUALITY RULE",
    "icon": {
      "name": <MdOutlineVerified />,
      "color": "text-emerald-400"
    },
    "data": "Clean",
    "caption": {
      "name": "Architecture First",
      "color": "text-emerald-400"
    }
  }
]

const banner_footer: BannerFooterData = {
  "title": {"icon": <MdSensors />, "name": "SYSTEM TELEMETRY"},
  "datas": [
    {"name": "PIPELINE", "data": "CI/CD INTEGRATED"},
    {"name": "PARADIGM", "data": "EVENT-DRIVEN & REACTIVE"}
  ],
  "system": [
    {
      "icon": <Circle size={10} color="bg-emerald-400" />,
      "name": "NODE ENGINE",
      "data": "22.x LTS"
    },
    {
      "icon": <Circle size={10} color="bg-blue-400" />,
      "name": "TEST COVERAGE",
      "data": "STRICT"
    }
  ]
}

const about_data: AboutData = {
  "subtitle": "CORE OPERATING VALUES",
  "title": "Engineering Philosophy & Ethos",
  "text": "Code is not simply instructions executed by silicon; it is a shared knowledge graph crafted for long-term maintainability, security, and computational efficiency.",
  "info_card": [
    {
      "icon": <IoCodeSharp />,
      "subtitle": "PRINCIPLE 01",
      "title": "Readability & Clean Syntax",
      "text": "Code is written for humans first and machines second. Every function possesses a single unmistakable responsibility with self-documenting naming conventions, explicit interfaces, and zero cryptic abbreviations.",
      "footer": "MODULARITY: HIGHEST"
    },
    {
      "icon": <MdOutlineHub />,
      "subtitle": "PRINCIPLE 02",
      "title": "DRY & Anti-Duplication",
      "text": "Engineering high-reusability component systems without leaking mutable state. Abstracting repetitive patterns into immutable utility primitives, eliminating redundant code paths, and preserving a unified single source of truth.",
      "footer": "REUSABILITY: ATOMIC"
    },
    {
      "icon": <MdOutlineAccountTree />,
      "subtitle": "PRINCIPLE 03",
      "title": "Organized Architecture",
      "text": "Decoupled client state layers, clear separation of concerns, and resilient data serialization models. Designing application boundaries so components scale independently without cascading architectural failures.",
      "footer": "RESILIENCE: OPTIMIZED"
    }
  ],
  "workspace": {
    "subtitle": "WORKSPACE ECOSYSTEM",
    "title": "Constructed For Flow & Speed",
    "text": "My daily driver environment pairs lightweight Unix shell workflows, strict linting suites, typed schema validation, and rapid hot-reloading tooling for lightning-fast feedback cycles.",
    "footer": [
      "TypeScript 5.x",
      "React 19 / Next",
      "Tailwind CSS",
      "Python / FastAPI",
      "PostgreSQL",
      "Git Versioning"
    ]
  }
}

const navigate_data: NavigateData = {
  "subtitle": "NAVIGATION ROUTING MATRIX",
  "data": "SELECT TARGET VECTOR",
  "card_data": [
    {
      "icon": <MdConstruction />,
      "subtitle": "01 // MATRIX",
      "title": "TECHNICAL STACK",
      "text": "Deep dive into programming languages, specialized frameworks, frontend toolchains, and developer environments.",
      "footer": "INSPECT CAPABILITIES"
    },
    {
      "icon": <MdDataObject />,
      "subtitle": "02 // CODEBASE",
      "title": "Public Repositories",
      "text": "Explore open source initiatives, clean code architectural demos, and live repository mirrors hosted on GitHub @Xushnudd.",
      "footer": "EXPLORE CODE INDEX"
    },
    {
      "icon": <MdOutlineContactSupport />,
      "subtitle": "03 // TRANSMISSION",
      "title": "Direct Contact",
      "text": "Open a secure connection via Telegram, email dispatch, or schedule an architectural conversation for prospective roles.",
      "footer": "INITIATE CONTACT"
    }
  ]
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
        {Array.isArray(banner_title.title) ? (
          banner_title.title.map((el, i) => (
            <span
              key={i}
              className={
                i === 0
                ? "text-white"
                : "text-emerald-500"
              }
            >
              {el}
            </span>
          ))
        ) : (
          <span></span>
        )}
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

function Statistics() {
  return (
    <div
      className="
        w-full
        flex gap-2 justify-center items-center flex-wrap
      "
    >
      {statistic.map((el, i) => (
        <div
          key={i}
          className="
            w-[48%] p-3 rounded-md
            duration-300
            bg-slate-800 hover:bg-slate-700
          "
        >
          <div className="w-full flex justify-between">
            <span
              className="
                text-xs
              "
            >
              {el.title}
            </span>
            <span className={el.icon.color}>
              {el.icon.name}
            </span>
          </div>
          <div className="my-2 w-full flex flex-col">
            <span className="text-2xl text-white font-bold">{el.data}</span>
            <span className={`text-xs ${el.caption.color}`}>{el.caption.name}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

function BannerFooter() {
  return (
    <div
      className="
        w-full p-5 rounded-md
        bg-slate-950
        flex flex-wrap items-center
        text-sm
      "
    >
      <div
        className="
          w-max pr-4 mr-4
          border-r border-gray-600
          flex items-center gap-2 flex-wrap
          text-emerald-400
        "
      >
        <span>{banner_footer.title.icon}</span>
        <span>{banner_footer.title.name}</span>
      </div>
      <div className="w-max flex gap-10 flex-wrap">
        <div
          className="
            w-max
            flex gap-2 flex-wrap
          "
        >
          {banner_footer.datas.map((el, i) => (
            <div key={i}>
              <span>{el.name}</span>
              <span className="mr-1">:</span>
              <span>{el.data}</span>
            </div>
          ))}
        </div>
        <div className="flex gap-3">
          {banner_footer.system.map((el, i) => (
            <div
              key={i}
              className="
                flex items-center flex-wrap gap-1.5
              "
            >
              <span>{el.icon}</span>
              <span>{el.name}</span>
              <span>{el.data}</span>
            </div>
          ))}
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
          w-full
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
          <Statistics />
        </div>
      </div>
      <div>
        <BannerFooter />
      </div>
    </div>
  )
}

function AboutTitle() {
  return (
    <div className="my-10">
      <div className="w-2/3">
        <div className="flex items-center gap-2 text-xs">
          <Rectangle size={10} color="bg-emerald-400" />
          <span className="text-emerald-400">{about_data.subtitle}</span>
        </div>
        <h2 className="my-2 text-4xl text-white font-bold">{about_data.title}</h2>
        <p className="text-lg">{about_data.text}</p>
      </div>
      <div className="my-10 w-full flex justify-between">
        {about_data.info_card.map((el, i) => (
          <div
            key={i}
            className={`
              w-[32%] p-5 bg-slate-800 rounded-md
              flex flex-col justify-between gap-5
              group relative overflow-hidden
            `}
            >
            <div
              className={`
                w-max h-auto p-3 rounded-md
                duration-300
                bg-slate-700
                ${colors[i].gr_bg}
              `}
              >
              <span
                className={`
                  text-2xl duration-500
                  group-hover:text-black ${colors[i].text}
                `}
                >
                {el.icon}
              </span>
            </div>
            <div>
              <div
                className={`
                  text-xs ${colors[i].text}
                  font-bold
                `}
                >
                {el.subtitle}
              </div>
              <div className={`
                text-white text-xl
                duration-500
                ${colors[i].gr_text}
                `}
                >
                {el.title}
              </div>
            </div>
            <p className="text-sm">
              {el.text}
            </p>
            <div className="text-sm">
              {el.footer}
            </div>
            <div>
              <div
                className={`
                  absolute -bottom-10 -right-10
                  ${colors[i].text} ${colors[i].bg}
                  w-30 h-30 rounded-full
                  blur-2xl duration-500
                  group-hover:w-40 group-hover:h-40
                `}
                >
              </div>
              <FaArrowRightLong
                className={`
                  ${colors[i].text}
                  duration-500
                  absolute bottom-5 right-7
                  group-hover:right-6
                `}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Helped AI
function RuntimeMetricsCard() {
  return (
    <div className="w-full h-max max-w-2xl bg-[#0b1015] border border-gray-800 rounded-lg p-5 text-[#34d399] font-mono text-xs select-none">
      <div className="flex items-center justify-between mb-4 tracking-wider">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-emerald-400 font-semibold">
            RUNTIME METRICS: LOCALHOST:3000
          </span>
        </div>
        <span className="text-gray-400">ACTIVE DAEMON</span>
      </div>
      <div className="w-full h-24 my-2">
        <svg
          viewBox="0 0 600 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full overflow-visible"
        >
          <path
            d="M 0 55 C 100 85, 200 85, 300 50 C 400 15, 500 70, 600 45"
            stroke="#38bdf8"
            strokeWidth="1.5"
            strokeOpacity="0.7"
          />
          <path
            d="M 0 50 C 70 60, 150 25, 240 40 C 330 65, 360 95, 420 15 M 535 15 C 570 50, 595 50, 600 45"
            stroke="#a78bfa"
            strokeWidth="1.5"
            strokeOpacity="0.6"
          />
          <path
            d="M 0 52 C 80 20, 150 30, 220 70 C 290 90, 360 25, 450 30 C 530 40, 570 70, 600 50"
            stroke="#34d399"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="flex items-center justify-between text-gray-400 pt-2 tracking-wider">
        <span>MEM: 142MB / 16GB</span>
        <span>BUILD TIME: 382ms</span>
        <span className="text-emerald-400">ALL PASSING (34/34)</span>
      </div>
    </div>
  );
}
// Helped AI

function Workspace() {
  return (
    <div
      className="
        w-full h-auto p-10
        bg-slate-950 rounded-lg
        flex justify-between gap-5 flex-wrap
      "
      >
      <div className="lg:w-2/5 flex flex-col gap-3">
        <span className="text-sm text-emerald-400">{about_data.workspace.subtitle}</span>
        <h2 className="text-2xl text-white">{about_data.workspace.title}</h2>
        <p>{about_data.workspace.text}</p>
        <div className="flex gap-2 flex-wrap">
          {(Array.isArray(about_data.workspace.footer)
            ? about_data.workspace.footer
            : [about_data.workspace.footer]
          ).map((el, i) => (
            <div
              key={i}
              className="
                w-max px-2 py-0.5 rounded-sm
                bg-slate-800 text-white
              "
              >
              {el}
            </div>
          ))}
        </div>
      </div>
      <RuntimeMetricsCard />
    </div>
  )
}

function About() {
  return (
    <div>
      <AboutTitle />
      <Workspace />
    </div>
  )
}

function Navigate() {
  const
    num = [1, 0, 2],
    links = [
      "/skills",
      "/repository",
      "/contact"
    ]
  return (
    <div
      className="
        my-10
      "
      >
      <div
        className="
          my-5 w-full
          flex justify-between items-start
          text-sm
        "
        >
        <div className="flex items-center gap-1">
          <Rectangle size={10} color="bg-blue-400" />
          <span className="-mt-0.5 text-blue-400">{navigate_data.subtitle}</span>
        </div>
        <span className="text-xs">{navigate_data.data}</span>
      </div>
      <div className="flex">
        {navigate_data.card_data.map((el, i) => (
          <Link
            key={i}
            href={links[i]}
            className={`
              w-1/3 p-5 rounded-md
              bg-slate-800
              group cursor-pointer
              overflow-hidden relative
            `}
            >
              <div
                className="
                  w-full
                  flex justify-between items-center
                "
                >
                <div
                  className={`
                    w-max h-max p-5 rounded-md
                    duration-500
                    ${colors[num[i]].gr_bg}
                  `}
                  >
                  <span
                    className={`
                      ${colors[num[i]].text}
                      duration-500
                      group-hover:text-black
                    `}
                    >
                    {el.icon}
                  </span>
                </div>
                <div className="text-xs">{el.subtitle}</div>
              </div>
              <div className="my-5 w-full flex flex-col gap-5">
                <h2
                  className={`
                    text-lg text-white
                    duration-500
                    ${colors[num[i]].gr_text}
                  `}
                  >
                    {el.title}
                </h2>
                <p className="text-xs">{el.text}</p>
                <span
                  className={`
                    text-xs
                    ${colors[num[i]].text}
                  `}
                  >
                  {el.footer}
                </span>
              </div>
              <div
                className={`
                  absolute -bottom-10 -right-10
                  w-30 h-30 rounded-full
                  blur-2xl duration-500
                  ${colors[num[i]].bg}
                  group-hover:w-40 group-hover:h-40
                `}
                >
                </div>
                <FaArrowRight
                  className={`
                    absolute bottom-5 right-7
                    ${colors[num[i]].text}
                    duration-500
                    group-hover:right-5
                  `}
                 />
            </Link>
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <main className="w-full p-3">
      <Banner />
      <About />
      <Navigate />
    </main>
  );
}