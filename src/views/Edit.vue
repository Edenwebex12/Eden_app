<template>
  <div class="forms">
    <div class="pagetitle"><h2>投稿フォーム</h2></div>
    <div><NavBar /></div>
    <div class="form">
      <div class="forms">
        <div class="form">
          <div class="up">
            <input
              type="date"
              class="date"
              name="date"
              size="15"
              v-model="messages.date"
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
          <div class="middle">
            <div class="PageTitle">
              <div class="daimei">題名</div>
              <input
                type="text"
                class="title"
                id="title"
                name="title"
                size="40"
                v-model="messages.title"
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
                v-model="messages.text"
                placeholder=""
              ></textarea>
            </div>
          </div>
        </div>
        <div class="moreBottom">
          <div class="button">
            <button v-on:click="editPost" class="submit">編集</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase"
import NavBar from "@/views/components/NavBar.vue"
export const storage = firebase.storage()
// import database2 from "@/views/components/database2.vue"
export default {
  props: {
    // params: {
    id: { type: String },
    // },
  },
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
        author: firebase.auth().currentUser.uid,
        disabled: false,
        file: "",
        image: "",
      },
    }
  },
  methods: {
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
          return firebase
            .firestore()
            .collection("images")
            .doc(this.id)
            .update(this.messages)
        })
        .then(() => {
          this.comment = "アップロード完了！"
          setTimeout(() => {
            this.disabled = false
          }, 1000)
        })
    },
    // editpage(message) {
    //   return {
    //     message: message,
    //   }
    // },
    editPost() {
      //   let storageRef = firebase
      //     .storage()
      //     .ref()
      //     .child("tmp/" + this.messages.photo.name)
      //   storageRef.put(this.messages.photo)
      // const post = {
      //   date: this.messages.date,
      //   title: this.messages.title,
      //   emotion: this.messages.emotion,
      //   text: this.messages.text,
      // photo: this.messages.photo,
      // }
      if (this.messages.text === "") {
        alert("本文を投稿してください")
      } else {
        firebase
          .firestore()
          .collection("messages")
          .doc(this.id)
          .update(this.messages)
        window.location.href = "/Mypage"
      }
    },
  },
  created() {
    console.log(this.id)
    firebase
      .firestore()
      .collection("messages")
      .doc(this.id)
      .get()
      .then((snapshot) => {
        // this.messages = snapshot
        console.log(snapshot.data())
        this.messages.date = snapshot.data().date
        this.messages.title = snapshot.data().title
        this.messages.emotion = snapshot.data().emotion
        this.messages.text = snapshot.data().text
        this.messages.image = snapshot.data().image
      })
  },
}
</script>

<style>
.pagetitle {
  margin-left: 5%;
}
.All {
  display: flex;
  align-items: center;
}

input[type="radio"] + label:before {
  content: "";
  display: inline-block;
  background-size: contain;
  width: 2rem;
  height: 2rem;
}
input[type="radio"][value="happy"] + label:before {
  background-image: url("../views/components/images/Happy.png");
  background-repeat: no-repeat;
}
input[type="radio"][value="asease"] + label:before {
  background-image: url("../views/components/images/Asease.png");
  background-repeat: no-repeat;
}
input[type="radio"][value="cry"] + label:before {
  background-image: url("../views/components/images/Cry.png");
  background-repeat: no-repeat;
}
input[type="radio"][value="wink"] + label:before {
  background-image: url("../views/components/images/Wink.png");
  background-repeat: no-repeat;
}
input[type="radio"][value="atyaa"] + label:before {
  background-image: url("../views/components/images/Atyaa.png");
  background-repeat: no-repeat;
}
input[type="radio"][value="angry"] + label:before {
  background-image: url("../views/components/images/Angry.png");
  background-repeat: no-repeat;
}

.daimei {
  padding-right: 3rem;
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10%;
}

.up {
  display: flex;
  flex-direction: row;
  width: 60%;
  margin-top: 5%;
  margin-left: 8%;
}
.date {
  height: 10%;
  width: 50%;
  margin-left: 10%;
}
.emotions {
  height: 5%;
  width: 100%;
  margin-left: 10%;
}
.PageTitle {
  margin-left: 20%;
  width: 70%;
}
.fileUp {
  margin-left: 10%;
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
  margin-left: 5%;
  margin-bottom: 4%;
  width: 40%;
}

.hissukoumoku {
  margin-left: 5%;
}

.honbun {
  margin-left: 8%;
}
.text {
  resize: none;
  width: 70%;
  height: 60%;
  margin-left: 8%;
}

.moreBottom {
  display: flex;
  align-items: flex-start;
  margin-left: 21%;
}

.button {
  width: 100%;
}
</style>
