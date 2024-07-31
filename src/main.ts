import { createApp } from "vue"
import App from "./App.vue"
//CSS文件
import "normalize.css"
import "@/assets/css/index.less"

// 路由
import router from "./router"

// 状态管理
import pinia from "./store"

const app = createApp(App)

app.use(router)
app.use(pinia)

app.mount("#app")
