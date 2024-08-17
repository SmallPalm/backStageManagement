import { TOKEN } from "@/global/constant"
import { localCache } from "@/utlis/cacheStorage"
import { createRouter, createWebHashHistory } from "vue-router"

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/main"
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../pages/login/index.vue")
    },
    {
      path: "/main",
      name: "main",
      component: () => import("../pages/main/index.vue")
    },
    {
      path: "/:pathMatch(.*)",
      name: "not-found",
      component: () => import("../pages/not-found/not-found.vue")
    }
  ]
})

// 导航守卫beforeEach: 全局前置守卫
// 参数: to: 跳转到的位置/from: 从哪里跳转
// 返回值: 返回值决定导航的路径(不返回或者返回undefined, 默认跳转)
// 例子: from: / => to: /main
router.beforeEach((to, from) => {
  const token = localCache.getCache(TOKEN)
  if (to.path === "/main" && !token) {
    return "/login"
  }
})

export default router
