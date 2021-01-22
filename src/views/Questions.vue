<template>
  <div>
    <h1>Questions</h1>

    <Question :question="questions[0]" />
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
      questions: []
    };
  },
  created() {
    fetchQuestions().then(questions => (this.questions = questions));
  }
};
</script>

<style></style>
