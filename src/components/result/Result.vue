<template>
  <div
    :class="[
      'result-view',
      question.given_answer === question.correct_answer ? 'win' : 'fail'
    ]"
  >
    <p>{{ question.question }}</p>

    <span>Correct answer: </span>
    <span>{{ question.correct_answer }}</span>
    <span> - Your answer: </span>
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
  padding: 1em;
  border-bottom: 1px solid;
}
</style>
