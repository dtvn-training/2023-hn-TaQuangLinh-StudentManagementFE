<template>
    <div class="row">
        <Items v-for="(item, index) in items" v-bind:key="index" @click.native="removeItem(index)">{{ item }}</Items>
    </div>
</template>

<script>
import Items from './Item.vue'

export default {
    props: ['items'],
    components: {
        Items
    },
    methods: {
        removeItem(index) {
            this.$emit('itemRemoved', index);
        }
    }
}
</script>