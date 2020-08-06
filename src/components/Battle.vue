<template>
    <div>
      <div class="col s6 m6">
      <h5>Player {{ num }}</h5>
      <img v-if="avatar_url != '' " :src="avatar_url" alt="" class="avatar"/>
      <h6>Username: {{ username }} </h6>
        <input v-model="username" placeholder="" type="text" class="validate"/>
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
    num: String,
  },
  data() {
    return {
      username: '',
      repositories:0,
      followers:0,
      following:0,
      gists:0,
      score:0,
      avatar_url:'',
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
        this.avatar_url = Git.avatar_url;

        if (this.num == '1') {
          this.$store.commit('changeScore1' , this.score)
        } else {
          this.$store.commit('changeScore2', this.score)
        }
      })
      .catch(error => {
        alert(`Error ${error}`)
      });
      
    }
  },
  /*mounted() {
    this.cargar_datos()
  }*/
  // mounted para cuando se cargue la pagina
}
</script>