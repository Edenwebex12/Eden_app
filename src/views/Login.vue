<template>
  <div id="app" class="container mt-5">
    <div class="row">
      <div class="col-sm-6">
        <h2>ログイン画面</h2>
        <form @submit.prevent="loginUser">
          <div class="form-group">
            <label for="loginEmail">メールアドレス:</label>
            <input
              type="loginEmail"
              class="form-control"
              id="loginEmail"
              v-model="loginEmail"
            />
          </div>
          <div class="form-group">
            <label for="loginPassword">パスワード:</label>
            <input
              type="password"
              class="form-control"
              id="loginPassword"
              v-model="loginPassword"
            />
          </div>
          <button type="submit" class="btn btn-info">ログインする</button>
          <router-link to="/Signup">create account now!!</router-link>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase"
export default {
  name: "Signin",
  data() {
    return {
      // email: "",
      // password: "",
      loginEmail: "",
      loginPassword: "",
    }
  },
  methods: {
    loginUser() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.loginEmail, this.loginPassword)
        .catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code
          var errorMessage = error.message
          console.log(errorCode)
          console.log(errorMessage)
        })
      firebase
        .firestore()
        .collection("users")
        .doc("name")
        .get()
        .then(function (doc) {
          if (doc) {
            // do something
            // doc.data() でデータを取得
          } else {
            console.log("No user")
          }
        })
        .catch(function (error) {
          console.log("Error : ", error)
        })
      window.location.href = "/"
    },
  },
  mounted() {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log("login")
      } else {
        console.log("logout")
      }
    })
  },
}
</script>
