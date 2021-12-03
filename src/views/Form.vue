<template>
  <div id="main">
    <div class="title"><h2>投稿フォーム</h2></div>
    <div><NavBar /></div>
    <form action="./formSmple2.php" method="post">
      <p>
        <input
          type="text"
          class="textlines"
          name="date"
          size="15"
          placeholder="2021 / 12 / 2"
        />
      </p>
      <p>
        題名画像アップロード<br />
        <input type="text" class="textlines" name="textlines_title" size="40" />
        <input type="file" class="add" value="追加" />
      </p>
      ※本文<br />
      <textarea
        name="kanso"
        class="textlines_honbun"
        rows="10"
        cols="80"
      ></textarea>
      <p>
        <input type="submit" class="submit" value="投稿" />
      </p>
    </form>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue"

export default {
  components: {
    NavBar,
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
.title {
  display: flex;
  justify-content: flex-start;
  padding-left: 10%;
}
</style>
