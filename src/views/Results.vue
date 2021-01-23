<template>
  <div>
    <h1>Results</h1>
    <h2>Score: {{ score }}</h2>

    <Result
      v-for="question in questions"
      :key="question.id"
      :question="question"
    />
  </div>
</template>

<script>
import Result from "../components/result/Result";

export default {
  components: {
    Result
  },
  data() {
    return {
      questions: this.$root.$data.questions
    };
  },
  computed: {
    score() {
      if (this.questions !== undefined) {
        let score = 0;
        for (const question of this.questions) {
          if (question.given_answer === question.correct_answer) {
            score += 10;
          }
        }
        return score;
      }
      return null;
    }
  }
};
</script>

<style></style>
