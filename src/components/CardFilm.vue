<template>
    <div class="my-list text-center text-white position-relative mb-4" @mouseover="hover=true" @mouseleave="hover=false">

            <img class="my-poster-img p-2" :src="`https://image.tmdb.org/t/p/w342` + film.poster_path" :alt="film.title + ` image`">

        <div class="film-info  p-4 position-absolute top-0 start-0" v-if="hover">
            <p><strong>Titolo: </strong> 
                {{ film.title }}
            </p>
            <p><strong>Titolo originale: </strong>
                {{ film.original_title }}
            </p>
            <p><strong>Lingua originale: </strong>
                {{ film.original_language }} 
                <lang-flag :iso="film.original_language" />
            </p>
            <p><strong>Descrizione: </strong>
                {{ film.overview }}
            </p>
            <p><strong>Voto: </strong>
                <span v-for="(star, index) in 5" :key="index">
                    <font-awesome-icon icon="fa-sopd fa-star" 
                    :class="(index + 1<= getStars(film.vote_average) ? `my-stars` : ``)" />
                </span>
            </p>
            <p>
                <strong>Attori e Generi: 
                    <font-awesome-icon icon="fa-solid fa-angle-down" @click="apiActorsList(film.id)" v-if="!isListActors" />
                    <font-awesome-icon icon="fa-solid fa-angle-up" @click="apiActorsList(film.id)" v-else />
                </strong>
            </p>
            <div v-if="isListActors">
                <span v-for="(element, index) in castArray" :key="index" v-show="index < 5">{{ element.name }}, </span>
                <p class="m-0"> 
                    <strong>
                        Generi:
                    </strong>
                    <span v-for="(element, index) in genresList" :key="index + `b`">
                        {{ getMovieGenres(element.id,film.genre_ids,element.name) }}
                    </span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "cardFilm",
    data: function(){
        return{
            hover: false,
            isListActors: false,
            castArray: null,
        }
    },
    props:{
        "film" : Object,
        "genresList": Array,
    },
    methods:{
        getStars(number){
        return Math.ceil(number / 2 )
        },
        apiActorsList(id){
            this.isListActors= !this.isListActors;
            this.castArray= null;
            axios
            .get(`http://api.themoviedb.org/3/movie/`+ id + `/casts?api_key=1e066e335faf58831328ca092e6f9eaf`)
                .then((result) => {
                this.castArray= result.data.cast;
            })
            .catch((error) => {
                console.error(error)
            })
        },
        getMovieGenres(genresId, myId, genresName){
            if(myId.includes(genresId)){
                return genresName + ",";
            }
        },
    },
}
</script>

<style lang="scss" scoped>

    img.my-flag{
        width: 20px;
        height: 20px;
    }

    div.my-list{
        width: calc(33% - 6px);
        min-width: 200px;
        margin: 3px;
        background-color: black;

        img.my-poster-img{
            width: 100%;
        }

        div.film-info{
            width: 100%;
            height: 100%;
            background-color: black;
            overflow-y: auto;
            text-align: left;
        }

        p{
            margin: .4rem;
        }
    }

    .my-stars{
        color: gold;
    }

</style>
