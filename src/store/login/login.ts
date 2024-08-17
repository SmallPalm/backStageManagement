import { defineStore } from "pinia"
import { accountLoginRes, getInfo } from "@/service/api/login"
import { TOKEN } from "@/global/constant"
import { localCache } from "@/utlis/cacheStorage"

const useLoginStore = defineStore("login", {
  state: () => ({
    token: "",
    userInfo: {}
  }),
  actions: {
    async accountLoginAction(account: object) {
      try {
        // 获取token
        const loginRes = await accountLoginRes(account)
        this.token = loginRes.token
        // 存储Token
        localCache.setCache(TOKEN, loginRes.token)

        return loginRes
      } catch (err) {
        console.log(err)
      }
    }
  }
})

export default useLoginStore
