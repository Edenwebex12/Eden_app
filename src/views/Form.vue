<template>
  <div class="forms">
    <div class="title"><h2>投稿フォーム</h2></div>
    <div><NavBar /></div>
    <div><database /></div>
  </div>
</template>

<script>
import NavBar from "@/views/components/NavBar.vue"
import database from "@/views/components/database.vue"
export default {
  components: {
    NavBar,
    database,
  },
}
</script>
