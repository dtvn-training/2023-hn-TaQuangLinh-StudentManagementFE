<template>
    <div >
       <h1>This is Contact Page</h1>
       <button @click="counter++">Increase value</button>
       <h4>{{ counter }}</h4>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                counter: 0
            }
        },
        deactivated (){
            console.log("deactived from contact");
        },
        activated (){
            console.log("activated from contact");
        },
        created (){
            console.log("created from contact");
        }
    }
</script>

<style scoped>
    

</style>