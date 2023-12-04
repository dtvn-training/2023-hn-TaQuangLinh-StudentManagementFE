<template>
    <div>
        <h1>This is UserList Page</h1>
        <h2 v-if="!(description === undefined)">{{ description }}</h2>
    </div>
</template>
<script>
    export default {
        name: 'UserList',
        props: ['description']
    }
    console.log(this.description)
</script>
<style scoped>
    div {
        width: 700px;
        height: 500px;
        background-color: lightcoral;
        border: 2px solid rgb(0, 0, 0);
        padding-left: 30px;
        margin-bottom: 10px;
    }
    h1 {
        font-size: 48px;
    }
</style>
