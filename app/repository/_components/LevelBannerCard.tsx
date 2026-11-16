import { ReactNode } from "react";

interface colorData {
  text: string;
  bg: string;
}

interface LevelBannerCardData {
  subtitle: string;
  title: string;
  icon?: ReactNode;
  percent: number;
  color: colorData;
}

export default function LevelBannerCard(
  { subtitle, title, icon=false, percent, color }: LevelBannerCardData
) {
  return (
    <div
      className="
        w-1/4 p-3
        bg-gray-800
        flex flex-col gap-2
      ">
      <span className="text-xs text-gray-400 uppercase">{subtitle}</span>
      <div className="flex items-center gap-1">
        <span className="text-4xl font-bold">{title}</span>
        <div className={`mt-3 ${color.text}`}>{icon}</div>
      </div>
      <div
        className="
          w-full h-1
          bg-gray-700
        ">
          <div
            className={`
              h-full
              ${color.bg}
              duration-500
            `}
            style={{width: `${percent}%`}}
            ></div>
        </div>
    </div>
  )
}