import create from 'zustand'

export const useStore = create((set) => ({
  lenis: undefined,
  setLenis: (lenis) => set({ lenis }),
  overflow: true,
  setOverflow: (overflow) => set({ overflow }),
}))