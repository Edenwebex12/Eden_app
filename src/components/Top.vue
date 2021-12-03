<template>
  <div id="top">
    <div class="title"><h2>日記</h2></div>
    <div><NavBar /></div>
    <div v-for="(message, index) in messages" v-bind:key="index" class="posts">
      <div class="message-header">
        <div>{{ message.title }}</div>
        <div>{{ message.date }}</div>
        <div>{{ message.emotion }}</div>
      </div>
      <div>{{ message.text }}</div>
      <div>{{ message.photo }}</div>
      <div class="message-buttons">
        <a class="message-button">編集</a>
        <a class="message-button">削除</a>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar"
import Form from "@/components/Form"
import firebase from "firebase"

export default {
  components: {
    NavBar,
  },
  data() {
    return {
      messages: [],
    }
  },
  methods: {
    postMessage() {
      const data = {
        title: Form.textlines,
        date: Form.textlines,
        emotion: Form.emotion,
        text: Form.textlines_honbun,
        photo: Form.add,
      }
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

.message-buttons {
  font-family: sans-serif;
  color: #b1221a;
}

.message-button {
  padding: 1.5rem;
}
</style>
