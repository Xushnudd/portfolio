import { Request } from "@/app/_utils/request";
import Image from "next/image";
import Link from "next/link";
import { GrShare } from "react-icons/gr";
import { MdContentCopy, MdOutlinePersonAddAlt1, MdOutlineTerminal } from "react-icons/md";
import LevelBannerCard from "./LevelBannerCard";
import { IoIosStarOutline } from "react-icons/io";

const data = {
  "subtitle": "dev architect",
  "level": "level 4",
  "cards": [
    "Public Repos",
    "Total Stars",
    "Annual Commits",
    "Consistency"
  ]
}

const icons = [
  null,
  <IoIosStarOutline key={"star"} />,
  <div key={"action"}>ACT</div>,
  null
]

const colors = [
  {"text": "text-emerald-400", "bg": "bg-emerald-400"},
  {"text": "text-blue-400", "bg": "bg-blue-400"},
  {"text": "text-violet-300", "bg": "bg-violet-300"}
]

export default async function LevelBanner() {
  const [res, repos] = await Promise.all([
    Request("https://portfolio-alpha-blush-32.vercel.app/api/me"),
    Request("https://portfolio-alpha-blush-32.vercel.app/api/repositories")
  ])

  const repositorysInfo = [
    {"name": res.data.public_repos, "percent": 65},
    {"name": repos.stars, "percent": 95},
    {"name": repos.commits.totalAllCommits, "percent": 93},
    {"name": repos.consistencyPercent + "%", "percent": repos.consistencyPercent}
  ]

  return (
    <div
      className="
        w-full p-5
        bg-gray-900
        flex flex-col gap-10
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
            {res.data.bio}
          </div>
        </div>
      </div>
      <div
        className="
          flex justify-between gap-2
        ">
        {data.cards.map((el, i) => (
          <LevelBannerCard
            key={i}
            subtitle={el}
            title={repositorysInfo[i].name}
            icon={icons[i]}
            percent={repositorysInfo[i].percent}
            color={colors[i%3]}
          />
        ))}
      </div>
      <div className="w-full flex flex-col gap-2">
        <Link
          href={res.data.html_url}
          className="
            w-full p-1.5
            bg-emerald-400
            flex justify-center items-center gap-1
            text-black text-sm
            uppercase font-semibold
          ">
          <MdOutlinePersonAddAlt1 />
          <span>Follow on github</span>
        </Link>
        <div
          className="
            w-full p-2
            bg-gray-800
            flex justify-center items-center gap-1
            text-gray-300 text-sm
            uppercase font-semibold
          ">
          <MdContentCopy />
          <span>Copy url</span>
        </div>
      </div>
    </div>
  )
}