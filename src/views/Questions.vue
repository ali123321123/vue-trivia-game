<template>
  <div id="quiz">
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
    handleAnswerSubmitted(isCorrect) {
      this.questions[this.currentQuestion].answered_correctly = isCorrect;
      if (this.currentQuestion < this.questions.length - 1) {
        this.currentQuestion += 1;
      } else {
        this.$router.push("/results");
      }
    }
  }
};
</script>

<style>
#quiz {
  margin: auto;
  margin-top: 10em;
  width: 50%;
  border: 3px solid green;
  padding: 50px;
}
</style>
