<template>
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
            <emotionSelect2 :emo="messages.emotion" />
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
</template>

<script>
import firebase from "firebase"
import emotionSelect2 from "@/views/components/emotionSelect/emotionSelect"

export const storage = firebase.storage()
export default {
  props: ["message"],
  components: {
    emotionSelect2,
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
        firebase
          .firestore()
          .collection("messages")
          .doc(`${post.date} + ${post.title}`)
          .update(this.messages)
        location.reload()
      }
    },
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
  //   place() {
  //     const date = document.getElementById("date")
  //     const title = document.getElementById("title")
  //     const text = document.getElementById("text")
  //     date.placeholder = this.editpage.message.date
  //     title.placeholder = this.editpage.message.title
  //     text.placeholder = this.editpage.message.text
  //   },
  // },
  // mounted: function () {
  //   if (this.editpage) {
  //     this.place()
  //   }
  // },
  created() {
    console.log(this.message.text)
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

.forms {
  width: 100%;
}
.form {
  display: flex;
  flex-direction: column;
  box-sizing: 50%;
  margin-top: 5%;
}

.up {
  display: flex;
  flex-direction: row;
  padding-top: 3%;
}
.date {
  height: 10%;
  margin-right: 5%;
}
.emotions {
  height: 10%;
  width: 100%;
}

.title {
  margin-bottom: 5%;
}

span {
  color: #b1221a;
}

.button {
  margin-top: 3%;
}

.submit {
  width: 10%;
  background-color: whitesmoke;
  border: outset;
}
</style>
