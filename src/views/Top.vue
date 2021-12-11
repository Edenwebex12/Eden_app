<template>
  <div id="top">
    <div clsss="header">
      <div class="pagetitle"><h2>My Diary</h2></div>
      <div><NavBar /></div>
      <router-link to="/Form" class="plus"
        ><img src="./components/images/プラスボタン.png"
      /></router-link>
    </div>
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
              <!-- <div class="name">{{ message.name }}</div> -->
              <div class="emotion">
                <div v-if="emochan(message.emotion) === 1">
                  <img src="@/views/components/images/Happy.png" />
                </div>
                <div v-else-if="emochan(message.emotion) === 2">
                  <img src="@/views/components/images/Asease.png" />
                </div>
                <div v-else-if="emochan(message.emotion) === 3">
                  <img src="@/views/components/images/Cry.png" />
                </div>
                <div v-else-if="emochan(message.emotion) === 4">
                  <img src="@/views/components/images/Wink.png" />
                </div>
                <div v-else-if="emochan(message.emotion) === 5">
                  <img src="@/views/components/images/Atyaa.png" />
                </div>
                <div v-else-if="emochan(message.emotion) === 6">
                  <img src="@/views/components/images/Angry.png" />
                </div>
              </div>
            </div>
            <div class="main">
              <div class="left">
                <div class="messageText">{{ message.text }}</div>
              </div>
              <div class="right">
                <div class="image">
                  <div v-if="message.image">
                    <img
                      v-bind:src="message.image.url"
                      style="max-width: 100%; max-height: 90%"
                    />
                  </div>
                  <div v-else><img src="@/assets/No Image.png" /></div>
                </div>
                <!-- <div>{{ message.photo }}</div> -->
                <div class="message-buttons">
                  <router-link
                    :to="{
                      name: 'Edit',
                      params: {
                        id: message.id,
                      },
                    }"
                    class="editButton"
                    >編集</router-link
                  >
                  <a href="#" v-on:click="keikoku(message)" class="deleteButton"
                    >削除</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import NavBar from "@/views/components/NavBar.vue"
// import emotion from "@/views/components/emotion.vue"
import firebase from "firebase"
// import database from "@/views/components/database.vue"

export default {
  name: "Top",
  components: {
    NavBar,
    // emotion,
    // database,
  },
  data() {
    return {
      messages: [],
      date: "",
      emotion: "",
      title: "",
      text: "",
      author: "",
      id: "",
      image: "",
      url: "",
      // emo: "",
      // user: {
      //   id: "",
      //   email: "",
      //   name: "",
      //   sex: "",
      // },
    }
  },
  methods: {
    emochan(emotion) {
      if (emotion === "happy") {
        return 1
      } else if (emotion === "asease") {
        return 2
      } else if (emotion === "cry") {
        return 3
      } else if (emotion === "wink") {
        return 4
      } else if (emotion === "atyaa") {
        return 5
      } else if (emotion === "angry") {
        return 6
      } else {
        return 0
      }
    },
    // addDiary() {
    //   if (
    //     this.date !== "" &&
    //     this.emotion !== "" &&
    //     this.title !== "" &&
    //     this.text !== ""
    //   ) {
    //     let Date = { item: this.date }
    //     let Emotion = { item: this.emotion }
    //     let Title = { item: this.title }
    //     let Text = { item: this.text }
    //     this.messages.push({
    //       dates: Date.item,
    //       emotions: Emotion.item,
    //       titles: Title.item,
    //       texts: Text.item,
    //     })
    //     firebase
    //       .firestore()
    //       .collection("users")
    //       .add(
    //         {
    //           messages: this.messages,
    //         },
    //         (this.date = ""),
    //         (this.emotion = ""),
    //         (this.title = ""),
    //         (this.text = "")
    //       )
    //   }
    // },
    // toHome() {
    //   this.$router.push("/Mypage")
    // },
    // getHello() {
    //   firebase
    //     .firestore()
    //     .collection("messages")
    //     .where("text", "==", "こんにちは、メッセージの本文です。")
    //     .orderBy("date", "desc")
    //     .limit(1)
    //     .get()
    //     .then((snapshot) => {
    //       snapshot.forEach((doc) => {
    //         console.log(doc.id, "=>", doc.data())
    //       })
    //     })
    // },
    keikoku(message) {
      const res = window.confirm(
        `${message.date}の投稿を削除します。よろしいですか？`
      )
      if (res) {
        firebase.firestore().collection("messages").doc(message.id).delete()
        location.reload()
      }
    },
    // mypost() {
    //   firebase
    //     .firestore()
    //     .collection("messages")
    //     .where(this.name === this.message.name)
    //     .orderBy("date", "desc")
    //     .get()
    //     .then((snapshot) => {
    //       for (let i = 0; i < snapshot.docs.length; i++) {
    //         this.messages.push(snapshot.docs[i].data())
    //       }
    //     })
    // },
  },
  created() {
    console.log(firebase.auth().currentUser.uid)

    // firebase
    //   .firestore()
    //   // .doc(`users/${user.uid}`)
    //   .collection("messages")
    //   .orderBy("date", "desc")
    //   .get()
    //   .then((snapshot) => {
    //     for (let i = 0; i < snapshot.docs.length; i++) {
    //       this.messages.push(snapshot.docs[i].data())
    //     }
    //   })
    // firebase
    //   .firestore()
    //   // .doc(`users/${user.uid}`)
    //   .collection("users")
    //   .orderBy("messages.date", "desc")
    //   .get()
    //   .then((snapshot) => {
    //     for (let i = 0; i < snapshot.docs.length; i++) {
    //       this.users.push(snapshot.docs[i].data())
    //     }
    //   })
    // this.database = firebase.database()
    // this.uid = firebase.auth().currentUser.uid
    // this.messagesRef = this.database.ref("messages/" + this.uid)
    firebase
      .firestore()
      .collection("messages")
      .where("author", "==", `${firebase.auth().currentUser.uid}`)
      .orderBy("date", "desc")
      .onSnapshot((querySnapshot) => {
        // const obj = {}
        querySnapshot.forEach((doc) => {
          // obj[doc.id] = doc.data()
          // this.id = doc.id
          this.messages.push({
            id: doc.id,
            ...doc.data(),
          })
        })
        console.log(this.messages[0].image)
      })
    // this.messagesRef.on("value", (snapshot) => {
    //   this.messages = snapshot.val()
    // })

    // firebase
    //   .firestore()
    //   .collection("users")
    //   .doc(this.uid)
    //   .get()
    //   .then((doc) => {
    //     this.user.id = doc.data().id
    //     this.user.email = doc.data().email
    //     this.user.name = doc.data().name
    //     this.user.sex = doc.data().sex
    //   })
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

.name {
  padding-left: 1rem;
}

.emotion {
  padding-left: 20%;
  padding-top: 0.2%;
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
.main {
  display: flex;
}
.left {
  width: 70%;
}
.right {
  max-width: 30%;
  padding-right: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.message-buttons {
  display: flex;
  justify-content: space-around;
}

.header {
  border: 1px solid;
  /* 表示位置を固定 */
  position: fixed;
  bottom: 40px;
  right: 20px;
  /* 表示順序 他のコンテンツが重ならないようにする */
  z-index: 9999;
  background-color: #ffffff;
}
</style>
