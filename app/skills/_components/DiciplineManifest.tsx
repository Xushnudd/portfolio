import { MdOutlinePublishedWithChanges, MdOutlineSecurity, MdOutlineViewQuilt, MdRecycling } from "react-icons/md"

const icons = [
  <MdRecycling key={"Recycling"} />,
  <MdOutlineViewQuilt key={"ViewQuilt"} />,
  <MdOutlineSecurity key={"Security"} />,
  <MdOutlinePublishedWithChanges key={"PublishedWithChanges"} />
]

const ok = "PASS"

const colors = [
  "text-emerald-400",
  "text-blue-400",
  "text-violet-300",
  "text-emerald-600"
]

const data = {
  "subtitle": "DISCIPLINE_MANIFEST // CODE_INTEGRITY",
  "title": "Engineering Discipline & Standards",
  "caption": {
    "protocol": "PROTOCOL: RFC_9110",
    "execution": "RIGID EXECUTION"
  },
  "cards": [
    {
      "subtitle": "01 // ARCH",
      "icon": icons[0],
      "title": "DRY Principle",
      "caption": "Reusable modules, composable primitives, and shared utilities eliminating redundant system footprints.",
      "footer": {
        "info": "ZERO REDUNDANCY",
        "ok": ok
      }
    },
    {
      "subtitle": "02 // PATTERN",
      "icon": icons[1],
      "title": "Modular Code",
      "caption": "Decoupled service boundaries, strict isolation, and clean single-responsibility components.",
      "footer": {
        "info": "ISOLATED LOGIC",
        "ok": ok
      }
    },
    {
      "subtitle": "03 // SAFETY",
      "icon": icons[2],
      "title": "Strict Typing",
      "caption": "Static compile-time type safety via TypeScript strict-mode and explicit Python type hinting.",
      "footer": {
        "info": "TYPE COVERAGE >95%",
        "ok": ok
      }
    },
    {
      "subtitle": "04 // OPS",
      "icon": icons[3],
      "title": "CI/CD Mindset",
      "caption": "Automated linting pipelines, strict unit testing gates, and seamless continuous delivery workflows.",
      "footer": {
        "info": "ZERO BREAKING COMMITS",
        "ok": ok
      }
    }
  ]
}

export default function DiciplineManifest() {
  return (
    <div
      className="
        w-full p-10
        bg-gray-900
        text-xs
      ">
      <div className="pb-3 border-b border-gray-800">
        <div className="text-emerald-600">
            {data.subtitle}
        </div>
        <div
          className="
            my-3 w-full
            flex justify-between items-center
          ">
          <h2 className="text-2xl text-white font-bold">{data.title}</h2>
          <span className="flex gap-2 items-center">
            <span>{data.caption.protocol}</span>
            <span
              className={`
                py-1 px-2 bg-slate-800
                text-emerald-600
              `}>
                {data.caption.execution}
            </span>
          </span>
        </div>
      </div>
      <div
        className="
          mt-5 w-full
          flex gap-3 items-center flex-wrap
        ">
        {data.cards.map((el, i) => (
          <div
            key={i}
            className={`
              w-24/50 lg:w-24/100 p-5
              bg-slate-950 hover:bg-slate-900
              group duration-300
            `}
            >
            <div
              className={`
                flex justify-between
                ${colors[i]}
              `}>
              <span className="group-hover:ml-3 duration-500">{el.subtitle}</span>
              <span className="text-xl">{el.icon}</span>
            </div>
            <div
              className="
                pb-5
                border-b border-gray-800
                flex flex-col gap-3
              ">
              <h2 className="text-xl text-white font-bold">{el.title}</h2>
              <p>{el.caption}</p>
            </div>
            <div
              className={`
                mt-3
                flex justify-between
              `}>
              <span>{el.footer.info}</span>
              <span className={colors[i]}>{el.footer.ok}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}