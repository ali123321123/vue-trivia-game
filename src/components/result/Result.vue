<template>
  <div
    :class="[
      'result-view',
      question.given_answer === question.correct_answer ? 'win' : 'fail'
    ]"
  >
    <p>{{ question.question }}</p>

    <span class="answer">Correct answer: </span>
    <span>{{ question.correct_answer }}</span>
    <span class="answer"> - Your answer: </span>
    <span>{{ question.given_answer }}</span>
  </div>
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
  margin: 0 auto;
  width: 74%;
  border-bottom: 1px solid;
  text-align: center;
  vertical-align: middle;
  line-height: 90px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-weight: 600;
}

.answer {
  color: rgb(98, 0, 255);
}
</style>
