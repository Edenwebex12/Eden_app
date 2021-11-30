<template>
  <div id="app">
    <div><FirebaseApp /></div>
    <div><Top /></div>
  </div>
</template>

<script>
import FirebaseApp from "@/components/FirebaseApp.vue"
import Top from "@/components/Top.vue"

export default {
  name: "App",
  components: {
    FirebaseApp,
    top
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
