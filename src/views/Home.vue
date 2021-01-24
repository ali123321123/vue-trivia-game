<template>
  <b-container id="start-screen" fluid>
    <b-row id="button-row">
      <b-button id="btn-start-game" variant="primary" href="#/questions">
        Let's Start
      </b-button>
    </b-row>
  </b-container>
</template>

<style>
#start-screen {
  height: 100vh;
  background-image: url("../assets/background.png");
  background-size: cover;
  background-position: center;
}

#button-row {
  justify-content: center;
  vertical-align: middle;
}

#btn-start-game {
  margin-top: 70vh;
  padding: 20px 40px;
  font-size: 20px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-weight: 600;
}
</style>
