import { defineStore } from 'pinia'

export const useMainWallpaper = defineStore('mainWallpaper', {
  state: () => ({
    currentIndex: 0,
  }),
  actions: {
    setIndex(index: number) {
      this.currentIndex = index
    },
  },
  getters: {
    getIndex: (state) => state.currentIndex,
  },
})
