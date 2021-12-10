<template>
  <div class="forms">
    <div class="pagetitle"><h2>投稿フォーム</h2></div>
    <div><NavBar /></div>
    <div class="forms">
      <div class="form">
        <div class="box">
          <div class="up">
            <input
              type="date"
              class="date"
              name="date"
              size="15"
              v-model="messages.date"
              placeholder="message.date"
              id="date"
            />
            <div>
              <div class="emotions">
                <div class="emoTop">
                  <input
                    type="radio"
                    name="emotionSelect"
                    value="happy"
                    id="emotionHappy"
                    v-model="messages.emotion"
                    placeholder=""
                    checked
                  /><label for="emotionHappy" />
                  <input
                    type="radio"
                    name="emotionSelect"
                    value="asease"
                    id="emotionAsease"
                    v-model="messages.emotion"
                    placeholder=""
                  /><label for="emotionAsease" />
                  <input
                    type="radio"
                    name="emotionSelect"
                    value="cry"
                    id="emotionCry"
                    v-model="messages.emotion"
                    placeholder=""
                  /><label for="emotionCry" />
                </div>
                <div class="emoBottom">
                  <input
                    type="radio"
                    name="emotionSelect"
                    value="wink"
                    id="emotionWink"
                    v-model="messages.emotion"
                    placeholder=""
                  /><label for="emotionWink" />
                  <input
                    type="radio"
                    name="emotionSelect"
                    value="atyaa"
                    id="emotionAtyaa"
                    v-model="messages.emotion"
                    placeholder=""
                  /><label for="emotionAtyaa" />
                  <input
                    type="radio"
                    name="emotionSelect"
                    value="angry"
                    id="emotionAngry"
                    v-model="messages.emotion"
                    placeholder=""
                  /><label for="emotionAngry" />
                </div>
              </div>
            </div>
          </div>
          <div class="middle">
            <label class="daimei">題名</label><br /><input
              type="text"
              class="title"
              id="title"
              name="title"
              size="40"
              v-model="messages.title"
              placeholder="message.title"
            />
          </div>
          <div class="bottom">
            <div><span>※</span>本文</div>
            <textarea
              name="kanso"
              class="text"
              id="text"
              rows="10"
              cols="80"
              v-model="messages.text"
              value="message.text"
            ></textarea>
          </div>
          <div class="button">
            <button v-on:click="sendPost()" class="submit">編集</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase"
import NavBar from "@/views/components/NavBar.vue"
// import database2 from "@/views/components/database2.vue"
export default {
  components: {
    NavBar,
    // database2,
  },
  data() {
    return {
      messages: {
        date: "",
        title: "",
        emotion: "",
        text: "",
      },
    }
  },
  methods: {
    // editpage(message) {
    //   return {
    //     message: message,
    //   }
    // },
    sendPost() {
      //   let storageRef = firebase
      //     .storage()
      //     .ref()
      //     .child("tmp/" + this.messages.photo.name)
      //   storageRef.put(this.messages.photo)
      const post = {
        date: this.messages.date,
        title: this.messages.title,
        emotion: this.messages.emotion,
        text: this.messages.text,
        // photo: this.messages.photo,
      }
      if (this.messages.text === "") {
        alert("本文を投稿してください")
      } else {
        firebase
          .firestore()
          .collection("messages")
          .doc(`${post.date}+${post.emotion}+${post.title}`)
          .update(this.messages)
        location.reload()
      }
    },
  },
  created() {
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
