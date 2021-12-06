<template>
  <div id="top">
    <div class="title"><h2>My Diary</h2></div>
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
          <div class="post">
            <div class="message-header">
              <div>{{ message.title }}</div>
              <div>{{ message.date }}</div>
              <div class="emotion">
                <div v-if="emotions[0]">
                  <img src="./components/images/Happy.png" />
                </div>
              </div>
              <div>
                {{ message.emotion }}
              </div>
            </div>
            <div><div></div></div>
            <div>{{ message.text }}</div>
            <!-- <div>{{ message.photo }}</div> -->
            <div class="message-buttons">
              <router-link to="/Form">編集</router-link>
              <a href="#" v-on:click="keikoku(index)" class="message-button"
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
import firebase from "firebase"

export default {
  components: {
    NavBar,
  },
  data() {
    return {
      messages: [],
      emotions: [false, false, false, false, false, false],
    }
  },
  methods: {
    emochan() {
      if (this.messages.emotion === "happy") {
        this.emotions[0] = true
      } else if (this.messages.emotion === "asease") {
        this.emotions[1] = true
      } else if (this.messages.emotion === "cry") {
        this.emotions[2] = true
      } else if (this.messages.emotion === "wink") {
        this.emotions[3] = true
      } else if (this.messages.emotion === "atyaa") {
        this.emotions[4] = true
      } else if (this.messages.emotion === "angry") {
        this.emotions[5] = true
      }
    },
    postMessage() {
      const data = {
        title: this.messages.title,
        date: this.message.data,
        emotion: [this.messages.emotion],
        text: this.messages.text,
        // photo: this.messages.add,
      }
      this.emochan()
      firebase
        .firestore()
        .collection("messages")
        .add(data)
        .then(() => {
          this.messages.push(data)
        })
    },
    postTest() {
      const data = {
        date: this.messages.date,
        title: this.messages.title,
        emotion: this.messages.emotion,
        text: this.messages.text,
      }
      firebase.firestore().collection("test").doc("0").set(data)
    },
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
    keikoku(index) {
      const res = window.confirm(
        `${this.messages.date}の投稿を削除します。よろしいですか？`
      )
      if (res) {
        this.Delete(index)
      }
    },
    Delete(index) {
      this.messages.splice(index, 1)
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
  align-items: space-between;
}

.title {
  display: flex;
  justify-content: flex-start;
  padding-left: 10%;
}

.plus {
  display: flex;
  justify-content: center;
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
}
</style>
