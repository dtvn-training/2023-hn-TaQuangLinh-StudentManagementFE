<template>
    <div class="row mt-3">
        <div class="col-sm-12 text-center"></div>
        <div class="alert alert-info">
            {{ content }}
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            content: "Info: Click on a Item to delete it!"
        }
    }

}
</script>

<style>

</style>