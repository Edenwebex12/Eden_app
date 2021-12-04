<template>
  <div class="forms">
    <div>
      <input
        type="text"
        class="title"
        name="date"
        size="15"
        placeholder="2021 / 12 / 2"
        v-model="messages.date"
      />
      <div>
        <label class="daimei">題名</label>
        <label>画像アップロード</label><br />
        <input
          type="text"
          class="title"
          name="title"
          size="40"
          v-model="messages.title"
        />
        <input type="file" class="add" value="追加" />
      </div>
      <div class="emotions">
        <input
          type="radio"
          name="emotionSelect"
          value="happy"
          id="emotionHappy"
          checked
        /><label for="emotionHappy" />
        <input
          type="radio"
          name="emotionSelect"
          value="asease"
          id="emotionAsease"
        /><label for="emotionAsease" />
        <input
          type="radio"
          name="emotionSelect"
          value="cry"
          id="emotionCry"
        /><label for="emotionCry" />
        <input
          type="radio"
          name="emotionSelect"
          value="wink"
          id="emotionWink"
        /><label for="emotionWink" />
        <input
          type="radio"
          name="emotionSelect"
          value="atyaa"
          id="emotionAtyaa"
        /><label for="emotionAtyaa" />
        <input
          type="radio"
          name="emotionSelect"
          value="angry"
          id="emotionAngry"
        /><label for="emotionAngry" />
      </div>
      <div>※本文</div>
      <textarea
        name="kanso"
        class="text"
        rows="10"
        cols="80"
        v-model="messages.text"
      ></textarea>
      <button v-on:click="sendPost" class="submit">投稿</button>
    </div>
  </div>
</template>

<script>
import firebase from "firebase"
export default {
  data() {
    return {
      messages: {
        date: "",
        title: "",
        emotion: "",
        text: "",
        photo: "",
      },
    }
  },
  methods: {
    sendPost() {
      const post = {
        date: this.messages.date,
        title: this.messages.title,
        // emotion: this.messages.emotion,
        text: this.messages.text,
        // photo: this.messages.photo,
      }
      firebase.firestore().collection("messages").add(post)
      //   firebase
      //     .firestore()
      //     .collestion("messages")
      //     .add(post)
      //     .then((ref) => {
      //       this.messages.push({
      //         id: ref.id,
      //         ...post,
      //       })
      //     })
    },
  },
}
</script>

<style>
input[type="radio"] + label:before {
  content: "";
  display: inline-block;
  background-size: contain;
  width: 210px;
  height: 210px;
}
</style>
