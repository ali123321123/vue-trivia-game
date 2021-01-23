<template>
  <div>
    <h1>Results</h1>

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
  }
};
</script>

<style></style>
