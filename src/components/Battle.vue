<template>
    <div class="row">
        <h3>{{ msg }}</h3>
          <div class="col s10 m6">
          <h5>Player 1</h5>
          <h6>Username: Claudia</h6>
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
      repositories:0,
      followers:0,
      following:0,
      gists:0,
      score:0,
    }
  },
  
  mounted() {
      this.axios.get('https://api.github.com/users/claudia-quispe')
      .then((datos) => {
        const clau = datos.data;
        console.log(clau)
        this.repositories = clau.public_repos;
        this.followers = clau.followers;
        this.following = clau.following;
        this.gists = clau.public_gists;
        this.score= this.repositories + this.followers + this.following;
      });
  }
}
</script>