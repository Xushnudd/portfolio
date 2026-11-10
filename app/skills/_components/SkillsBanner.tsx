import Rectangle from "@/app/_components/Rectangle"
import { FiTerminal } from "react-icons/fi"
import Active from "./Active"
import NavButton from "./NavButton"

const data = {
  "subtitle": {
    "name": "SYS_INDEX: 0x4E // CORE TELEMETRY",
    "version": "STACK_VERSION: v4.8.2",
    "runtime": "RUNTIME: OPTIMIZED"
  },
  "main": {
    "subtitle": "// ARCHITECTURAL MATRIX",
    "title": [
      "Tech Stack",
      "&",
      "Engineering Skills"
    ],
    "p": "Modern tools, frameworks, and languages powering full-stack web applications, asynchronous bots, and automated pipelines."
  },
  "active": {
    "title": "SYSTEM PROFICIENCY AGGREGATE",
    "view": "98.4%",
    "name": "ACTIVE DOMAINS: 04",
    "data": "INDEXED NODES: 28"
  },
  "buttons": [
    "ALL [4 CATEGORIES]",
    "FRONTEND ARCHITECTURE",
    "BACKEND & BOTS",
    "DATA & PERSISTENCE",
    "DEVOPS & INFRASTRUCTURE"
  ]
}

export default function SkillsBanner() {
  return (
    <div
      className="
        w-full p-10
        bg-gray-900
        text-xs
      "
      >
      <div
        className="
          w-full pb-2 mb-2
          border-b border-slate-800
          flex justify-between
        "
        >
        <div className="flex items-center gap-1">
          <Rectangle size={10} color="bg-emerald-300" />
          <span className="text-emerald-300">
            {data.subtitle.name}
          </span>
        </div>
        <div className="flex gap-3">
          <span className="text-slate-300">
            {data.subtitle.version}
          </span>
          <span className="text-slate-600">{"//"}</span>
          <div
            className="
              flex items-center gap-1
              text-blue-300
            "
            >
            <FiTerminal />
            {data.subtitle.runtime}
          </div>
        </div>
      </div>
      <div
        className="
          my-3 w-full pb-5
          border-b border-slate-800
          flex flex-col gap-5
        "
        >
        <span className="text-slate-200">{data.main.subtitle}</span>
        <div className="flex flex-col gap-3">
          <h2 className="w-2/3 flex flex-wrap text-5xl font-black">
            {data.main.title.map((el:string, i:number) => (
              <span
                key={i}
                className={`
                  ${i == 1 ? "text-emerald-400 mx-3" : "text-white"}
                `}
              >
                {el}
              </span>
            ))}
          </h2>
          <div className="lg:flex block items-center">
            <p className="flex-2 text-lg">{data.main.p}</p>
            <div className="flex-1 my-3">
              <Active
                title={data.active.title}
                data={data.active.data}
                name={data.active.name}
                view={data.active.view}
              />
            </div>
          </div>
        </div>
      </div>
      <NavButton data={data.buttons} />
    </div>
  )
}