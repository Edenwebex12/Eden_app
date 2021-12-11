<template>
  <div id="NavBar">
    <ul class="contents">
      <li class="content"><router-link to="/Mypage">TOP</router-link></li>
      <li class="content"><router-link to="/Form">POST</router-link></li>
      <li class="content">
        <router-link to="/" id="Logout" v-on:click="Logout">LOGOUT</router-link>
      </li>
    </ul>
  </div>
</template>

//
<script>
import firebase from "firebase"

export default {
  data() {
    return {
      user: this.user,
    }
  },
  methods: {
    Logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.user = null
        })
      window.location.href = "/"
    },
  },
}

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
</script>

<style>
#NavBar {
  padding-top: 0.1%;
  background-color: #b1221a;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-left: 0rem;
}

.contents {
  display: flex;
  list-style-type: none;
  flex-direction: row;
  justify-content: space-around;
  align-items: baseline;
  margin-right: 15%;
  box-sizing: 30%;
}
.content {
  padding-right: 40%;
  color: white;
  font-family: "Bahnschrift SemiLight";
}
#Logout {
  box-sizing: 20%;
}
</style>
