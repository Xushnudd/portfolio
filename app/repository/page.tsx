import { Suspense } from "react";
import LevelBanner from "./_components/LevelBanner";
import FilterCard from "./_components/FilterCard";

export default function Repository() {
  return (
    <main
      className="
        w-full
        flex flex-col gap-10
      ">
      <Suspense fallback={<div className="text-emerald-400">...Loading</div>}>
        <LevelBanner />
      </Suspense>
      <FilterCard />
    </main>
  )
}