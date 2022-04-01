<template>
    <header>
        <img class="px-3" src="../assets/img/boolizia.jpg" alt="">

    <div class="form-inline d-flex justify-content-between w-50 px-2">
        <label for="films">Film</label>
        <input type="radio" id="films" name="genre" class="">
        <label for="tv-series">Serie Tv</label>
        <input type="radio" id="tv-series" name="genre" class="mx-2">
        <input @keyup="$emit(`search`, stringToSearch.trim())" v-model="stringToSearch" class="form-control" type="search" placeholder="Search" >
        <button @click="$emit(`search`, stringToSearch.trim())" class="btn btn-outline-success ms-2" type="submit">Search</button>
    </div>
    </header>
</template>

<script>
export default {
    name: "IndexHeader",
    data: function(){
        return{
            stringToSearch: ""
        }
    },
    updated(){
        console.log(this.stringToSearch.split(` `).join(`+`))
    }
}
</script>

<style lang="scss" scoped>

header{
    height: 10vh;
    background-color: aqua;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img{
        height: 70%;
    }
}

</style>