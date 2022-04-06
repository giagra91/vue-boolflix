<template>
    <header>
        <div class="logo d-flex align-items-center">
            <img class="px-3" src="../assets/img/logo.svg" alt="">
            <h2 class="m-0">Boolflix</h2>
        </div>

        <div class="d-flex flex-column">
            <label class="text-white" for="movie-genres">Seleziona film per genere</label>
            <select name="movie-genres" id="movie-genres" v-model="selectedFilmGenre" @click="$emit(`newFilmGenre`, selectedFilmGenre)" >
                <option value="">Nessuna selezione</option>
                <option v-for="(element, index) in movieGenresList" :key="index" :value="element.name">{{ element.name }}</option>
            </select>
        </div>
        <div class="d-flex flex-column">
            <label class="text-white" for="movie-genres">Seleziona serie tv per genere</label>
            <select class="ms-2" name="tv-genres" >
                <option value="">Nessuna selezione</option>
                <option v-for="(element, index) in tvGenresList" :key="index + `d`" :value="element.name">{{ element.name }}</option>
            </select>
        </div>

        <div class="form-inline d-flex justify-content-between width-third px-2">
            <input @keyup="$emit(`search`, stringToSearch)" v-model="stringToSearch" class="form-control" type="search" placeholder="Search" >
            <button @click="$emit(`search`, stringToSearch)" class="btn btn-outline-success ms-2" type="submit">Search</button>
        </div>
    </header>
</template>

<script>
export default {
    name: "IndexHeader",
    data: function(){
        return{
            stringToSearch: "",
            selectedFilmGenre: "",
        }
    },
    props:{
        "movieGenresList": Array,
        "tvGenresList": Array,
    },
    methods:{
        newString(){
            if(this.stringToSearch !== ""){
                return this.stringToSearch
            } else {
                return this.stringToSearch=""
            }
        }
    },
    // updated(){
    //     console.log(this.movieGenresList)
    // }
}
</script>

<style lang="scss" scoped>

header{
    height: 10vh;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: space-between;

    position: fixed;
    width: 100%;
    top: 0;
    z-index: 2;

    div.logo{
        height: 100%;

        img{
            height: 70%;
        }

        h2{
            text-transform: uppercase;
            font-weight: bold;
            color: red
            ;
        }
    }

    .width-third{
        width: 35%;
    }
}

</style>