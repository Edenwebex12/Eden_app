<template>
  <button id="Login" v-on:click="Login">ログイン</button>
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
