'use client'

import { Request } from "@/app/_utils/request"
import { useEffect, useState } from "react"
import { FaMagnifyingGlass } from "react-icons/fa6"
import { MdKeyboardCommandKey } from "react-icons/md"

export default function FilterCard() {
  const [data, setData] = useState(null)

  useEffect(() => {
    async function loadData() {
      const req = await Request("http://localhost:3000/api/repositories")
      setData(req)
    }
    loadData()
  }, [])

  if (data === null) return ""
  return (
    <div
      className="
        w-full p-4
        bg-gray-900
      ">
      <div
        className="
          w-60 p-3
        bg-gray-950
          flex items-center gap-2
          text-gray-500
        ">
        <FaMagnifyingGlass />
        <input
          type="text"
          placeholder="Filter repositories"
          className="
            w-2/3
            bg-gray-950
            outline-none
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
    </div>
  )
}