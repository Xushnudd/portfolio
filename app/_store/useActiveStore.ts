import { create } from 'zustand'

interface SkillState {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

export const useActiveStore = create<SkillState>((set) => ({
  activeCategory: "ALL [4 CATEGORIES]".toLowerCase(),
  setActiveCategory: (category) => set({ activeCategory: category }),
}));