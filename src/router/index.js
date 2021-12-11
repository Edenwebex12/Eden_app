import Vue from "vue"
import VueRouter from "vue-router"
import firebase from "firebase"
import PreLogin from "../views/PreLogin.vue"
import Top from "../views/Top.vue"
import Form from "../views/Form.vue"
import Edit from "../views/Edit.vue"
// import Signup from "../views/Signup.vue"
// import Login from "../views/Login.vue"
// import Logout from "../views/Logout.vue"

Vue.use(VueRouter)

const routes = [
  // {
  //   path: "/Signup",
  //   name: "Signup",
  //   component: Signup,
  // },
  // {
  //   path: "/Login",
  //   name: "Login",
  //   component: Login,
  // },
  // {
  //   path: "/Logout",
  //   name: "Logout",
  //   component: Logout,
  // },
  {
    path: "/Mypage",
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
    path: "/Edit/:id",
    name: "Edit",
    component: Edit,
    props: true,
    // meta: { requiresAuth: true },
  },
  { path: "/", name: "PreLogin", component: PreLogin },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

// router.beforeResolve((to, from, next) => {
//   if (to.path == "/Mypage") {
//     next()
//   } else {
//     firebase.auth().onAuthStateChanged((user) => {
//       if (user) {
//         next()
//       } else {
//         next({ path: "/" })
//       }
//     })
//   }
// })
router.beforeResolve((to, from, next) => {
  if (to.path == "/") {
    next()
  } else {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        next()
      } else {
        next({ path: "/" })
      }
    })
  }
})
export default router
