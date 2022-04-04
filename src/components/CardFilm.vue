<template>
    <ul class="my-list list-unstyled text-center">
        <li><img class="my-poster" :src="`https://image.tmdb.org/t/p/w342` + film.poster_path" alt=""></li>
        <li>{{ film.title }}</li>
        <li>{{ film.original_title }}</li>
        <li v-if="getFlag(film.original_language)"><img class="my-flag" :src="getFlag(film.original_language)" alt=""></li>
        <li v-else>{{ film.original_language }}</li>
        <!-- <li>{{ getStars(film.vote_average) }}</li> -->
        <li>
            <span v-for="(star, index) in 5" :key="index">
                <font-awesome-icon icon="fa-solid fa-star" 
                :class="(index + 1<= getStars(film.vote_average) ? `my-stars` : ``)" />
            </span>
        </li>
    </ul>
</template>

<script>
export default {
    name: "filmFilm",
    data: function(){
        return{
            isFlag: false,
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
    updated(){
        // console.log(this.isFlag)
    }

}
</script>

<style lang="scss" scoped>

    img.my-flag{
        width: 20px;
        height: 20px;
    }

    ul.my-list{
        width: 25%;

        img.my-poster{
            width: 60%;
        }
    }

    .my-stars{
        color: gold;
    }

</style>
