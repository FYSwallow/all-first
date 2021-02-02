import {debounce} from '@/utils/index.js'
export default {
    data() {
        return {
            myChart: null
        }
    },
    beforeMount() {
        window.addEventListener('resize', this.$resizeHandler)
    },
    beforeDistory() {
        window.removeEventListener('resize', this.$resizeHandler)
    },
    methods: {
        $resizeHandler: debounce(function() {
            if (this.myChart) {
                this.myChart.resize()
            }
        }, 100)
    }
}