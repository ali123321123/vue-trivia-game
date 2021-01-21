<template>
  <div>
    <p>{{ question.question }}</p>
    <AnswerButton :answer="question.correct_answer" />
    <AnswerButton
      v-for="answer in question.incorrect_answers"
      :key="answer.id"
      :answer="answer"
    />
  </div>
</template>

<script>
import AnswerButton from "./AnswerButton";

export default {
  components: {
    AnswerButton
  },
  props: {
    question: {
      type: Object,
      required: true,
      default: function() {
        return {
          question: "",
          correct_answer: "",
          incorrect_answers: []
        };
      }
    }
  },
  methods: {
    onAnswerClicked() {
      this.$emit("answer-clicked", this.question.answer);
    }
  }
};
</script>

<style></style>
