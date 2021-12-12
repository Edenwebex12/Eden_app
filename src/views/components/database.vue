<template>
  <div class="forms">
    <div class="form">
      <div class="up">
        <input
          type="date"
          class="date"
          name="date"
          size="15"
          v-model="date"
          placeholder=""
          id="date"
        />
        <div class="emotions">
          <div class="emoTop">
            <input
              type="radio"
              name="emotionSelect"
              value="happy"
              id="emotionHappy"
              v-model="emotion"
              placeholder=""
              checked
            /><label for="emotionHappy" />
            <input
              type="radio"
              name="emotionSelect"
              value="asease"
              id="emotionAsease"
              v-model="emotion"
              placeholder=""
            /><label for="emotionAsease" />
            <input
              type="radio"
              name="emotionSelect"
              value="cry"
              id="emotionCry"
              v-model="emotion"
              placeholder=""
            /><label for="emotionCry" />
          </div>
          <div class="emoBottom">
            <input
              type="radio"
              name="emotionSelect"
              value="wink"
              id="emotionWink"
              v-model="emotion"
              placeholder=""
            /><label for="emotionWink" />
            <input
              type="radio"
              name="emotionSelect"
              value="atyaa"
              id="emotionAtyaa"
              v-model="emotion"
              placeholder=""
            /><label for="emotionAtyaa" />
            <input
              type="radio"
              name="emotionSelect"
              value="angry"
              id="emotionAngry"
              v-model="emotion"
              placeholder=""
            /><label for="emotionAngry" />
          </div>
        </div>
      </div>
      <div class="middle">
        <div class="PageTitle">
          <div class="daimei">題名</div>
          <input
            type="text"
            class="title"
            id="title"
            name="title"
            size="40"
            v-model="title"
            placeholder=""
          />
        </div>
        <div class="fileUp">
          <div class="imageUpload">画像アップロード</div>
          <input
            class="file"
            type="file"
            accept="image/*"
            :disabled="disabled"
            @change="onFileChange"
          />
        </div>
      </div>
      <div class="bottom">
        <div class="hissukoumoku">
          <div class="honbun">※本文</div>
          <textarea
            name="kanso"
            class="text"
            id="text"
            rows="10"
            cols="80"
            v-model="text"
            placeholder=""
          ></textarea>
        </div>
      </div>
    </div>
    <div class="moreBottom">
      <div class="button">
        <button v-on:click="addMessage" class="submit">投稿</button>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase"
// import emotionSelect from "@/views/components/emotionSelect/emotionSelect"

export const storage = firebase.storage()
export default {
  // components: {
  //   emotionSelect,
  // },
  data() {
    return {
      date: "",
      title: "",
      emotion: "",
      text: "",
      author: firebase.auth().currentUser.uid,
      disabled: false,
      file: "",
      image: "",
    }
  },
  methods: {
    // addFile: function (e) {
    //   e.preventDefault()
    //   let files = e.target.files
    //   this.messages.photo = files[0]
    // },
    onFileChange(e) {
      this.file = e.target.files[0]
      this.upload(this.file)
    },
    upload(file) {
      this.disabled = true
      // ref は reference の略。データの在り処＝住所を表すイメージ。
      const storageRef = storage.ref()
      // 同じ名前のファイルと区別できるように timestamp を追加して、ユニークなファイル名をつける
      const createdAt = new Date()
      const timestamp = createdAt.getTime()
      const uniqueFileName = timestamp + "_" + this.file.name
      const fileRef = storageRef.child("images/" + uniqueFileName)
      // fileRef の場所に file を送る。 put は "置き換える" の意味。
      // uploadTask.on("state_changed", ...) を使う方法もあるが、ひとまず then で実装する
      fileRef
        .put(file)
        .then(() => fileRef.getDownloadURL())
        // 上の then のなかで snapshot.getDownloadURL().then(...) と書いてもいいが、
        // then で続けられるやつを return すると、外側に then を続けることができ、よみやすい
        // 例 fetch(...).then(res => res.json()).then(...)
        .then((url) => {
          // storage にアップロードしたファイルに対応するドキュメントを保存する
          this.image = {
            name: file.name,
            url,
            createdAt,
          }
          return firebase.firestore().collection("images").add(this.image)
        })
        .then(() => {
          this.comment = "アップロード完了！"
          setTimeout(() => {
            this.disabled = false
          }, 1000)
        })
    },
    addMessage() {
      if (this.text === "") {
        alert("本文を投稿してください")
        return
      }
      firebase.firestore().collection("messages").add({
        date: this.date,
        emotion: this.emotion,
        title: this.title,
        text: this.text,
        author: firebase.auth().currentUser.uid,
        image: this.image,
      })
      this.date = ""
      this.emotion = ""
      this.title = ""
      this.text = ""
      this.image = ""
      window.location.href = "/Mypage"
    },
    // uploadImage(file, ID) {
    //   const URL = `eden-firebase.appspot.com/${ID}`
    // },
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
  justify-content: flex-start;
}

.up {
  display: flex;
  flex-direction: row;
  width: 40%;
}
.date {
  height: 10%;
  width: 75%;
  margin-left: 7.5%;
}
.emotions {
  height: 10%;
  width: 90%;
  margin-left: 25%;
}
.PageTitle {
  margin-left: 3%;
  width: 70%;
}
.fileUp {
  margin-left: 10%;
}
.imageUpload {
  margin-left: 5%;
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

.middle {
  display: flex;
  padding: 0;
  margin-top: 2%;
}

.hissukoumoku {
  margin-left: 6%;
}

.moreBottom {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 32.5%;
}
.button {
  width: 100%;
}
</style>
