<template>
  <div>
    <h1>Firestoreを使う</h1>
    <div>
      <input v-model="message" />
      <button v-on:click="postMessage">メッセージをFirestoreに保存する</button>
      <div v-for="(message, index) in messages" v-bind:key="index">
        {{ message.text }}
      </div>
    </div>
  </div>
</template>
>
<script>
import firebase from "firebase"

export default {
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
