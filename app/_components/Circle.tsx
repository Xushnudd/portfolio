interface CircleData {
  size: number;
  color: string;
  pulse?: boolean;
}

export default function Circle({ size, color, pulse=false }: CircleData) {
  return (
    <div
      className={`rounded-full ${color} ${pulse ? "animate-pulse" : ""}`}
      style={{ width: `${size}px`, height: `${size}px` }}
    />
  )
}