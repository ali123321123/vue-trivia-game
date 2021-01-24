<template>
<div id="questions-component">
  <div class="progress-bar-text">
    <h5  style="color: white;">{{value}} of 10</h5>
  </div>
    <b-progress id="progress-bar" variant="success" :value="value" :max="max" show-value class="mb-3"></b-progress>
  <div id="quiz"> 
    <Question  
      :question="questions[currentQuestion]"
      @answer-submitted="handleAnswerSubmitted"
    />
  </div>
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
      currentQuestion: 0,
       value: 0,
        max: 10
    };
  },
  created() {
    fetchQuestions().then(questions => (this.questions = questions));
  },
  methods: {
    handleAnswerSubmitted(answer) {
      this.questions[this.currentQuestion].given_answer = answer;
      if (this.currentQuestion < this.questions.length - 1) {
        this.currentQuestion += 1;
        this.value +=1
      } else {
        // Not a fantastic way to store state, but it works for such a small project
        this.$root.$data.questions = this.questions;

        this.$router.push("/results");
      }
    }
  }
};
</script>

<style >
#quiz {
  margin: auto;
 
  width: 60%;
  padding: 10em;
  
}
#questions-component{
   height: 100vh;
   
  background-image: url('../assets/background-all.jpg')
}
#progress-bar {
  width: 40%;
  margin: auto;
}
.progress-bar-text{
   text-align: center;
}

</style>
