import SkillsBanner from "./_components/SkillsBanner";
import TechSkills from "./_components/TechSkills";

export default function Skills() {
  return (
    <main
      className="
        w-full
        flex flex-col gap-10
      "
      >
      <SkillsBanner />
      <TechSkills />
    </main>
  )
}