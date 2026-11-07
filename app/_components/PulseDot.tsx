import Circle from "./Circle"

interface PulseDotData {
  size: number;
  color: string;
}

export default function PulseDot({ size, color }: PulseDotData) {
  return (
    <span
      className="relative flex"
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <span
        className={`
          animate-ping
          absolute
          inline-flex
          h-full w-full rounded-full
          opacity-75 ${color}
        `}
      />
      <Circle size={10} color={color} />
    </span>
  )
}