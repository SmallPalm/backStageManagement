import { createRouter, createWebHashHistory } from "vue-router"

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/login"
    },
    {
      path: "/login",
      component: () => import("../pages/login/index.vue")
    },
    {
      path: "/main",
      component: () => import("../pages/main/index.vue")
    },
    {
      path: "/:pathMatch(.*)",
      name: "not-found",
      component: () => import("../pages/not-found/not-found.vue")
    }
  ]
})

export default router
