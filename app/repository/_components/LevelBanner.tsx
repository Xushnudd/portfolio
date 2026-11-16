import { Request } from "@/app/_utils/request";
import Image from "next/image";
import Link from "next/link";
import { GrShare } from "react-icons/gr";
import { MdOutlineTerminal } from "react-icons/md";

const data = {
  "subtitle": "dev architect",
  "level": "level 4",
  "about": "Async distributed microservices, low-latency bot engines & "
}

export default async function LevelBanner() {
  const res = await Request("http://localhost:3000/api/me")
  return (
    <div
      className="
        w-full p-5
        bg-gray-900
      ">
      <div
        className="
        flex justify-start gap-10
        "
        >
        <div className="relative">
          <Image
            width={100} height={100}
            src={res.data.avatar_url}
            alt={res.data.html_url}
            loading="eager"
            className="
              shadow-[0px_0px_20px] shadow-emerald-400/70
            "
          />
          <div
            className="
              px-1.5 py-0
              absolute -bottom-2 -right-3
              bg-emerald-400
              uppercase font-bold
              text-black text-xs
            ">
              core
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="
              flex items-center gap-2
            ">
            <h2 className="text-3xl text-white font-bold">
              {res.data.name}
            </h2>
            <div
              className="
                w-max h-max p-0.5
                bg-emerald-800/70
                uppercase font-bold
                text-[9px] text-emerald-400
              ">
              {data.subtitle}
            </div>
            <div
              className="
                w-max h-max p-0.5
                bg-gray-600/70
                uppercase font-bold
                text-[9px] text-gray-400
              ">
              {data.level}
            </div>
          </div>
          <Link
            href={res.data.html_url}
            className="
              flex items-center gap-1
              text-sm text-blue-300
              font-serif
              hover:text-emerald-400
            ">
            <MdOutlineTerminal />
            <span>@{res.data.login}</span>
            <span className="flex gap-1">
              (github.com/{res.data.login})
              <GrShare className="text-[9px]" />
            </span>
          </Link>
          <div className="text-xs">
            {data.about}
          </div>
        </div>
      </div>
      <div></div>
    </div>
  )
}