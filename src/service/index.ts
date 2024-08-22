import { localCache } from "@/utlis/cacheStorage"
import { ElNotification, ElMessageBox, ElMessage, ElLoading } from "element-plus"
import { BASE_URL, TIME_OUT } from "./config"
import HYRequest from "./request"
import { TOKEN } from "@/global/constant"
// Authorization: 提供服务器验证用户代理身份的凭据
const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestSuccessFn: (config) => {
      const token = localCache.getCache(TOKEN)
      if (config.headers && token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    responseSuccessFn: (res) => {
      const code = res.data.code ?? 200

      if (code === 401) {
        ElMessageBox.confirm("登录状态已过期，您可以继续留在该页面，或者重新登录", "系统提示", { confirmButtonText: "重新登录", cancelButtonText: "取消", type: "warning" })
          .then(() => {
            console.log("first")
          })
          .catch(() => {})
      }

      return res
    }
  }
})

export default hyRequest
