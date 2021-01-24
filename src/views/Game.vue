<template>
  <b-container id="game-screen" fluid>
    <div id="progress-bar-text">
      <h5 style="color: white;">
        {{ currentQuestion + 1 }} of {{ numQuestions }}
      </h5>
    </div>
    <b-progress
      id="progress-bar"
      variant="success"
      :value="currentQuestion + 1"
      :max="numQuestions"
      show-value
      class="mb-3"
    ></b-progress>
    <b-container id="quiz">
      <Question
        :question="questions[currentQuestion]"
        @answer-submitted="handleAnswerSubmitted"
      />
    </b-container>
  </b-container>
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
  computed: {
    numQuestions() {
      return this.questions.length;
    }
  },
  methods: {
    handleAnswerSubmitted(answer) {
      this.questions[this.currentQuestion].given_answer = answer;
      if (this.currentQuestion < this.questions.length - 1) {
        this.currentQuestion += 1;
        this.value += 1;
      } else {
        // Not a fantastic way to store state, but it works for such a small project
        this.$root.$data.questions = this.questions;

        this.$router.push("/results");
      }
    }
  }
};
</script>

<style>
#game-screen {
  height: 100vh;
  background-image: url("../assets/background-all.jpg");
  background-size: cover;
  background-position: center;
}
#progress-bar {
  width: 40%;
  margin: auto;
}

#progress-bar-text {
  padding-top: 1em;
  text-align: center;
}

#quiz {
  max-width: 50em;
  padding-top: 10vh;
}
</style>
