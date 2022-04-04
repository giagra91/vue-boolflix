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
            <p v-if="getFlag(film.original_language)"><img class="my-flag" :src="getFlag(film.original_language)" alt=""></p>
            <p v-else><strong>Lingua originale: </strong>
                {{ film.original_language }}
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
        </div>
    </div>
</template>

<script>
export default {
    name: "filmFilm",
    data: function(){
        return{
            isFlag: false,
            hover: false
        }
    },
    props:{
        "film" : Object,
    },
    methods:{
        getFlag(language){
            language= "";
            if(language === "en"){
                language = "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg";
                this.isFlag= true;
            } else {
                language= "";
                this.isFlag= false;
            }
            return this.isFlag;
        },
        getStars(number){
        return Math.ceil(number / 2 )
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
