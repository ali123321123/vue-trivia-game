<template>
  <div>
    <b-jumbotron :header="gameName" fluid>
      <p>This is a simple trivia game</p>
      <b-button variant="success" href="#/questions">Start game</b-button>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gameName: "Vue Trivia Game"
    };
  }
};
</script>

<style></style>
