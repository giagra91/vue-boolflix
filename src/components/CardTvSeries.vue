<template>
    <div class="series-tv list-unstyled text-center text-white mb-4 position-relative" @mouseover="hover=true" @mouseleave="hover=false">
        <div class="tv-serie-image">
            <img class="img-fluid" :src="`https://image.tmdb.org/t/p/w342` + tvSeries.poster_path" alt="">
        </div>

        <div class="tv-serie-info p-4 position-absolute top-0 start-0" v-if="hover">
            <p><strong>Titolo: </strong>
                {{ tvSeries.name }}
            </p>
            <p><strong>Titolo originale: </strong>
                {{ tvSeries.original_name }}
            </p>
            <p><strong>Lingua originale: </strong>
                {{ tvSeries.original_language }}
                <lang-flag :iso="tvSeries.original_language" />
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
        </div>
    </div>
</template>

<script>
export default {
    name: "CardTvSeries",
    data: function(){
        return{
            hover: false,
        }
    },
    props: {
    "tvSeries": Object,
    },
    methods:{
        getStars(number){
            return Math.ceil(number / 2 )
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
    
    div.tv-serie-image{
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