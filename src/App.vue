<template>
  <div id="app">
    <img class="img" alt="git" src="./assets/git.jpg">
    <Battle msg="Welcome to GitHub Battle"/>
  </div>
</template>

<script>
import Battle from './components/Battle.vue'

export default {
  name: 'App',
  components: {
    Battle
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
  margin-top: 60px;
}
.img {
  display: block;
  margin: auto;
  width: 40%;
}


</style>
