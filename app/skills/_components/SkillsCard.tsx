'use client'

import Rectangle from "@/app/_components/Rectangle";
import { useSkillStore } from "@/app/_store/useSkillsStore";
import { ReactNode } from "react"

interface SkillsCardColor {
  text: string;
  bg: string;
  from: string;
  to: string;
}

interface SkillsCardData {
  icon: ReactNode,
  subtitle: string;
  mod_id: number;
  title: string;
  text: string;
  skill_title: string;
  frameworks: string[];
  foot_card: string[];
  color: SkillsCardColor;
  cardIcon: ReactNode[][];
}

const colors = [
  "bg-emerald-400",
  "bg-emerald-300",
  "bg-blue-400",
  "bg-blue-300",
  "bg-emerald-500",
  "bg-violet-400",
  "bg-violet-300",
  "bg-olive-700"
]

const colors_id = [
  [0, 1, 2, 3, 4, 5, 6],
  [0, 1, 2, 4, 3, 5, 7],
  [0, 2, 6, 1],
  [0, 2, 1, 6, 3, 1]
]

export default function SkillsCard(
  {
    icon, subtitle, mod_id,
    title, text, skill_title,
    frameworks, foot_card, color, cardIcon
  }: SkillsCardData
) {
  const icons = cardIcon[mod_id] ?? []
  const { activeCategory } = useSkillStore()

  return (
    <div
      className={`
        m-2 w-full lg:w-24/50 h-max
        ${
          (
            activeCategory.toLowerCase() == title.toLowerCase() ||
            activeCategory.toLowerCase() == "ALL [4 CATEGORIES]".toLowerCase()
          )
          ? ""
          : "hidden"
        }
      `}
      >
      <div
        className={`
          w-full h-1
          bg-linear-to-r ${color.from} ${color.to}/0
        `}
        >
      </div>
      <div className="h-90 p-5 bg-gray-900">
        <div
          className="
            w-full pb-5
            flex justify-between
          "
          >
          <div className={`${color.text} flex items-center gap-1`}>
            <span className="text-2xl">{icon}</span>
            <span className="text-sm">{subtitle}</span>
          </div>
          <div
            className={`
              w-max h-max px-1 py-0.5
              bg-gray-700
              ${color.text} text-sm
            `}
            >
            {`MOD_0${mod_id+1} // 04`}
          </div>
        </div>
        <hr className="text-gray-800" />
        <div className="mt-5 flex flex-col gap-5">
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="text-sm">{text}</p>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-1">
              <Rectangle size={10} color={color.bg} />
              <h3 className="text-xs">{skill_title}</h3>
            </div>
            <div className="flex gap-2 flex-wrap">
              {frameworks.map((el, i) => (
                <div
                  key={i}
                  className={`
                    px-3 py-0.5
                    bg-gray-800
                    flex items-center gap-1
                  `}
                  >
                  <Rectangle size={10} color={colors[colors_id[mod_id][i]]} />
                  <span>{el}</span>
                </div>
              ))}
            </div>
            <div
              className={`
                w-full
                bg-slate-800
                flex
              `}
              >
              {foot_card.map((el, i) => (
                <div
                  key={i}
                  className="
                    w-full p-3
                    flex justify-between flex-wrap
                    text-[10px]
                  "
                  >
                  <div>
                    <div
                      className={
                        i == 3
                        ? "hidden"
                        : `w-max flex items-center gap-1`
                      }>
                      <span className={`${color.text}`}>{icons[i]}</span>
                      <span className="text-white">{el}</span>
                    </div>
                  </div>
                  <div>
                    <div
                      className={
                        i != 3
                        ? "hidden"
                        : "w-max flex items-center gap-1"
                      }>
                      <span>{icons[i]}</span>
                      <span className={`${color.text}`}>{el}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}