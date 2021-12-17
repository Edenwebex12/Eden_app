<template>
  <div id="NavBar">
    <input id="nav-input" type="checkbox" class="nav-hidden" />
    <label id="menubtn" for="nav-input"></label>
    <ul class="contents">
      <li class="content"><router-link to="/Mypage">TOP</router-link></li>
      <li class="content"><router-link to="/Form">POST</router-link></li>
      <li class="content">
        <router-link to="/" id="Logout" v-on:click="Logout">LOGOUT</router-link>
      </li>
    </ul>
    <div class="hamburgermenu">
      <button type="button" class="menu-btn" v-on:click="open = !open">
        <div class="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      <div class="menu" v-bind:class="{ 'is-active': open }">
        <li class="menu__item"><router-link to="/Mypage">TOP</router-link></li>
        <li class="menu__item"><router-link to="/Form">POST</router-link></li>
        <li class="menu__item">
          <router-link to="/" id="Logout" v-on:click="Logout"
            >LOGOUT</router-link
          >
        </li>
      </div>
    </div>
  </div>
</template>

//
<script>
import firebase from "firebase"

export default {
  data() {
    return {
      user: this.user,
      open: false,
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

#menubtn img {
  width: 100%;
  max-width: 50px;
}
.w1000 {
  max-width: 1000px;
  margin: 0 auto;
}
nav {
  background-color: #ccc;
  padding: 20px 3%;
}

.nav-hidden {
  display: none;
}
.hamburgermenu {
  display: none;
}

@media (max-width: 670px) {
  .content {
    display: none;
  }
  .hamburgermenu {
    display: flex;
  }
  /*ハンバーガーボタン*/
  .hamburger {
    display: block;
    position: fixed;
    z-index: 3;
    right: 13px;
    top: 12px;
    width: 42px;
    height: 42px;
    cursor: pointer;
    text-align: center;
  }
  .hamburger span {
    display: block;
    position: absolute;
    width: 30px;
    height: 2px;
    left: 6px;
    background: white;
    -webkit-transition: 0.3s ease-in-out;
    -moz-transition: 0.3s ease-in-out;
    transition: 0.3s ease-in-out;
  }
  .hamburger span:nth-child(1) {
    top: 10px;
  }
  .hamburger span:nth-child(2) {
    top: 20px;
  }
  .hamburger span:nth-child(3) {
    top: 30px;
  }

  /* ナビ開いてる時のボタン */
  .hamburger.active span:nth-child(1) {
    top: 16px;
    left: 6px;
    background: #fff;
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  .hamburger.active span:nth-child(2),
  .hamburger.active span:nth-child(3) {
    top: 16px;
    background: #fff;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  /*ハンバーガーボタン*/
  .menu-btn {
    position: fixed;
    top: 15px;
    right: 15px;
    z-index: 3;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #b1221a;
  }

  /*----------------------------
* メニュー本体
*----------------------------*/
  .menu {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #fff3b8;
  }
  .menu__item {
    list-style-type: none;
    width: 100%;
    height: auto;
    padding: 0.5em 1em;
    text-align: center;
    color: #fff;
    box-sizing: border-box;
  }

  /*----------------------------
* アニメーション部分
*----------------------------*/

  /* アニメーション前のメニューの状態 */
  .menu {
    transform: translateX(100vw);
    transition: all 0.3s linear;
  }
  /* アニメーション後のメニューの状態 */
  .menu.is-active {
    transform: translateX(0);
  }
}
</style>
