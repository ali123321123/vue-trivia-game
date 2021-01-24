<template>
  <div id="result-page">
    <div id="result-text-view">
    <h1  class="result-text">Results</h1>
    <h2 class="result-text">Score: {{ score }}<i class="fas fa-coins"></i></h2>
   </div>
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

<style>
#result-page{
background-image: url("../assets/background-all.jpg");
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif ;
font-weight: 600;
}
#result-text-view{
  text-align: center;
vertical-align: middle;
line-height: 90px;
}
.result-text{
  color: aliceblue;
}
.fa-coins{
  color: rgb(255, 227, 113);
 padding-left: 8px;
 
}
</style>
