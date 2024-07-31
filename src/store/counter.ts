import { defineStore } from "pinia"

const useCounter = defineStore("counter", {
  state: () => {
    return {
      count: 122
    }
  },
  getters: {
    double: (state) => state.count * 2
  },
  actions: {
    increment() {
      this.count++
    }
  }
})

export default useCounter
