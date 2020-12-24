import store from '@/store/index'

const { body } = document
const WIDTH = 992

export default {
    watch: {
        $route() {

        }
    },
    beforeMount() {
        window.addEventListener('resize', this.$resizeHandler)
    },
    mounted() {
        this.$resizeHandler()
    },
    beforeDistory() {
        window.removeEventListener('resize', this.$resizeHandler)
    },
    methods: {
        $_isMobile: function() {
            const react = body.getBoundingClientRect()
            return react.width - 1 < WIDTH
        },
        $resizeHandler: function() {
            const isMobile = this.$_isMobile()
            store.dispatch('app/toggleDevice', isMobile ? 'mobile' : 'desktop')

            if (isMobile) {
                store.dispatch('app/closeSidebar', {withoutAnimation: true})
            }
        }
    }

}