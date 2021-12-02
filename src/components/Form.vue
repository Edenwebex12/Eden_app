<template>
  <div id="main">
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
        <input type="text" class="textlines" name="date" size="40" />
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
<style></style>
