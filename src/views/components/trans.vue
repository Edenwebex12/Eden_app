<template>
  <form @submit.prevent="addPost" class="main">
    <div>
      <input
        type="text"
        class="title"
        name="date"
        size="15"
        placeholder="2021 / 12 / 2"
        v-model="date"
      />
    </div>
    <div>
      <label class="daimei">題名</label>
      <label>画像アップロード</label><br />
      <input type="text" class="title" name="title" size="40" v-model="title" />
      <input type="file" class="add" value="追加" />
    </div>
    ※本文<br />
    <textarea
      name="kanso"
      class="text"
      rows="10"
      cols="80"
      v-model="text"
    ></textarea>
    <div>
      <button @click="addInputPost" class="submit">投稿</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      inputForm: {},
    }
  },
  methods: {
    addInputPost() {
      this.$emit("input-form", this.date)
      this.date = ""
      this.$emit("input-form", this.title)
      this.title = ""
      this.$emit("input-form", this.text)
      this.text = ""
    },
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
.daimei {
  padding-right: 2%;
}
</style>
