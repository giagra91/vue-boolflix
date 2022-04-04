<template>
    <ul class="my-list series-tv list-unstyled text-center">
        <li>{{ tvSeries.name }}</li>
        <li>{{ tvSeries.original_name }}</li>
        <li>{{ tvSeries.original_language }}</li>
        <li>{{ tvSeries.vote_average }}</li>
    </ul>
</template>

<script>
export default {
    name: "CardTvSeries",
    props: {
    "tvSeries": Array,
    },
    updated(){
    console.log(this.tvSeriesList)
    }

}
</script>

<style lang="scss" scoped>
ul.tv-series{
    border: 3px solid blue;
}

</style>