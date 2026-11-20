'use client'

import { useState, useEffect } from "react"
import { Request } from "@/app/_utils/request"
import { MdForkRight, MdOutlineStarOutline } from "react-icons/md";
import { useActiveStore } from "@/app/_store/useActiveStore";
import Link from "next/link";

type Repository = {
  repo: string;
  readme: string | null;
  languages: { language: string }[];
  stars: number;
  forks: number;
};

type RepositoryResponse = {
  repoDetails: Repository[];
  repos: { owner: { user_view_type: string }; html_url: string }[];
};

function getReadmeExcerpt(readme: string | null | undefined, maxLength = 50): string {
  if (!readme) return "Tavsif mavjud emas";

  const plainText = readme
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/[*_`~>]/g, "")
    .replace(/\s+/g, " ")
    .trim();

  if (plainText.length <= maxLength) {
    return plainText;
  }

  const sliced = plainText.slice(0, maxLength);
  const lastSpace = sliced.lastIndexOf(" ");
  const cleanCut = lastSpace > 15 ? sliced.slice(0, lastSpace) : sliced;

  return `${cleanCut}...`;
}

export default function Repositories() {
  const [data, setData] = useState<RepositoryResponse | null>(null)
  const { activeCategory } = useActiveStore()

  useEffect(() => {
    async function loadData() {
      const req = await Request("http://localhost:3000/api/repositories")
      setData(req)
    }
    loadData()
  }, [])

  if (data == null) return ""

  return (
    <div
      className="
        w-full
        flex justify-between items-start gap-5 flex-wrap
      ">
      {data.repoDetails.map((el, i) => (
        <div
          key={i}
          className={`
            lg:w-[32%] w-[48%] p-5
            bg-gray-900
            flex flex-col gap-5
            ${
              (
                activeCategory == "ALL" ||
                el.languages.some(
                  (
                    item: {language: string }) => item.language === activeCategory
                )
              )
              ? ""
              : "hidden"
            }
          `}>
          <div
            className="
              w-full
              flex justify-between
            ">
            <span className="text-2xl text-white">{el.repo}</span>
            <span
              className="
                w-max h-max px-2 py-0.5
                text-xs bg-gray-800
              ">
              {data.repos[i].owner.user_view_type}
            </span>
          </div>
          <p className="text-sm">
            {getReadmeExcerpt(el.readme, 150)}
          </p>
          <div className="flex gap-2 flex-wrap">
            {el.languages.map((lang: { language: string }, index: number) => (
              <div
                key={index}
                className="
                  w-max px-2 py-0.5
                  bg-gray-800
                  text-xs
                ">
                  {lang.language}
              </div>
            ))}
          </div>
          <div className="w-full flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <MdOutlineStarOutline className="text-blue-400" />
                <span>{el.stars}</span>
              </div>
              <div className="flex items-center gap-1">
                <MdForkRight className="text-violet-400" />
                <span>{el.forks}</span>
              </div>
            </div>
            <div>
              <Link
                href={data.repos[i].html_url}
                className="
                  px-3 py-1
                  uppercase text-sm
                  bg-gray-800
                  duration-500
                  cursor-pointer active:scale-95
                ">
                View Repo
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}