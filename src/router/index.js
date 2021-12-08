import Vue from "vue"
import VueRouter from "vue-router"
import Top from "../views/Top.vue"
import Form from "../views/Form.vue"
import Schedule from "../views/Schedule.vue"
import Edit from "../views/Edit.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Top",
    component: Top,
  },
  {
    path: "/Form",
    name: "Form",
    component: Form,
  },
  {
    path: "/Schedule",
    name: "Schedule",
    component: Schedule,
  },
  {
    path: "/Edit/:id",
    name: "Edit",
    component: Edit,
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
