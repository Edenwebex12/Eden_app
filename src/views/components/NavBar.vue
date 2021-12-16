<template>
  <div id="NavBar">
    <ul class="contents">
      <li class="content"><router-link to="/Mypage">TOP</router-link></li>
      <li class="content"><router-link to="/Form">POST</router-link></li>
      <li class="content">
        <router-link to="/" id="Logout" v-on:click="Logout">LOGOUT</router-link>
      </li>
      <div id="menu">
        <div></div>
        <div></div>
        <div></div>
      </div>
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
  display: flex;
}
#Logout {
  box-sizing: 20%;
}

.menuIcon {
  display: none;
}

@media (max-width: 670px) {
  .menuIcon {
    display: flex;
  }
  .content {
    display: none;
  }
  .menu {
    position: relative;
    height: 90%;
    width: 10%;
    display: flex;
    justify-content: flex-end;
    box-sizing: border-box;
  }

  .menu div {
    position: absolute;
    left: 0;
    height: 30%;
    width: 80%;
    color: white;
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    box-sizing: border-box;
  }

  .menu div:nth-of-type(1) {
    bottom: 10%;
  }
  .menu div:nth-of-type(2) {
    bottom: 5%;
  }
  .menu div:nth-of-type(3) {
    bottom: 0%;
  }
}
</style>
