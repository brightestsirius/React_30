import { create } from "zustand";

const useBearsStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) =>
    set((state) => ({ bears: state.bears + newBears })),
}));

export default useBearsStore;