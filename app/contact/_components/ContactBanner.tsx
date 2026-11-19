import PulseRectangle from "@/app/_components/PulseRectangle";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { MdOutlineSensors, MdOutlineShield, MdOutlineSwapCalls, MdOutlineTune } from "react-icons/md";
import LiveClock from "./LiveClock";

const data = {
  "top": [
    "UPTIME 99.98%",
    "GPG ENCRYPTED"
  ],
  "subtitle": "PIPELINE INITIALIZATION",
  "title": [
    "Let's Build Something",
    "Exceptional"
  ],
  "caption": "Available for freelance projects, architectural collaborations, and junior full-stack developer roles. Direct pipelines initialized below.",
  "local_card": {
    "title": "LOCAL DISPATCH CLOCK",
    "caption": "NODE: UZ_TSH_01_PRIMARY"
  },
  "footer_card": [
    {
      "title": "Response Window",
      "data": "ETA < 60 mins"
    },
    {
      "title": "Dispatch Mode",
      "data": "Async / Live WebSockets"
    },
    {
      "title": "Channel Capacity",
      "data": "Bandwidth: Open (Q2/25)"
    }
  ]
}

const icons = {
  "top": [
    <MdOutlineSensors key={"sensor"} />,
    <MdOutlineShield key={"shield"} />
  ],
  "footer_card": [
    <HiOutlineLightningBolt key={"bolt"} />,
    <MdOutlineSwapCalls key={"swap"} />,
    <MdOutlineTune key={"tune"} />
  ]
}

const colors = [
  {
    "text": "text-emerald-400",
    "bg": "bg-emerald-800"
  },
  {
    "text": "text-blue-400",
    "bg": "bg-blue-800"
  },
  {
    "text": "text-violet-400",
    "bg": "bg-violet-800"
  }
]

export default function ContactBanner() {
  return (
    <div
      className="
        w-full p-10
        bg-gray-900
      ">
      <div
        className="
          w-full
          lg:flex justify-between items-center
          block
        ">
        <div
          className="
            w-max py-1 px-2
            bg-gray-950
            flex items-center gap-2
            text-xs
          ">
          <PulseRectangle size={15} color="bg-emerald-400" />
          <span className="text-emerald-400">COMM_LINK: ACTIVE • TASHKENT UTC+5 • TRANSMISSION STATION</span>
        </div>
        <div
          className="
            w-max
            flex justify-between items-center
          ">
          <div
            className="
              flex items-center gap-2
            ">
            {data.top.map((el: string, i: number) => (
              <div
                key={i}
                className="
                  flex items-center gap-1
                  text-gray-400 text-sm
                ">
                <div className={i == 0 ? "text-emerald-400" : "text-blue-400"}>{icons.top[i]}</div>
                <span>{el}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="my-10 flex flex-col gap-5">
        <h4 className="text-sm text-blue-400">{data.subtitle}</h4>
        <h2
          className="
            w-1/2
            flex gap-2 flex-wrap
            text-5xl font-bold
          ">
          {data.title.map((line, i) => (
            <span
              key={line}
              className={
                i == 0
                  ? "text-white"
                  : "text-emerald-400 underline underline-offset-8 decoration-wavy"
              }>
              {line}
            </span>
          ))}
        </h2>
        <div
          className="
            w-full
            lg:flex lg:flex-row lg:justify-between
            flex flex-col gap-3
          ">
          <p className="text-gray-400">{data.caption}</p>
          <div
            className="
              w-full lg:w-120 p-5
              bg-gray-800
              flex flex-col gap-2
              text-sm
            ">
            <div className="flex justify-between text-emerald-400">
              <span>{data.local_card.title}</span>
              <span className="flex gap-2">
                <LiveClock />
                <span>UTC+5</span>
              </span>
            </div>
            <div
              className="
                w-full h-2
                bg-gray-950
              ">
              <div
                className="
                  w-76/100 h-full bg-emerald-400
                  animate-pulse
                ">
              </div>
            </div>
            <span className="text-right text-xs text-gray-400">
              {data.local_card.caption}
            </span>
          </div>
        </div>
      </div>
      <div
        className="
          w-full p-5
          bg-gray-800
          flex justify-between
        ">
        {data.footer_card.map((el, i: number) => (
          <div
            key={i}
            className="flex gap-3"
          >
            <div
              className={`
                w-10 h-10
                flex justify-center items-center
                ${colors[i].bg} ${colors[i].text}
                text-xl
              `}>
              {icons.footer_card[i]}
            </div>
            <div className="flex flex-col">
              <span className="text-gray-500 text-wrap">{el.title}</span>
              <span className="font-bold text-wrap">{el.data}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}