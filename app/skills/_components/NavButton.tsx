'use client'

import { useActiveStore } from "@/app/_store/useActiveStore";
import { useEffect, useState } from "react";

interface NavButtonData {
  data: string[];
}

export default function NavButton({ data }: NavButtonData) {
  const [navigate, setNavigate] = useState<number>(0);
  const { setActiveCategory } = useActiveStore()

  const changeHandle = (n: number) => {
    setNavigate(n)
    setActiveCategory(data[n])
  }

  useEffect(() => {
    setActiveCategory(data[0])
  }, [data, setActiveCategory]);

  return (
    <div className="flex gap-1.5 flex-wrap">
      {data.map((el: string, i: number) => (
        <button
          key={i}
          type="button"
          onClick={() => changeHandle(i)}
          className={`
            w-max py-2 px-3
            font-bold tracking-widest
            cursor-pointer
            duration-500
            ${
              navigate == i
              ? "bg-emerald-400 text-black"
              : "bg-slate-800"
            }
          `}
        >
          {el}
        </button>
      ))}
    </div>
  );
}