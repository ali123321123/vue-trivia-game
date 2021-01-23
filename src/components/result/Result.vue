<template>
  <p :class="[question.answered_correctly === true ? 'win' : 'fail']">
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
