'use client'

import { useEffect, useState } from "react"

export default function LiveClock() {
  const [time, setTime] = useState<string>("")
  useEffect(() => {
    const update = () => {
      setTime(new Date().toLocaleTimeString("uz-UZ"))
    }

    update()
    const interval = setInterval(update, 1000)

    return () => clearInterval(interval)
  }, [])
  return (
    <span>{time || "--:--:--"}</span>
  )
}