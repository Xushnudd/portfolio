import { Suspense } from "react";
import LevelBanner from "./_components/LevelBanner";

export default function Repository() {
  return (
    <main>
      <Suspense fallback={<div className="text-emerald-400">...Loading</div>}>
        <LevelBanner />
      </Suspense>
    </main>
  )
}