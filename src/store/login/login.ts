import { defineStore } from "pinia"
import { accountLoginRes, getInfo } from "@/service/api/login"
import { getAuthRouter } from "@/service/api/router"
import { TOKEN, USER_INFO } from "@/global/constant"
import { localCache } from "@/utlis/cacheStorage"

const useLoginStore = defineStore("login", {
  state: () => ({
    token: "",
    userInfo: {},
    authRouter: {}
  }),
  actions: {
    async accountLoginAction(account: object) {
      try {
        // 获取token
        const loginRes = await accountLoginRes(account)
        this.token = loginRes.token
        // 存储Token
        localCache.setCache(TOKEN, loginRes.token)

        // 获取用户信息
        const userInfo = await getInfo()
        this.userInfo = userInfo
        // 存储用户信息
        localCache.setCache(USER_INFO, userInfo)

        // 获取路由
        const authRouter = await getAuthRouter()
        this.authRouter = authRouter
        return loginRes
      } catch (err) {
        console.log(err)
      }
    }
  }
})

export default useLoginStore
