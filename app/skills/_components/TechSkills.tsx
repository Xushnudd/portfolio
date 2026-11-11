import { MdLinearScale, MdMemory, MdOutlineApi, MdOutlineLan, MdOutlineQueryStats, MdOutlineSchema, MdOutlineSpeed, MdOutlineVerifiedUser, MdWeb } from "react-icons/md"
import SkillsCard from "./SkillsCard"
import { FaTerminal } from "react-icons/fa"
import { FiDatabase } from "react-icons/fi"
import { HiOutlineLightningBolt } from "react-icons/hi"
import PulseRectangle from "@/app/_components/PulseRectangle"
import { IoMdSync } from "react-icons/io"
import { RiRobot3Line } from "react-icons/ri"
import Rectangle from "@/app/_components/Rectangle"
import { BsBox } from "react-icons/bs"

const data = [
  {
    "subtitle": "CLIENT-SIDE RUNTIME",
    "title": "Frontend Architecture",
    "text": "Specialized in responsive, accessible, component-driven client systems with reactive DOM hydration.",
    "skills": {
      "title": "CORE FRAMEWORKS & STANDARDS",
      "frameworks": [
        "React",
        "Next.js",
        "Typescript",
        "Javascript (ES6+)",
        "Tailwind CSS",
        "HTML5",
        "CSS3 / FLEXBOX / Grid"
      ]
    },
    "card": [
      "SSR & ISR",
      "Web Vitals 95+",
      "State Machines & Context",
      "LATENCY < 40ms"
    ]
  },
  {
    "subtitle": "SERVER CORE & AUTOMATION",
    "title": "Backend & Bots",
    "text": "Asynchronous microservices, high-throughput Telegram daemon bots, and high-performance server logic.",
    "skills": {
      "title": "RUNTIME ENGINES & FRAMEWORKS",
      "frameworks": [
        "Python",
        "FastApi",
        "Flask",
        "Aiogram 3.x",
        "Telebot",
        "PHP",
        "C (LOW LEVEL)"
      ]
    },
    "card": [
      "RESTful APIs",
      "Asyncio / Event Loops",
      "Telegram Daemons",
      "CONCURRENCY: HIGH"
    ]
  },
  {
    "subtitle": "STORAGE ENGINES & ORM",
    "title": "Data & Persistence",
    "text": "Relational persistence models, complex joins, indexed queries, and normalized database architecture.",
    "skills": {
      "title": "PERSISTENCE STACK",
      "frameworks": [
        "PostgreSQL",
        "MySQL",
        "SQLite",
        "SQLAlchemy / ORM"
      ]
    },
    "card": [
      "Schema Modeling",
      "Query Optimization",
      "ACID Transactions",
      "INDEX HIT: 99.8%"
    ]
  }
  ,{
    "subtitle": "INFRASTRUCTURE & UNIX",
    "title": "DevOps & Tooling",
    "text": "Isolated runtime containers, reproducible environments, and Unix-based system administration.",
    "skills": {
      "title": "DEPLOYMENT & TOOLCHAIN",
      "frameworks": [
        "Docker",
        "Podman",
        "Git & GitHub",
        "Linux (Debian)",
        "Linux (Fedora)",
        "Bash / Shell"
      ]
    },
    "card": [
      "Containerization",
      "CLI Power User",
      "CI Pipelines",
      "ENV_INTEGRITY: 100%"
    ]
  }
]

const colors = [
  {
    "text": "text-emerald-400",
    "bg": "bg-emerald-400",
    "from": "from-emerald-400",
    "to": "to-emerald-400"
  },
  {
    "text": "text-blue-400",
    "bg": "bg-blue-400",
    "from": "from-blue-400",
    "to": "to-blue-400"
  },
  {
    "text": "text-violet-400",
    "bg": "bg-violet-400",
    "from": "from-violet-400",
    "to": "to-violet-400"
  }
]

const icons = [
  <MdWeb key="web" />,
  <FaTerminal key="terminal" />,
  <FiDatabase key="database" />,
  <MdOutlineLan key="lan" />
]

const cardIcons = [
  [
    <HiOutlineLightningBolt key={"bolt"} />,
    <MdOutlineSpeed key={"speed"} />,
    <MdMemory key={"memory"} />,
    <PulseRectangle size={10} color={colors[0].bg} key={"rectangle"} />
  ],
  [
    <MdOutlineApi key={"api"} />,
    <IoMdSync key={"Sync"} />,
    <RiRobot3Line key={"Bot"} />,
    <Rectangle size={7} color={colors[1].bg} key={"rectangle"} />
  ],
  [
    <MdOutlineSchema key={"Schema"} />,
    <MdOutlineQueryStats key={"stats"} />,
    <MdOutlineVerifiedUser key={"user"} />,
    <Rectangle size={7} color={colors[2].bg} key={"rectangle"} />
  ],
  [
    <BsBox key={"deployed_code"} />,
    <FaTerminal key={"terminal"} />,
    <MdLinearScale key={"scale"} />,
    <Rectangle size={7} color={colors[0].bg} key={"rectangle"} />
  ]
]

export default function TechSkills() {
  return (
    <div
      className="
        w-full
        flex gap-1/50 flex-wrap
      "
      >
      {data.map((el, i) => (
        <SkillsCard
          key={i}
          icon={icons[i]}
          subtitle={el.subtitle}
          mod_id={i}
          title={el.title}
          text={el.text}
          skill_title={el.skills.title}
          frameworks={el.skills.frameworks}
          foot_card={el.card}
          color={colors[i%3]}
          cardIcon={cardIcons}
        />
      ))}
    </div>
  )
}