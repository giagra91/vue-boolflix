<template>
    <main>
        <h1>{{ stringToSearch }}</h1>
        <div v-if="filmsList">
            <ul v-for="(film, index) in filmsList" :key="index">
                <!-- <li>{{ film.title }}</li> -->
                <li>{{ film.original_title }}</li>
                <li>{{ film.original_language }}</li>
                <!-- <li>{{ film.vote_average }}</li> -->
            </ul>
        </div>
        <h1 v-else>Non ci sono elementi in base alla ricerca</h1>
        <!-- <CardFilm /> -->
    </main>
</template>

<script>
import axios from "axios";
export default {
    name: "IndexMain",
    props: {
        "stringToSearch": String
    },
    data: function(){
        return{
            newApi: `https://api.themoviedb.org/3/search/movie?api_key=1e066e335faf58831328ca092e6f9eaf&query=`,
            filmsList: null,
        }
    },
    methods: {
        // getApiInfo(){
        //     axios
        //     .get(this.newApi)
        //     .then((result) => {
        //         console.log()
        //     })
        //     .catch((error) => {
        //         console.error(error)
        //     })
        // }
    },
    updated(){
        if(this.stringToSearch.trim() !== ""){
            axios
            .get(this.newApi+this.stringToSearch)
            .then((result) => {
                this.filmsList=result.data.results
                // console.table(this.filmsList)
            })
            .catch((error) => {
                console.error(error)
            })
        }
    }
}
</script>

<style lang="scss" scoped>

main{
    min-height: 90vh;
    background-color: rgb(221, 113, 113);
}

</style>