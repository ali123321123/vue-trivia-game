<template>
  <b-list-group-item id="answer-button" @click="onAnswerClicked">{{ answer }}</b-list-group-item>
</template>

<script>
export default {
  props: {
    answer: {
      type: String,
      required: true,
      default: "Answer"
    },
    index: {
      type: Number,
      required: true,
      default: 0
    }
  },
  methods: {
    onAnswerClicked() {
      this.$emit("answer-clicked", this.answer, this.index);
    }
  }
};
</script>
