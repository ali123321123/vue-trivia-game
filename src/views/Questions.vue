<template>
  <div>
    <b-list-group>
      <b-list-group-item variant="primary">{{
        questions[0].question
      }}</b-list-group-item>
      <b-list-group-item variant="primary">{{
        questions[1].question
      }}</b-list-group-item>
      <b-list-group-item variant="primary">{{
        questions[2].question
      }}</b-list-group-item>
    </b-list-group>
    <div>
      <b-button>Button</b-button>
      <b-button variant="danger">Button</b-button>
      <b-button variant="success">Next</b-button>
    </div>
  </div>
</template>

<script>
import { fetchQuestions } from "../api/questions";
export default {
  data() {
    return {
      questions: []
    };
  },
  created() {
    fetchQuestions().then(questions => (this.questions = questions));
  }
};
</script>

<style></style>
