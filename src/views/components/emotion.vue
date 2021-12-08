<template>
  <div class="emotion">
    <div v-if="emochan(emo) === 1">
      <img src="@/views/components/images/Happy.png" />
    </div>
    <div v-else-if="emochan(emo) === 2">
      <img src="@/views/components/images/Asease.png" />
    </div>
    <div v-else-if="emochan(emo) === 3">
      <img src="@/views/components/images/Cry.png" />
    </div>
    <div v-else-if="emochan(emo) === 4">
      <img src="@/views/components/images/Wink.png" />
    </div>
    <div v-else-if="emochan(emo) === 5">
      <img src="@/views/components/images/Atyaa.png" />
    </div>
    <div v-else-if="emochan(emo) === 6">
      <img src="@/views/components/images/Angry.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: "emotion",
  props: ["emo"],
  methods: {
    emochan(emotion) {
      if (emotion === "happy") {
        return 1
      } else if (emotion === "asease") {
        return 2
      } else if (emotion === "cry") {
        return 3
      } else if (emotion === "wink") {
        return 4
      } else if (emotion === "atyaa") {
        return 5
      } else if (emotion === "angry") {
        return 6
      } else {
        return 0
      }
    },
  },
}
</script>
