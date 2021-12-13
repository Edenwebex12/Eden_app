<template>
  <div class="login">
    <img id="logo" src="../assets/diaryロゴ.jpg" />
    <div class="log_h2">今日の気持ちや思い出を残そう！</div>
    <div class="log_h1">えもDairy</div>
    <button id="in_button" v-on:click="Login">はじめる</button>
  </div>
</template>

<script>
import firebase from "firebase"

export default {
  name: "PreLogin",
  data() {
    return {
      result: {},
    }
  },
  methods: {
    Login() {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          const userData = {
            id: result.user.uid,
            name: result.additionalUserInfo.profile.given_name,
            email: result.additionalUserInfo.profile.email,
            sex: "",
          }
          console.log(result.user.uid)
          firebase
            .firestore()
            .collection("users")
            .doc(userData.id)
            .set(userData)
          this.$router.push("/Mypage")
        })
    },
  },

  // import firebase from "firebase"
  // export default {
  //   data() {
  //     return {
  //       email: "",
  //       password: "",
  //     }
  //   },
  //   methods: {
  //     logoutUser() {
  //       firebase.auth().signOut()
  //       console.log("logout")
  //       window.location.href = "/Login"
  //     },
  //   },
  // }
  //
}
</script>
<style>
.log_h2 {
  font-size: 15px;
  color: #525252;
  margin-top: 10px;
}
.log_h1 {
  font-size: 40px;
  color: #525252;
  font-weight: bold;
  margin-top: -8px;
}

#logo {
  height: 180px;
}

.login {
  text-align: center;
  font-family: "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", sans-serif;
}
#in_button {
  height: 30px;
  width: 90px;
  font-size: 12px;
  border: none;
  border-bottom: 2px solid #cfcfcf;
  margin-top: 30px;
}
</style>
