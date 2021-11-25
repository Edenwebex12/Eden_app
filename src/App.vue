<template>
  <div id="app">
    <div><FirebaseApp /></div>
    <div><ExampleApp /></div>
    <div>コードをここに書きます</div>
  </div>
</template>

<script>
import FirebaseApp from "@/components/FirebaseApp.vue"
export default {
  name: "App",
  components: {
    FirebaseApp,
  },
  data: function () {
    return {
      return() {},
    }
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
