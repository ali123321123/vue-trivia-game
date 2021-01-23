<template>
  <p
    :class="[
      question.given_answer === question.correct_answer ? 'win' : 'fail'
    ]"
  >
    {{ question.question }}
  </p>
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
</style>
