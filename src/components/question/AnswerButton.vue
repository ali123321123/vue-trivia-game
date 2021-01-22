<template>
  <b-button id="answer-button">{{ answer }}</b-button>
</template>

<script>
export default {
  props: {
    answer: {
      type: String,
      required: true,
      default: "Answer"
    }
  }
};
</script>

<style>
.answer-button {
  margin: 10px;
}
</style>
