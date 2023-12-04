<template>
    <div>
        <h1>Phone: {{ phone }}</h1>
        <button @click="showPhone">Show phone</button>
   </div>
</template>
<script>
export default {
    data: function () {
        return {
            phone: '0231723981'
        }
    },
    methods: {
        showPhone: function () {
            return this.phone
        }
    }
}
</script>
