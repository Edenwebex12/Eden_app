<template>
  <div id="top">
    <div class="pagetitle"><h2>My Diary</h2></div>
    <div><NavBar /></div>
    <router-link to="/Form" class="plus"
      ><img src="./components/images/プラスボタン.png"
    /></router-link>
    <div>
      <ul>
        <div
          v-for="(message, index) in messages"
          v-bind:key="index"
          class="posts"
        >
          <!-- <database
            :title="message.title"
            :date="message.date"
            :emotion="message.emotion"
            :text="message.text"
          /> -->
          <div class="post">
            <div class="message-header">
              <div class="date">{{ message.date }}</div>
              <div class="postTitle">{{ message.title }}</div>
              <emotion :emo="message.emotion" />
            </div>
            <div class="messageText">{{ message.text }}</div>
            <!-- <div>{{ message.photo }}</div> -->
            <div class="message-buttons">
              <router-link
                :to="{
                  name: 'Edit',
                  params: {
                    id: `${message.date + message.title + message.emotion}`,
                  },
                }"
                class="editButton"
                @click="edit(message, index)"
                >編集</router-link
              >
              <a href="#" v-on:click="keikoku(message)" class="deleteButton"
                >削除</a
              >
            </div>
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import NavBar from "@/views/components/NavBar.vue"
import emotion from "@/views/components/emotion.vue"
import firebase from "firebase"
// import database from "@/views/components/database.vue"

export default {
  name: "Top",
  components: {
    NavBar,
    emotion,
    // database,
  },
  data() {
    return {
      messages: [],
      emo: "",
    }
  },
  methods: {
    getHello() {
      firebase
        .firestore()
        .collection("messages")
        .where("text", "==", "こんにちは、メッセージの本文です。")
        .orderBy("date", "desc")
        .limit(1)
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            console.log(doc.id, "=>", doc.data())
          })
        })
    },
    keikoku(message) {
      const res = window.confirm(
        `${message.date}の投稿を削除します。よろしいですか？`
      )
      if (res) {
        firebase
          .firestore()
          .collection("messages")
          .doc(`${message.date + message.title + message.emotion}`)
          .delete()
        location.reload()
      }
    },
  },
  created() {
    firebase
      .firestore()
      .collection("messages")
      .orderBy("date", "desc")
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
}

.pagetitle {
  display: flex;
  justify-content: flex-start;
  padding-left: 5%;
}

.plus {
  display: flex;
  justify-content: center;
  padding-top: 1%;
  padding-bottom: 0.1%;
}

.message-buttons {
  font-family: sans-serif;
  color: #b1221a;
}

.message-button {
  padding: 1.5rem;
}
.post {
  background-color: #fff3b8;
  margin-bottom: 5%;
  margin-right: 20%;
  margin-left: 10%;
  border-radius: 2rem;
  font-family: sans-serif;
}

.message-header {
  display: flex;
  padding-top: 5%;
  padding-left: 5%;
  padding-bottom: 2%;
}

.date {
  padding-right: 3%;
  font-size: 16px;
}

.postTitle {
  font-weight: bold;
  font-size: 20px;
}

.emotion {
  padding-left: 20%;
}

.messageText {
  font-size: 14px;
  padding-left: 5%;
  padding-right: 30%;
  white-space: pre-wrap;
}

.message-buttons {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-right: 8%;
  padding-bottom: 2%;
  color: #b1221a;
}
.editButton {
  padding-right: 5%;
}
</style>
