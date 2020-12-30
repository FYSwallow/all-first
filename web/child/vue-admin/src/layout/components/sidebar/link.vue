<template>
    <component :is="type" v-bind="linksProp(to)">
        <slot/>
    </component>
</template>

<script>

export default {
    props: {
        to: {
            type: String,
            required: true
        }
    },
    computed: {
        type: function() {
            return 'router-link'
        }
    },
    methods: {
        linksProp: function(to) {
            console.log(to)
            return {
                to: to
            }
        }
    }
}
</script>

<style>

</style>