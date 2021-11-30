<template>
  <div id="top">
    <div class="title"><h2>日記</h2></div>
    <div><NavBar /></div>
    <div class="posts"></div>
    <div v-for="(message, index) in messages" v-bind:key="index">
      {{ message.text }}
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar"
import firebase from "firebase"

export default {
  name: "top",
  components: {
    NavBar,
    firebase,
  },
  data() {
    return {
      messages: [],
    }
  },
  methods: {
    postMessage() {
      const data = { text: this.message }
      firebase
        .firestore()
        .collection("messages")
        .add(data)
        .then(() => {
          this.messages.push(data)
        })
    },
    postTest() {
      const data = { text: "ハロー" }
      firebase.firestore().collection("test").doc("0").set(data)
    },
    getHello() {
      firebase
        .firestore()
        .collection("messages")
        .where("text", "==", "こんにちは、メッセージの本文です。")
        // .orderBy("text", "desc")
        .limit(1)
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            console.log(doc.id, "=>", doc.data())
          })
        })
    },
  },
  created() {
    firebase
      .firestore()
      .collection("messages")
      .get()
      .then((snapshot) => {
        for (let i = 0; i < snapshot.docs.length; i++) {
          this.messages.push(snapshot.docs[i].data())
        }
      })
  },
}
</script>

<style>
#top {
  display: flex;
  flex-direction: column;
  align-items: space-between;
}

.title {
  display: flex;
  justify-content: flex-start;
  padding-left: 10%;
}
</style>
