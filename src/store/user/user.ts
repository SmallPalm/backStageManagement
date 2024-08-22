import { defineStore } from "pinia"
import { getUserInfo } from "@/service/api/user"
import { getAuthRouter } from "@/service/api/router"
import { USER_INFO } from "@/global/constant"
import { localCache } from "@/utlis/cacheStorage"

const useUserStore = defineStore("user", {
  state: () => {
    return {
      userInfo: {},
      authRouter: []
    }
  },
  actions: {
    async getUserInfo() {
      try {
        // 获取用户信息
        const userInfo = await getUserInfo()
        this.userInfo = userInfo
        // 存储用户信息
        localCache.setCache(USER_INFO, userInfo)

        // 获取路由
        const authRouter = await getAuthRouter()
        this.authRouter = authRouter.data

        return [userInfo, authRouter]
      } catch (error) {
        console.log(error)
      }
    }
  }
})

export default useUserStore
