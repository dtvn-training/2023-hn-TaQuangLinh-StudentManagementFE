<template>
    <div>
        <h1>This is UserDetails Page</h1>
        <h2>{{ description }}</h2>
        <button @click="refreshDescription">Refresh</button>
        <button @click="refreshDescriptionFromParent()">RefreshFromParent</button>
    </div>
</template>
<script>
export default {
    name: 'UserDetails',
    props: {
        description: {
            type: Object
        },
        refreshDescriptionFromParent: Function
    },
    methods: {
        refreshDescription () {
            this.description = 'This is UserDetails'
            this.$emit('refreshDescription', this.description)
        }
    }
}
</script>
<style scoped>
    div {
        width: 700px;
        height: 500px;
        background-color: lightcyan;
        border: 2px solid rgb(0, 0, 0);
        padding-left: 30px;
        margin-bottom: 10px;
    }
    h1 {
        font-size: 48px;
    }
</style>
