<template>
  <div>
    <h1>Questions</h1>

    <Question
      :question="questions[currentQuestion]"
      @answer-submitted="handleAnswerSubmitted"
    />
  </div>
</template>

<script>
import { fetchQuestions } from "../api/questions";
import Question from "../components/question/Question";

export default {
  components: {
    Question
  },
  data() {
    return {
      questions: [],
      currentQuestion: 0
    };
  },
  created() {
    fetchQuestions().then(questions => (this.questions = questions));
  },
  methods: {
    handleAnswerSubmitted(correct) {
      this.questions[this.currentQuestion].answered_correctly = correct;
      if (this.currentQuestion < this.questions.length - 1) {
        this.currentQuestion += 1;
      } else {
        this.$router.push("/results");
      }
    }
  }
};
</script>

<style></style>
