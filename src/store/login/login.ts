import { defineStore } from "pinia"
import { accountLoginRes } from "@/service/api/login"
import { TOKEN } from "@/global/constant"
import { localCache } from "@/utlis/cacheStorage"

const useLoginStore = defineStore("login", {
  state: () => ({
    token: ""
  }),
  actions: {
    async accountLoginAction(account: object) {
      try {
        // 获取token
        const loginRes = await accountLoginRes(account)

        if (!loginRes.token) {
          return loginRes
        }
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
