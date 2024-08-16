import { defineStore } from "pinia"
import { accountLoginRes } from "@/service/api/login"
import { TOKEN } from "@/global/constant"
import { localCache } from "@/utlis/cacheStorage"

const useLoginStore = defineStore("login", {
  state: () => ({
    token: "",
    userInfo: {}
  }),
  actions: {
    async accountLoginAction(account: object) {
      // 获取token
      const loginRes = await accountLoginRes(account)
      console.log(loginRes)
      // 存储Token
      localCache.setCache(TOKEN, loginRes.token)
    }
  }
})

export default useLoginStore
