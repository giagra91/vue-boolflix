<template>
  <div id="app">
    <Header @search="newSearch" />
    <Main :filmsList="filmsList" :tvSeriesList="tvSeriesList" />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'

import axios from "axios";

export default {
  name: 'App',
  components: {
    Header,
    Main,
  },
  data: function(){
    return{
      stringToSearch: "",
      filmsList: null,
      tvSeriesList: null,
      newApi: `https://api.themoviedb.org/3/search/movie?api_key=1e066e335faf58831328ca092e6f9eaf&query=`,
      tvSeriesApi: `https://api.themoviedb.org/3/search/tv?api_key=1e066e335faf58831328ca092e6f9eaf&language=it_IT&query=`
    }
  },
  methods: {
    newSearch(newString){
      if(newString.trim() !== ""){
            axios
            .get(this.newApi+this.stringToSearch)
            .then((result) => {
                this.filmsList=result.data.results
                console.warn(this.filmsList)
            })
            .catch((error) => {
                console.error(error)
            })
            axios
            .get(this.tvSeriesApi+this.stringToSearch)
            .then((result) => {
                this.tvSeriesList=result.data.results;
                console.log(this.tvSeriesList)
            })
            .catch((error) => {
                console.error(error)
            })
        this.stringToSearch= newString.split(` `).join(`+`);
      } else {
          this.filmsList= null;
          this.tvSeriesList= null;
      }
    }
  },
  // updated(){
  //   console.log(this.stringToSearch);
  // }
}
</script>

<style lang="scss">
@import "./assets/styles/style.scss";

</style>
