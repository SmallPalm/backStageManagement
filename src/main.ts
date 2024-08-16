import { createApp } from "vue"
import App from "./App.vue"
//CSS文件
import "normalize.css"
import "@/assets/css/index.less"

// 路由
import router from "./router"

// 状态管理
import pinia from "./store"
// 全局Icon
import { globalElIcons } from "./global"

// 0.针对ElMessage和ElLoading等组件样式的引入
// 0.1.全局引入样式
// import "element-plus/dist/index.css"
// 0.2.组件引入样式
// import "element-plus/theme-chalk/el-message.scss"
// 0.3.使用vite-plugin-style-import插件

const app = createApp(App)

app.use(globalElIcons)
app.use(router)
app.use(pinia)

app.mount("#app")
