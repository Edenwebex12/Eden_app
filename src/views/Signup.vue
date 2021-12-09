<template>
  <div id="app" class="container mt-5">
    <h2>ユーザ登録画面</h2>
    <div class="row">
      <div class="col-sm-8">
        <form @submit.prevent="registerUser">
          <div class="form-group">
            <label for="email">メールアドレス:</label>
            <input
              type="email"
              class="form-control"
              id="email"
              v-model="email"
            />
          </div>
          <div class="form-group">
            <label for="name">ユーザー名:</label>
            <input type="text" class="form-control" id="name" v-model="name" />
          </div>
          <div class="form-group">
            <label for="password">パスワード:</label>
            <input
              type="password"
              class="form-control"
              id="password"
              v-model="password"
            />
          </div>
          <button type="submit" class="btn btn-info">登録</button>
          <router-link to="/Login">sign in now!!</router-link>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase"
export default {
  name: "Signup",
  data() {
    return {
      email: "",
      password: "",
      name: "",
      authenticatedUser: "",
    }
  },
  methods: {
    registerUser() {
      //   const newUser = {
      //     username: this.users.email,
      //     password: this.messages.password,
      // photo: this.messages.photo,
      //   }
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code
          var errorMessage = error.message
          console.log(errorCode)
          console.log(errorMessage)
        })
        window.location.href = '/Login'
      //   firebase
      //     .firestore()
      //     .collection("users")
      //     .doc(`${this.messages.email}`)
      //     .set(newUser)
    },
  },
  mounted() {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log("login")
        this.authenticatedUser = true
      } else {
        console.log("logout")
        this.authenticatedUser = false
      }
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.signup {
  margin-top: 20px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
input {
  margin: 10px 0;
  padding: 10px;
}
</style>
