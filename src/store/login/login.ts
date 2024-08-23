import { defineStore } from "pinia"
import { accountLoginRes, logout } from "@/service/api/login"
import { TOKEN, USER_INFO } from "@/global/constant"
import { ElMessage } from "element-plus"
import router from "@/router"
import { localCache } from "@/utlis/cacheStorage"

const useLoginStore = defineStore("login", {
  state: () => ({
    token: localCache.getCache(TOKEN) ?? ""
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
    },
    async accountLogoutAction() {
      try {
        const res = await logout()
        console.log(res)
        localCache.removeCache(TOKEN)
        localCache.removeCache(USER_INFO)
        ElMessage.success("退出登录成功")
        router.push("/login")
      } catch (err) {
        console.log(err)
      }
    }
  }
})

export default useLoginStore
