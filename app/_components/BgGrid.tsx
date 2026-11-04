export default function BgGrid() {
  return (
    <div
      className="
        w-screen h-screen
        bg-grid-pattern
        fixed inset-0
      "
    >
      <div
        className="
          absolute -top-40 left-1/4
          h-96 w-96 rounded-full
          bg-violet-800/15 blur-3xl"
        />
      <div
        className="
          absolute top-1/2 right-1/4
          h-96 w-96 rounded-full
          bg-pink-600/15 blur-3xl"
        />
      <div
        className="
          absolute -bottom-32 -left-24
          h-96 w-96 rounded-full
          bg-indigo-700/15 blur-3xl"
        />
      <div
        className="
          absolute top-1/3 -left-32
          h-72 w-72 rounded-full
          bg-fuchsia-600/10 blur-3xl"
        />
      <div
        className="
          absolute -top-24 -right-24
          h-80 w-80 rounded-full
          bg-sky-600/10 blur-3xl"
        />
      <div
        className="
          absolute right-0 bottom-1/4
          h-72 w-72 rounded-full
          bg-purple-700/15 blur-3xl"
        />
      <div
        className="
          absolute -bottom-40 left-1/2
          h-96 w-96 rounded-full
          bg-rose-600/10 blur-3xl"
        />
      <div
        className="
          absolute top-2/3 left-1/3
          h-64 w-64 rounded-full
          bg-cyan-600/10 blur-3xl"
        />
    </div>
  )
}