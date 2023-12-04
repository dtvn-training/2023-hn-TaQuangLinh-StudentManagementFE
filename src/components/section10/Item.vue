<template>
    <div class="col-sm-6 col-md-4 col-lg-3 mt-3">
        <div class="card">
            <div class="card-body item">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    data: function(){
        return{
            //
        }
    }
}
</script>

<style>
    .card-body {
        font-family: 'Arizonia', cursive;
        font-size: 24px;
        color: rgb(156, 89, 0);
    }
    .item {
        cursor: pointer;
    }
    .item:hover {
        background-color: bisque;
    }
</style>