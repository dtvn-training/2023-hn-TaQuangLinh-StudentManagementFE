<template>
    <div class="card">
        <h1>This is Card Page</h1>
    </div>
</template>

<script>
    export default {
        name: 'Car',
        props: ['cardTitle'],
        deactivated (){
            console.log("deactived from card");
        },
        activated (){
            console.log("activated from card");
        },
        created (){
            console.log("created from card");
        }
    }
</script>

<style scoped>
    .card{
        border: 1px solid black;
        widows: 50%;
        box-shadow: 1px 1px 2px rgba(0,0,0, .6);
        padding: 30px;
        margin: 20px auto;
        text-align: center;
    }

</style>