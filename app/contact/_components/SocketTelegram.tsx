import Link from "next/link";
import { GrShare } from "react-icons/gr";
import { MdOutlineNearMe } from "react-icons/md";

const data = {
  "subtitle": "SOCKET://TELEGRAM_VIP",
  "subtitleCard": "Hight Priority",
  "title": "@nishonov_xushnud",
  "text": "Typically replies within 1 hour • Direct socket connection. Ideal for quick syncs, instant technical architecture chats, or urgent requisitions.",
  "button": {"name": "open telegram chat", "link": "https://t.me/nishonov_xushnud"}
}

export default function SocketTelegram() {
  return (
    <div
      className="
        w-full p-10
        bg-gray-900
        flex flex-col gap-5
      ">
      <div className="w-full flex justify-between">
        <div className="w-max flex items-center gap-1">
          <div className="w-max p-2 bg-emerald-400/40">
            <MdOutlineNearMe className="text-emerald-400" />
          </div>
          <div className="text-xs text-emerald-400 font-bold">{data.subtitle}</div>
        </div>
        <div
          className="
            w-max h-max px-2 py-1
            bg-emerald-400
            text-black text-xs
            font-bold
          ">
          {data.subtitleCard}
        </div>
      </div>
      <div className="w-full flex flex-col gap-3">
        <h2 className="text-2xl text-white">{data.title}</h2>
        <p className="text-sm">{data.text}</p>
      </div>
      <Link
        href={data.button.link}
        className="
          w-full py-3
          bg-emerald-400
          flex justify-center items-center gap-1
          text-black text-xs
          font-bold uppercase
          shadow-emerald-400 shadow-[0_0_10px]
          hover:shadow-[0_0_15px]
        ">
        <span>{data.button.name}</span>
        <GrShare />
      </Link>
    </div>
  )
}