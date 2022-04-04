<template>
    <div class="my-list text-center text-white position-relative" @mouseover="hover=true" @mouseleave="hover=false">
        <div class="film-image">
            <img class="img-fluid" :src="`https://image.tmdb.org/t/p/w342` + film.poster_path" alt="">
        </div>

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
            <button @click="apiActorsList(film.id)">Cerca attori</button>
            <div v-if="tryVariable">
                <p v-for="(element, index) in castArray" :key="index">{{ element.name}}</p>
                
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "filmFilm",
    data: function(){
        return{
            hover: false,
            tryVariable: false,
            castArray: null
        }
    },
    props:{
        "film" : Object,
    },
    methods:{
        getStars(number){
        return Math.ceil(number / 2 )
        },
        testFunction(element){
            this.tryVariable= !this.tryVariable;
            console.log(element.id);
            console.log(this.tryVariable)
        },
        apiActorsList(id){
            this.tryVariable= !this.tryVariable;
            this.castArray= null;
            axios
            .get(`http://api.themoviedb.org/3/movie/`+ id + `/casts?api_key=1e066e335faf58831328ca092e6f9eaf`)
                .then((result) => {
                console.log(result.data.cast);
                this.castArray= result.data.cast;
            })
            .catch((error) => {
                console.error(error)
            })

        }
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

        div.film-image{
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
