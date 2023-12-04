<!-- eslint-disable semi -->
<!-- eslint-disable no-trailing-spaces -->

<template>
    <div class="container">
        <h1>The User component</h1>
        <h2>{{ description }}</h2>
        <button @click="changeDescription">Change Description</button>
        <UserDetails 
            :description="description" 
            @refreshDescription="description = $event"
            :refreshDescriptionFromParent="refreshDescription"
        />
        <UserList :description="description"/>
    </div>
</template>
<script>
    import UserDetails from './UserDetails.vue'
    import UserList from './UserList.vue'

    export default {
        data: function () {
            return {
                description: 'This is description by user'
            }
        },
        methods: {
            changeDescription: function () {
                this.description = 'Content is changed by user'
            },
            refreshDescription: function () {
                this.description = 'description is refreshed by parent'
            }
        },
        components: {
            UserDetails,
            UserList
        }
    }

</script>

<style scoped>
    .container {
        display: grid;
        grid-template-columns: auto auto;
        width: 1500px;
        height: auto;
        background-color: antiquewhite;
        align-items: center;
        justify-content: center;
        column-gap: 10px;
        border: 2px solid black;
    }
    h1 {
        grid-column: 1 / 3;
        text-align: left;
        padding-left: 30px;
        font-size: 56px;
    }
    h2 {
        padding-left: 30px;
        grid-column: 1/3;
    }
    button {
        padding-left: 30px;
        grid-column: 1/3;
    }
</style>
