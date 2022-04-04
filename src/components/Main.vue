<template>
    <main class="d-flex justify-content-center p-3">
        <div class="card-container" v-if="filmsList" >
            <CardFilm  :film="film" v-for="(film, index) in filmsList" 
            :key="index"
            />
        </div>
        <div class="card-container" v-if="tvSeriesList">
            <CardTvSeries  :tvSeries="tvSeries" v-for="(tvSeries, index) in tvSeriesList" 
            :key="index"
            />
        </div>

        <div class="d-flex justify-content-center align-items-center" v-else>
            <h1>Effettua la tua ricerca</h1>
        </div>
    </main>
</template>

<script>
import CardFilm from "./CardFilm.vue";
import CardTvSeries from "./CardTvSeries.vue";

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
        }
    },
    methods: {
    },
    // updated(){
    // console.log(this.tvSeriesList)
    // }

}
</script>

<style lang="scss" scoped>

main{
    min-height: 90vh;
    background-color: rgb(221, 113, 113);
}

</style>