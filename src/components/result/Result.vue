<template>
  <b-container
    :class="[
      'result-view',
      question.given_answer === question.correct_answer ? 'win' : 'fail'
    ]"
    fluid="md"
  >
    <p>{{ question.question }}</p>

    <span class="answer">Correct answer: </span>
    <span>{{ question.correct_answer }}</span>
    <span class="answer"> - Your answer: </span>
    <span>{{ question.given_answer }}</span>
  </b-container>
</template>

<script>
export default {
  props: {
    question: {
      type: Object,
      required: true,
      default: function() {
        return {
          question: ""
        };
      }
    }
  }
};
</script>

<style>
.win {
  background: aquamarine;
}

.fail {
  background: pink;
}

.result-view {
  padding: 1em;
  border-bottom: 1px solid;
  text-align: center;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-weight: 600;
}

.answer {
  color: rgb(98, 0, 255);
}
</style>
