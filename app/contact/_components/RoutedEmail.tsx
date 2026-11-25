import Link from "next/link"
import Rectangle from "@/app/_components/Rectangle"
import { PiCopySimpleLight } from "react-icons/pi"
import { MdOutgoingMail } from "react-icons/md"
import CopyButton from "@/app/_components/CopyButton"

const data = {
  "subtitle": [
    "ROUTED EMAIL HUBS [3 NODES]",
    "TLS 1.3 ENABLED"
  ],
  "cards": [
    {
      "subtitle": [
        "Node 01 // Primary Mail.ru",
        "ROUTING: PRIORITY"
      ],
      "title": "xushnudnishonov@mail.ru"
    },
    {
      "subtitle": [
        "Node 02 // Workspace Gmail",
        "SYNC: ACTIVE"
      ],
      "title": "nishonovxushnud@gmail.com"
    }
  ]
}

const colors = [
  {"text": "text-emerald-400", "bg": "bg-emerald-400"},
  {"text": "text-blue-400", "bg": "bg-blue-400"}
]

export default function RoutedEmail() {
  return (
    <div>
      <div className="w-full flex justify-between">
        {data.subtitle.map((el: string, i: number) => (
          <span
            key={i}
            className={`
              m-2
              text-xs uppercase
              ${colors[i].text}
            `}>
              {el}
          </span>
        ))}
      </div>
      <div
        className="
          w-full
          flex flex-col gap-2
        ">
        {data.cards.map((el, i) => (
          <div key={i}
            className="
              w-full p-5
              bg-gray-900
              text-xs
              duration-300
              hover:bg-gray-700
            ">
            <div className="w-full flex justify-between">
              {el.subtitle.map((elem, index) => {
                if (index === 0) {
                  return (
                    <div
                      key={index}
                      className="
                        w-max
                        flex items-center gap-1
                      ">
                      <Rectangle size={10} color={colors[i].bg} />
                      <span
                        className={`
                          ${colors[i].text}
                        `}>
                        {elem}
                      </span>
                    </div>
                  )
                }
                else {
                  return (
                    <div
                      key={index}>
                      <span className="text-gray-400">{elem}</span>
                    </div>
                  )
                }
              })}
            </div>
            <div
              className="
                my-1
                text-xl text-white
              ">
              {el.title}
            </div>
            <div className="w-max flex gap-2">
              <CopyButton text={el.title} />
              <Link
                href={`mailto:${el.title}`}
                className="
                  w-max px-3 py-1
                  flex items-center gap-1
                  bg-gray-600
                  text-blue-400
                ">
                <MdOutgoingMail />
                <span>Send email</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}