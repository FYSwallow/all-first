<template>
    <div class="navbar-container">
        <div
            class="sidebar-btn"
            :class="sidebar.opened ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
            @click="toggleSideBar"
        ></div>
        <div class="navbar-right">

        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    components: {},
    computed: {
        ...mapGetters(['sidebar'])
    },
    methods: {
        toggleSideBar: function() {
            this.$store.dispatch('app/toggleSidebar')
        }
    }
}
</script>

<style lang='scss' scoped>
.navbar-container {
    height: 50px;
    clear: both;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
    .sidebar-btn {
        float: left;
        height: 100%;
        padding: 0 10px;
        font-size: 20px;
        line-height: 50px;
        font-weight: 200;
    }
    .navbar-right {
        float: right;
        height: 100%;
        line-height: 50px;
    }
}
</style>