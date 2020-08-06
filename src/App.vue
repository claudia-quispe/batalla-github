<template>
  <div id="app">
    <img class="img" alt="git" src="./assets/git.jpg">
    <h4>Welcome to GitHub Battle</h4>
    <div class="row">
      <Battle num="1"/>
      <Battle num="2"/>
    </div>
    <a class="waves-effect waves-light btn" @click="scoreFinal">Calcular</a>
  </div>
</template>

<script>
import Battle from './components/Battle.vue'

export default {
  name: 'App',
  components: {
    Battle,
  },
  methods: {
    scoreFinal() {
      const score1 = this.$store.state.score1;
      const score2 = this.$store.state.score2;
      if (score1 > score2) {
        alert('Win player 1')
      } else if (score1 < score2){
        alert('Win player 2')
      } else {
        alert('Empate!')
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin: auto;
  margin-bottom: 20px;
}
.avatar {
  display: block;
  margin: auto;
  width: 15%;
  margin-top: 30px;
}
.img {
  display: block;
  margin: auto;
  width: 30%;

}



</style>
