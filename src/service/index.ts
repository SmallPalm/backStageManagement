import { localCache } from "@/utlis/cacheStorage"
import { BASE_URL, TIME_OUT } from "./config"
import HYRequest from "./request"
import { TOKEN } from "@/global/constant"

const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestSuccessFn: (config) => {
      const token = localCache.getCache(TOKEN)
      console.log(config)
      if (config.headers && token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    }
  }
})

export default hyRequest
