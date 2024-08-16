import { defineStore } from "pinia"
import { accountLoginRes } from "@/service/api/login"
import { TOKEN } from "@/global/constant"

const useLoginStore = defineStore("login", {
  state: () => ({
    token: "",
    id: "",
    name: ""
  }),
  actions: {
    async accountLoginAction(account: object) {
      // 获取token
      const loginRes = await accountLoginRes(account)
      console.log(loginRes)

      localStorage.setItem(TOKEN, loginRes.token)
    }
  }
})

export default useLoginStore
