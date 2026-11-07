interface CircleData {
  size: number;
  color: string;
}

export default function Circle({ size, color }: CircleData) {
  let data = "w-"+size+" h-"+size+" "+color
  return (
    <div
      className={`rounded-full ${color}`}
      style={{ width: `${size}px`, height: `${size}px` }}
    />
  )
}