<template>
  <div>
     <b-button id="ques-btn" variant="info"> {{ question.question }}</b-button>

    <b-list-group >
      <AnswerButton
        v-for="(answer, index) in answers"
        :key="index"
        :index="index"
        :answer="answer"
        :class="[selectedAnswerIndex === index ? 'selected' : '']"
        @answer-clicked="handleAnswerClicked"
      />
    </b-list-group>

    <div class="d-flex justify-content-center">
      <b-button @click="submitAnswerClicked" variant="success">Next</b-button>
    </div>
  </div>
</template>

<script>
import AnswerButton from "./AnswerButton";

export default {
  components: {
    AnswerButton
  },
  props: {
    question: {
      type: Object,
      required: true,
      default: function() {
        return {
          question: "",
          incorrect_answers: []
        };
      }
    }
  },
  computed: {
    answers() {
      if (this.question.question === "") {
        return [];
      } else {
        let answers = [
          ...this.question.incorrect_answers,
          this.question.correct_answer
        ];
        for (var i = answers.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = answers[i];
          answers[i] = answers[j];
          answers[j] = temp;
        }
        return answers;
      }
    }
  },
  data() {
    return {
      selectedAnswer: "",
      selectedAnswerIndex: null
    };
  },
  methods: {
    handleAnswerClicked(answer, index) {
      this.selectedAnswer = answer;
      this.selectedAnswerIndex = index;
    },
    submitAnswerClicked() {
      this.selectedAnswerIndex = null;
      this.$emit("answer-submitted", this.selectedAnswer);
    }
  }
};
</script>

<style scoped>
.selected {
  background-color: aquamarine;
}
#ques-btn{
  color:white;
  width:100%;
  padding: 20px;
  font-size: 24px;
}
</style>
