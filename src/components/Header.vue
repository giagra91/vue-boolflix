<template>
    <header>
        <div class="logo d-flex align-items-center">
            <img class="px-3" src="../assets/img/boolizia.jpg" alt="">
            <h2 class="m-0">Boolflix</h2>
        </div>

        <div class="form-inline d-flex justify-content-between w-50 px-2">
            <input @keyup="$emit(`search`, stringToSearch)" v-model="stringToSearch" class="form-control" type="search" placeholder="Search" >
            <button @click="$emit(`search`, stringToSearch)" class="btn btn-outline-success ms-2" type="submit">Search</button>
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
    methods:{
        newString(){
            if(this.stringToSearch !== ""){
                return this.stringToSearch
            } else {
                return this.stringToSearch=""
            }
        }
    },
    updated(){
    }
}
</script>

<style lang="scss" scoped>

header{
    height: 10vh;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div.logo{
        height: 100%;

        img{
            height: 70%;
        }

        h2{
            text-transform: uppercase;
            font-weight: bold;
            color: white;
        }

    }
}

</style>