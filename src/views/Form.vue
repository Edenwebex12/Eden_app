<template>
  <div class="forms">
    <div class="pagetitle"><h2>投稿フォーム</h2></div>
    <div><NavBar /></div>
    <div class="form"><database /></div>
  </div>
</template>

<script>
import NavBar from "@/views/components/NavBar.vue"
import database from "@/views/components/database.vue"
export default {
  // props: ["EventBus"],
  components: {
    NavBar,
    database,
  },
  data() {
    return {
      message: "",
    }
  },
  // mounted() {
  //   if (this.EventBus) {
  //     this.EventBus.$on("click-event", this.editpage)
  //   }
  // },
  methods: {
    editpage(message) {
      return {
        message: message,
        // edit: true,
      }
    },
  },
}
</script>

<style>
.pagetitle {
  margin-left: 5%;
}
.form {
  display: flex;
  align-items: center;
}
</style>
