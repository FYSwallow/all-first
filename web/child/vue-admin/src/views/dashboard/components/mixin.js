export default {
    beforeMount() {
        window.addEventListener('resize', this.$resizeHandler)
    },
    beforeDistory() {
        window.removeEventListener('resize', this.$resizeHandler)
    },
    methods: {
        $resizeHandler: function() {
            this.myChart.resize()
        }
    }
}