<template>
  <div class="forms">
    <div class="pagetitle"><h2>投稿フォーム</h2></div>
    <div><NavBar /></div>
    <div class="form"><database2 :message="message" /></div>
  </div>
</template>

<script>
import firebase from "firebase"
import NavBar from "@/views/components/NavBar.vue"
import database2 from "@/views/components/database2.vue"
export default {
  components: {
    NavBar,
    database2,
  },
  data() {
    return {
      message: {},
    }
  },
  methods: {
    // editpage(message) {
    //   return {
    //     message: message,
    //   }
    // },
    getData() {
      firebase
        .firestore()
        .collection("messages")
        .doc(this.$route.params["id"])
        .get()
        .then((snapshot) => {
          this.message = snapshot
          console.log(this.message.text)
        })
    },
  },
  created() {
    this.getData()
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
  margin-top: 3%;
}
</style>
