import Vue from "vue"
import VueRouter from "vue-router"
import firebase from "firebase"
import Top from "../views/Top.vue"
import Form from "../views/Form.vue"
import Schedule from "../views/Schedule.vue"
import Edit from "../views/Edit.vue"
import Signup from "../views/Signup.vue"
import Login from "../views/Login.vue"
import Logout from "../views/Logout.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/Signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/Login",
    name: "Login",
    component: Login
  },
  {
    path: "/Logout",
    name: "Logout",
    component: Logout,
  },
  {
    path: "/",
    name: "Top",
    component: Top,
    // meta: { requiresAuth: true },
  },
  {
    path: "/Form",
    name: "Form",
    component: Form,
    // meta: { requiresAuth: true },
  },
  {
    path: "/Schedule",
    name: "Schedule",
    component: Schedule,
    meta: { requiresAuth: true },
  },
  {
    path: "/Edit/:id",
    name: "Edit",
    component: Edit,
    // meta: { requiresAuth: true },
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  let requiresAuth = to.matched.some((record) => record.meta.requiresAuth)
  if (requiresAuth) {
    // このルートはログインされているかどうか認証が必要です。
    // もしされていないならば、ログインページにリダイレクトします。
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        next()
      } else {
        next({
          path: "/Login",
          query: { redirect: to.fullPath },
        })
      }
    })
  } else {
    next() // next() を常に呼び出すようにしてください!
  }
})

export default router
