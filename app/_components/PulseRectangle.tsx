import Rectangle from "./Rectangle";

interface PulseRectangleData {
  size: number;
  color: string;
}

export default function PulseRectangle({ size, color }: PulseRectangleData) {
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
          h-full w-full
          opacity-75 ${color}
        `}
      />
      <Rectangle size={size} color={color} />
    </span>
  )
}