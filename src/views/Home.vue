<template>
  <div class="jumbotron text-center">
    <div :header="gameName">
      <div id="btn-div">
        <b-button
          id="btn"
          style="width:15%; padding:20px"
          variant="primary"
          href="#/questions"
        >
          Let's Start
        </b-button>
      </div>
    </div>
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

<style>
.jumbotron {
  height: 100vh;
  background-image: url("../assets/background.png");
}

#btn-div {
  margin-top: 27em;
}

#btn {
  color: white;
  font-size: 20px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-weight: 600;
}
</style>
