import { create } from 'zustand'

interface SkillState {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

export const useSkillStore = create<SkillState>((set) => ({
  activeCategory: "all",
  setActiveCategory: (category) => set({ activeCategory: category }),
}));