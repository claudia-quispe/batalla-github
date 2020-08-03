<template>
    <div class="row">
        <h3>{{ msg }}</h3>
          <div class="col s10 m6">
          <h5>Player 1</h5>
          <h6>Username: {{ username }} </h6>
            <input v-model="username" placeholder="" id="first_name" type="text" class="validate">
            <a class="waves-effect waves-light btn" @click="cargar_datos">Buscar</a>
            <div class="collection">
            <a href="#!" class="collection-item"><span class="badge">{{ repositories }}</span>Public Repositories:</a>
            <a href="#!" class="collection-item"><span class="badge">{{ followers }}</span>Number of Followers:</a>
            <a href="#!" class="collection-item"><span class="badge">{{ following }}</span>Number Following:</a>
            <a href="#!" class="collection-item"><span class="badge">{{ gists }}</span>Public Gists:</a>
            <a href="#!" class="collection-item"><span class="badge">{{ score }}</span>Total Score:</a>
            </div> 
          </div>
    </div>    
</template>
<script>
export default {
  name: 'Battle',
  props: {
    msg: String,
  },
  data() {
    return {
      username: 'claudia-quispe',
      repositories:0,
      followers:0,
      following:0,
      gists:0,
      score:0,
    }
  },
  //usamos methods para cargar al manejador
  methods: {
    cargar_datos() {
      this.axios.get(`https://api.github.com/users/${this.username}`)
      .then((datos) => {
        const Git = datos.data;
        console.log(Git);
        this.repositories = Git.public_repos;
        this.followers = Git.followers;
        this.following = Git.following;
        this.gists = Git.public_gists;
        this.score = this.repositories + this.followers + this.following + this.gists;
         
      });
    }
  },
  mounted() {
    this.cargar_datos()
  }
  // mounted para cuando se cargue la pagina
}
</script>