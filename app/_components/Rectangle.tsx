interface RectangleData {
  size: number;
  color: string;
  pulse?: boolean;
}

export default function Rectangle({ size, color, pulse=false }: RectangleData) {
  return (
    <div
      className={`${color} ${pulse ? "animate-pulse" : ""}`}
      style={{ width: `${size}px`, height: `${size}px` }}
    />
  )
}