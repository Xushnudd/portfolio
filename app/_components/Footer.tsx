import Link from "next/link"

const data = {
  "reserved": "2026 Xushnud.dev. All rights reserved.",
  "sys": "SYS LATENCY: 14ms",
  "links": [
    {"name": "ARCH_OVERVIEW", "link": "/"},
    {"name": "TECH_STACK", "link": "/skills"},
    {"name": "CODE_INDEX", "link": "/repository"},
    {"name": "TERMINAL_CONNECT", "link": "/contact"}
  ]
}

export default function Footer() {
  return (
    <footer
      className="
        w-full p-5
        border-t border-gray-900
        bg-slate-950 text-slate-400 text-sm
        flex justify-between flex-wrap
      "
    >
      <div className="flex gap-1.5">
        <span>{data.reserved}</span>
        <span>{data.sys}</span>
      </div>
      <div className="flex gap-3">
        {data.links.map((el, i) => (
          <Link
            key={el.link}
            href={el.link}
          >
            {el.name}
          </Link>
        ))}
      </div>
    </footer>
  )
}