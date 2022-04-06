<template>
    <div class="series-tv list-unstyled text-center text-white mb-4 position-relative" @mouseover="hover=true" @mouseleave="hover=false">
        <img class="my-poster-img p-2" v-if="tvSeries.poster_path" :src="`https://image.tmdb.org/t/p/w342` + tvSeries.poster_path" :alt="tvSeries.name + ` image`">
        <div v-else>
            <img class="my-poster-img p-2" src="https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" :alt="tvSeries.name + ` image`">
            <h4 class="px-3">{{ tvSeries.name }}</h4>
        </div>

        <div class="tv-serie-info p-4 position-absolute top-0 start-0" v-if="hover">
            <p><strong>Titolo: </strong>
                {{ tvSeries.name }}
            </p>
            <p><strong>Titolo originale: </strong>
                {{ tvSeries.original_name }}
            </p>
            <p><strong>Lingua originale: </strong>
                <span  v-if="langList.includes(tvSeries.original_language)">
                    <lang-flag :iso="tvSeries.original_language"/>
                </span>
                <span v-else>
                    {{ tvSeries.original_language }}
                </span>
            </p>
            <p><strong>Descrizione: </strong>
                {{ tvSeries.overview }}
            </p>
            <p>Voto:
                <span v-for="(star, index) in 5" :key="index">
                    <font-awesome-icon icon="fa-sopd fa-star" 
                    :class="(index + 1<= getStars(tvSeries.vote_average) ? `my-stars` : ``)" />
                </span>
            </p>
            <p>
            <strong>Attori e Generi: 
                <font-awesome-icon icon="fa-solid fa-angle-down" @click="apiActorsList(tvSeries.id)" v-if="!isListActors" />
                <font-awesome-icon icon="fa-solid fa-angle-up" @click="apiActorsList(tvSeries.id)" v-else />
            </strong>
            </p>
            <div v-if="isListActors">
                <span v-for="(element, index) in castArray" :key="index" v-show="index < 5">{{ element.name }}, </span>
                <p class="m-0"> 
                    <strong>
                        Generi:
                    </strong>
                    <span v-for="(element, index) in tvGenresList" :key="index + `c`">
                        {{ getTvSeriesGenres(element.id,tvSeries.genre_ids,element.name) }}
                    </span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "CardTvSeries",
    data: function(){
        return{
            hover: false,
            isListActors: false,
            castArray: null,
            langList: ["ar", "am", "az", "be", "bn", "bg", "zh", "ca", "cs", "en", "et", "fr", "de", "el", "ha", "hi", "hu", "it", "ja",
            "jv", "km", "ko", "lv", "ms", "fa", "pl", "pt", "ro", "ru", "es", "sw", "ta", "te", "th", "tr", "uz", "vi"],
        }
    },
    props: {
    "tvSeries": Object,
    "tvGenresList": Array,
    },
    methods:{
        getStars(number){
            return Math.ceil(number / 2 )
        },
        apiActorsList(id){
            this.isListActors= !this.isListActors;
            this.castArray= null;
            axios
            .get(`https://api.themoviedb.org/3/tv/`+ id + `/credits?api_key=1e066e335faf58831328ca092e6f9eaf`)
                .then((result) => {
                this.castArray= result.data.cast;
            })
            .catch((error) => {
                console.error(error)
            })
        },
        getTvSeriesGenres(genresId, myId, genresName){
            if(myId.includes(genresId)){
                return genresName + ",";
            }
        },
    },
}
</script>

<style lang="scss" scoped>
div.series-tv{
    width: calc(33% - 6px);
    min-width: 200px;
    margin: 3px;
    background-color: rgb(27, 27, 27);
    
    img.my-poster-img{
        width: 100%;
    }

        div.tv-serie-info{
            width: 100%;
            height: 100%;
            background-color: rgb(27, 27, 27);
            overflow-y: auto;
            text-align: left;

            p{
            margin: .4rem;
            }   
        }
}

    .my-stars{
        color: gold;
    }

</style>