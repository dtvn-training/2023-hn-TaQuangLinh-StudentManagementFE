<html>
    <body>
        <div>
            <button name="increaseCount" v-on:click="increaseCount">Increase</button>
            <p>Count : {{ count }}</p>
        </div>
    </body>

<script>
    new Vue({
        el: '#app',
        data: {
            count: 0
        },
        methods: {
            increaseCount() {
                this.count++;
            }
        }
    })
</script>
</html>