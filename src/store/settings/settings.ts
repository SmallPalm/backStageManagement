import { defineStore } from "pinia"
import settings from "@/global/settings"

const { title } = settings

const useSettingsStore = defineStore("settings", {
  state: () => {
    return {
      title: title
    }
  },
  actions: {
    setTitle(title: string) {
      this.title = title
    }
  }
})

export default useSettingsStore
