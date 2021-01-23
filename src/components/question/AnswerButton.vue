<template>
  <b-button id="answer-button" @click="onAnswerClicked">{{ answer }}</b-button>
</template>

<script>
export default {
  props: {
    answer: {
      type: String,
      required: true,
      default: "Answer"
    }
  },
  methods: {
    onAnswerClicked() {
      this.$emit("answer-clicked", this.answer);
    }
  }
};
</script>

<style>
.answer-button {
  margin: 10px;
}
</style>
