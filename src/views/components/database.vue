<template>
  <div class="forms">
    <div class="form">
      <div class="up">
        <input
          type="date"
          class="date"
          name="date"
          size="15"
          v-model="messages.date"
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
                checked
              /><label for="emotionHappy" />
              <input
                type="radio"
                name="emotionSelect"
                value="asease"
                id="emotionAsease"
                v-model="messages.emotion"
              /><label for="emotionAsease" />
              <input
                type="radio"
                name="emotionSelect"
                value="cry"
                id="emotionCry"
                v-model="messages.emotion"
              /><label for="emotionCry" />
            </div>
            <div class="emoBottom">
              <input
                type="radio"
                name="emotionSelect"
                value="wink"
                id="emotionWink"
                v-model="messages.emotion"
              /><label for="emotionWink" />
              <input
                type="radio"
                name="emotionSelect"
                value="atyaa"
                id="emotionAtyaa"
                v-model="messages.emotion"
              /><label for="emotionAtyaa" />
              <input
                type="radio"
                name="emotionSelect"
                value="angry"
                id="emotionAngry"
                v-model="messages.emotion"
              /><label for="emotionAngry" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <label class="daimei">題名</label><br /><input
          type="text"
          class="title"
          name="title"
          size="40"
          v-model="messages.title"
        />
      </div>
      <!-- <div>
          <label>画像アップロード</label><br />
          <input
            type="file"
            class="add"
            value="追加"
            id="add"
            @change="addFile"
          />
        </div> -->

      <div>※本文</div>
      <textarea
        name="kanso"
        class="text"
        rows="10"
        cols="80"
        v-model="messages.text"
      ></textarea>
      <button v-on:click="sendPost()" class="submit">投稿</button>
    </div>
  </div>
</template>

<script>
import firebase from "firebase"

export const storage = firebase.storage()
export default {
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
    // addFile: function (e) {
    //   e.preventDefault()
    //   let files = e.target.files
    //   this.messages.photo = files[0]
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
        firebase.firestore().collection("messages").add(post)
      }
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
  width: 2rem;
  height: 2rem;
}
input[type="radio"][value="happy"] + label:before {
  background-image: url("../components/images/Happy.png");
  background-repeat: no-repeat;
}
input[type="radio"][value="asease"] + label:before {
  background-image: url("../components/images/Asease.png");
  background-repeat: no-repeat;
}
input[type="radio"][value="cry"] + label:before {
  background-image: url("../components/images/Cry.png");
  background-repeat: no-repeat;
}
input[type="radio"][value="wink"] + label:before {
  background-image: url("../components/images/Wink.png");
  background-repeat: no-repeat;
}
input[type="radio"][value="atyaa"] + label:before {
  background-image: url("../components/images/Atyaa.png");
  background-repeat: no-repeat;
}
input[type="radio"][value="angry"] + label:before {
  background-image: url("../components/images/Angry.png");
  background-repeat: no-repeat;
}
.daimei {
  padding-right: 3rem;
}
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.up {
  display: flex;
  flex-direction: row;
  padding-top: 3%;
}
.date {
  padding: 0;
  margin-right: 5%;
}
.emotions {
  padding-right: 10%;
}
</style>
