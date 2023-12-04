<template>
    <div class="row">
        <div class="col-sm-12">
            <h3>Item Added</h3>
            <div class="progress">
                <div class="progress-bar bg-success" :style="{width: (itemCount/maxItem)*100 +'%'}">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['itemCount', 'maxItem']

    }
</script>