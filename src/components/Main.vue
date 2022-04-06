<template>
    <main class="p-3">
        <div class="card-container films d-flex flex-wrap p-3" v-if="filmsList" >
            <CardFilm :genresList="genresList"  :film="film" v-for="(film, index) in filmsList" 
            :key="index"
            />
        </div>
        <div class="card-container series d-flex flex-wrap p-3" v-if="tvSeriesList">
            <CardTvSeries :tvGenresList="tvGenresList" :tvSeries="tvSeries" v-for="(tvSeries, index) in tvSeriesList" 
            :key="index"
            />
        </div>

        <div class="d-flex justify-content-center text-white p-5" v-else>
            <h1 class="fw-bold text-uppercase">Effettua la tua ricerca</h1>
        </div>
    </main>
</template>

<script>
import CardFilm from "./CardFilm.vue";
import CardTvSeries from "./CardTvSeries.vue";
import axios from "axios";

export default {
    name: "IndexMain",
    props: {
        "filmsList": Array,
        "tvSeriesList": Array,
    },
    components: {
        CardFilm,
        CardTvSeries
    },
    data: function(){
        return{
            genresList: null,
            tvGenresList: null,
        }
    },
    methods: {
    },
    created(){
        axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=1e066e335faf58831328ca092e6f9eaf`)
        .then((result) =>{
            this.genresList= result.data.genres;
        })
        .catch((error) =>{
            console.error(error)
        })
        axios.get(`https://api.themoviedb.org/3/genre/tv/list?api_key=1e066e335faf58831328ca092e6f9eaf`)
        .then((result) =>{
            this.tvGenresList= result.data.genres;
        })
        .catch((error) =>{
            console.error(error)
        })
    }
}
</script>

<style lang="scss" scoped>

main{
    min-height: 90vh;
    margin-top: 10vh;
    background-color:rgb(67, 67, 67);
}

</style>