interface ActiveData {
  title: string;
  view: string;
  name?: string;
  data: string;
  pulse?: boolean;
}

export default function Active({ title, view, name, data, pulse=false }: ActiveData) {
  return (
    <div
      className="
        w-full min-w-max
        px-5 py-3
        bg-slate-950
        text-xs
        flex flex-col gap-1
      "
      >
        <div
          className="
            w-full flex justify-between gap-2
          "
          >
          <span>{title}</span>
          <span className="text-emerald-300">{view}</span>
        </div>
        <div
          className="
            w-full h-2
            bg-gray-600
          "
          >
          <div
            className={`
              h-full
              bg-emerald-300
              duration-1000
              ${pulse ? "animate-pulse" : ""}
            `}
            style={{width: view}}
          ></div>
        </div>
        <div className="flex justify-between gap-2">
          {name ? (
            <span>{name}</span>
          ) : (
            <span></span>
          )}
          <span className="text-blue-400">{data}</span>
        </div>
      </div>
  )
}