<template>
  <div id="NavBar">
    <ul class="contents">
      <li class="content"><router-link to="/">TOP</router-link></li>
      <li class="content"><router-link to="/Form">POST</router-link></li>
      <li class="content">
        <router-link to="/Schedule">SCHEDULE</router-link>
        <button class="btn btn-primary mb-3" @click="logoutUser">
          ログアウト
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import firebase from "firebase"
export default {
  data() {
    return {
      email: "",
      password: "",
    }
  },
  methods: {
    logoutUser() {
      firebase.auth().signOut()
      console.log("logout")
      window.location.href = "/Login"
    },
  },
}
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
</style>
