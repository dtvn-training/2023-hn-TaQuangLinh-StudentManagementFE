<template>
    <div >
       <h1>This is About Page</h1>
    </div>
</template>

<script>
    export default {
        deactivated (){
            console.log("deactived from about");
        },
        activated (){
            console.log("activated from about");
        },
        created (){
            console.log("created from about");
        }
    }
</script>

<style scoped>
    

</style>