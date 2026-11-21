'use client'

import { useActiveStore } from "@/app/_store/useActiveStore"
import { Request } from "@/app/_utils/request"
import { useEffect, useMemo, useState } from "react"
import { FaMagnifyingGlass } from "react-icons/fa6"
import { MdKeyboardCommandKey } from "react-icons/md"

export default function FilterCard() {
  const [data, setData] = useState<{
    repos?: { language?: string | string[] }[]
  } | null>(null)
  const { activeCategory, setActiveCategory } = useActiveStore()

  const uniqueLanguages = useMemo(() => {
    const set = new Set<string>()

    if (data?.repos) {
      const repos = data?.repos
      repos.forEach((repo: { language?: string | string[] }) => {
        if (Array.isArray(repo.language)) {
          repo.language.forEach((language) => language && set.add(language))
        } else if (repo.language) {
          set.add(repo.language)
        }
      })
    }

    return Array.from(set)
  }, [data?.repos])

  const langs = () => {
    const languages = ["ALL", ...uniqueLanguages]
    return languages
  }

  useEffect(() => {
    async function loadData() {
      const req = await Request("/api/repositories")
      setData(req)
      setActiveCategory("ALL")
    }
    loadData()
  }, [setActiveCategory])

  if (data === null) return ""
  return (
    <div
      className="
        w-full p-4
        bg-gray-900
        flex justify-between items-center
      ">
      <div
        className="
          min-w-60 w-5/20 p-3
        bg-gray-950
          flex items-center gap-2
          text-gray-500 duration-500
          focus-within:bg-gray-800
        ">
        <FaMagnifyingGlass />
        <input
          type="text"
          placeholder="Filter repositories"
          className="
            w-2/3
            bg-gray-950
            outline-none duration-500
            focus:bg-gray-800
          "
        />
        <div
          className="
            w-max px-1
            bg-gray-900
            flex items-center
          ">
          <MdKeyboardCommandKey />
          <span>K</span>
        </div>
      </div>
      <div>
        <div className="flex gap-1">
          {langs().map((el: string, i: number) => (
            <div
              key={i}
              onClick={() => setActiveCategory(el)}
              className={`
                px-3 py-0.5
                text-xs duration-500
                cursor-pointer
                ${
                  activeCategory == el
                  ? "bg-emerald-400 text-black"
                  : "bg-gray-800"
                }
              `}>
              {el}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}