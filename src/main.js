import Vue from "vue"
import App from "./App.vue"
import firebase from "firebase"
import "./firebase.js"
import router from "./router"

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app")

export const firestorage = firebase.storage()
