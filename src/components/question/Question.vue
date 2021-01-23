<template>
  <div>
    <p>{{ question.question }}</p>
    <b-list-group>
      <AnswerButton
        v-for="(answer, index) in answers"
        :key="index"
        :answer="answer"
        :class="[selectedAnswerIndex === index ? 'selected' : '']"
        @answer-clicked="handleAnswerClicked, clickedAnswer(index)"
      />
    </b-list-group>

      <!-- <b-list-group-item  v-for="(answer, index) in answers"
      :key="index"  :class="[selectedAnswerIndex === index ? 'selected' : '']"
      @click="clickedAnswer(index)">{{ answer }}</b-list-group-item> -->
    
    <!-- <AnswerButton
      :answer="question.correct_answer"
      @answer-clicked="handleAnswerClicked"
    /> -->
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
          question: '',
          incorrect_answers: []
        };
      }
    },
  },
  computed: {
    answers() {
    let answers = [...this.question.incorrect_answers]
    answers.push(this.question.correct_answer)
      for (var i = answers.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp =  answers[i];
        answers[i] =  answers[j];
        answers[j] = temp;
      }
    return answers
    }
  },
  data() {
    return {
      selectedAnswer: '',
      selectedAnswerIndex: null
    }
  },
  methods: {
    handleAnswerClicked(answer) {
      this.selectedAnswer = answer;
    },
    clickedAnswer(index) {
      this.selectedAnswerIndex = index;
    },
    submitAnswerClicked() {
      this.selectedAnswerIndex = null;
      if (this.selectedAnswer === this.question.correct_answer) {
        this.$emit("answer-submitted", true);
      } else {
        this.$emit("answer-submitted", false);
      }
    }
  }
}
</script>

<style scoped>
.selected {
  background-color: aquamarine;
}
</style>
