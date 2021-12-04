<template>
  <div id="main">
    <div class="title"><h2>投稿フォーム</h2></div>
    <div><NavBar /></div>
    <Posts class="form">
      <div>
        <input
          type="text"
          class="textlines"
          name="date"
          size="15"
          placeholder="2021 / 12 / 2"
        />
      </div>
      <div>
        題名画像アップロード<br />
        <input type="text" class="textlines" name="textlines_title" size="40" />
        <input type="file" class="add" value="追加" />
      </div>
      ※本文<br />
      <textarea
        name="kanso"
        class="textlines_honbun"
        rows="10"
        cols="80"
      ></textarea>
      <div>
        <input type="submit" class="submit" value="投稿" />
      </div>
    </Posts>
  </div>
</template>

<script>
import NavBar from "@/views/components/NavBar.vue"
import Posts from "@/views/components/Posts.vue"

export default {
  components: {
    NavBar,
    Posts,
  },
  data() {
    return {
      date: this.textlines.date,
      title: this.textlines_title,

      id: 1,
      number: 10,
      name: "山田太郎",
    }
  },
}
</script>

<style>
.form {
  display: flex;
  flex-direction: column;
  text-align: center;
}
.title {
  display: flex;
  justify-content: flex-start;
  padding-left: 10%;
}
</style>
