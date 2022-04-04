<template>
    <ul class="my-list series-tv list-unstyled text-center">
        <li><img class="my-poster" :src="`https://image.tmdb.org/t/p/w342` + tvSeries.poster_path" alt=""></li>
        <li>{{ tvSeries.name }}</li>
        <li>{{ tvSeries.original_name }}</li>
        <li>{{ tvSeries.original_language }}</li>
        <!-- <li>{{ getStars(tvSeries.vote_average) }}</li> -->
        <li>
            <span v-for="(star, index) in 5" :key="index">
                <font-awesome-icon icon="fa-solid fa-star" 
                :class="(index + 1<= getStars(tvSeries.vote_average) ? `my-stars` : ``)" />
            </span>
        </li>
    </ul>
</template>

<script>
export default {
    name: "CardTvSeries",
    props: {
    "tvSeries": Object,
    },
    methods:{
        getStars(number){
            return Math.ceil(number / 2 )
        },
    },


    updated(){
    }

}
</script>

<style lang="scss" scoped>
ul.series-tv{
    width: 25%;
    img.my-poster{
        width: 60%;
    }
}

    .my-stars{
        color: gold;
    }

</style>