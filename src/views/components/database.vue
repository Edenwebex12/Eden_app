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
            v-model="date"
            placeholder=""
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
        </div>
        <div class="middle">
          <label class="daimei">題名</label><br /><input
            type="text"
            class="title"
            id="title"
            name="title"
            size="40"
            v-model="title"
            placeholder=""
          />
          <!-- <label class="namae">ニックネーム</label><br /><input
            type="text"
            class="name"
            id="name"
            name="name"
            size="40"
            v-model="messages.name"
            placeholder=""
          />
          <label class="password">パスワード</label><br /><input
            type="password"
            class="pass"
            id="pass"
            name="pass"
            size="40"
            v-model="messages.pass"
            placeholder=""
          />
        </div> -->
          <!-- <input
            type="file"
            multiple
            id="image"
            accept=".jpg, .jpeg, .png, .svg, .gif"
            @change="uploadImage"
          /> -->
          <!-- <v-file-input
            small-chips
            label="プロフィール画像"
            ref="fileInput"
            v-model="hoge"
            @change="changeMethod"
          /> -->
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
          <input
            type="file"
            id="avatar_name"
            accept="image/jpeg, image/png"
            @change="onImageChange"
          />
          <div class="bottom">
            <div><span>※</span>本文</div>
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
          <div class="button">
            <button v-on:click="addMessage" class="submit">投稿</button>
          </div>
        </div>
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
      // messages: {
      //   date: "",
      //   title: "",
      //   emotion: "",
      //   text: "",
      // },
      date: "",
      title: "",
      emotion: "",
      text: "",
      author: firebase.auth().currentUser.uid,
    }
  },
  methods: {
    // addFile: function (e) {
    //   e.preventDefault()
    //   let files = e.target.files
    //   this.messages.photo = files[0]
    // },
    addMessage() {
      if (this.text === "") {
        alert("本文を投稿してください")
        return
      }
      firebase
        .firestore()
        .collection("messages")
        .doc(`${this.date}${this.emotion}${this.title}${this.author}`)
        .set({
          date: this.date,
          emotion: this.emotion,
          title: this.title,
          text: this.text,
          author: firebase.auth().currentUser.uid,
        })
      this.date = ""
      this.emotion = ""
      this.title = ""
      this.text = ""
      //   const message = {
      //     date: this.date,
      //     emotion: this.emotion,
      //     title: this.title,
      //     text: this.text,
      //   }
      //   this.messages.push(message)
      //   firebase.firestore().collection("users").add({
      //     messages: this.messages,
      //   })
      //   this.date = ""
      //   this.emotion = ""
      //   this.title = ""
      //   this.text = ""
      // },
      // selectEmotion(emo) {
      //   this.emotion = emo
      // }
      // firebase.firestore.collection("messages").add({
      //   date: (this.date = ""),
      //   emotion: (this.emotion = ""),
      //   title: (this.title = ""),
      //   text: (this.text = ""),
      // })
      // sendPost() {
      //   //   let storageRef = firebase
      //   //     .storage()
      //   //     .ref()
      //   //     .child("tmp/" + this.messages.photo.name)
      //   //   storageRef.put(this.messages.photo)
      //   const post = {
      // this.date = ""
      // this.emotion = ""
      // this.title = ""
      // this.text = ""
      //     // photo: this.messages.photo,
      //   }
      //   if (this.messages.text === "") {
      //     alert("本文を投稿してください")
      //   } else {
      //     firebase
      //       .firestore()
      //       .collection("messages")
      //       .doc(`${this.messages.date} + ${this.messages.title} `)
      //       .set(post)
      //     location.reload()
      //   }
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
    // place() {
    //   const date = document.getElementById("date")
    //   const title = document.getElementById("title")
    //   const text = document.getElementById("text")
    //   date.placeholder = this.editpage.message.date
    //   title.placeholder = this.editpage.message.title
    //   text.placeholder = this.editpage.message.text
    // },
    // },
    // mounted: function () {
    //   if (this.editpage) {
    //     this.place()
    //   }
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
