<template>
  <div class="emotions">
    <div class="emoTop">
      <input
        type="radio"
        name="emotionSelect"
        value="happy"
        id="emotionHappy"
        v-model="emo"
        placeholder=""
        checked
      /><label for="emotionHappy" />
      <input
        type="radio"
        name="emotionSelect"
        value="asease"
        id="emotionAsease"
        v-model="emo"
        placeholder=""
      /><label for="emotionAsease" />
      <input
        type="radio"
        name="emotionSelect"
        value="cry"
        id="emotionCry"
        v-model="emo"
        placeholder=""
      /><label for="emotionCry" />
    </div>
    <div class="emoBottom">
      <input
        type="radio"
        name="emotionSelect"
        value="wink"
        id="emotionWink"
        v-model="emo"
        placeholder=""
      /><label for="emotionWink" />
      <input
        type="radio"
        name="emotionSelect"
        value="atyaa"
        id="emotionAtyaa"
        v-model="emo"
        placeholder=""
      /><label for="emotionAtyaa" />
      <input
        type="radio"
        name="emotionSelect"
        value="angry"
        id="emotionAngry"
        v-model="emo"
        placeholder=""
      /><label for="emotionAngry" />
    </div>
  </div>
</template>

<script>
export default {
  name: "emotion",
  data: function () {
    return { emoData: "" }
  },
  methods: {
    emotion() {
      this.$emit("emoselect", this.emoData)
    },
  },
  computed: {
    emo: {
      get() {
        return this.emoData
      },
      set(value) {
        this.emoData = value
        this.emotion()
      },
    },
  },
}
</script>
