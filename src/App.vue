<template>
  <div id="app">
    <Header @search="newSearch" />
    <Main :stringToSearch="stringToSearch" />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'

export default {
  name: 'App',
  components: {
    Header,
    Main,
  },
  data: function(){
    return{
      stringToSearch: "",
    }
  },
  methods: {
    newSearch(newString){
      if(newString.trim() !== ""){
        this.stringToSearch= newString.split(` `).join(`+`);
      } else {
        this.stringToSearch = "";
      }
    }
  },
  updated(){
    console.log(this.stringToSearch)
  }
}
</script>

<style lang="scss">
@import "./assets/styles/style.scss";

</style>
