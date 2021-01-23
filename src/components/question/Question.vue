<template>
  <div>
    <p>{{ question.question }}</p>
    <AnswerButton
      :answer="question.correct_answer"
      @answer-clicked="handleAnswerClicked"
    />
    <AnswerButton
      v-for="answer in question.incorrect_answers"
      :key="answer.id"
      :answer="answer"
      @answer-clicked="handleAnswerClicked"
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
    handleAnswerClicked(answer) {
      if (answer === this.question.correct_answer) {
        this.$emit("answer-submitted", true);
      } else {
        this.$emit("answer-submitted", false);
      }
    }
  }
};
</script>

<style></style>
