<template>
    <ul class="my-list list-unstyled text-center">
        <li>{{ film.title }}</li>
        <li>{{ film.original_title }}</li>
        <li><img class="my-flag" src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg" alt=""></li>
        <li>{{ film.original_language }}</li>
        <li>{{ film.vote_average }}</li>
    </ul>
</template>

<script>
export default {
    name: "filmFilm",
    props:{
        "film" : Object,
    }

}
</script>

<style lang="scss" scoped>

    img.my-flag{
        width: 20px;
        height: 20px;
    }

</style>
