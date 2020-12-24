<template>
    <div class="app-warpper" :class="classObj">
        <side-bar class="sidebar-container"></side-bar>
        <div class="main-container">
            <div :class="{'fixed-header': fixedHeader}">
                <nav-bar/>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import sideBar from './components/sidebar/index'
import navBar from './components/navbar'
import mixin from './mixin/resizeHandler'
export default {
    components: {
        sideBar,
        navBar
    },
    mixins: [mixin],
    computed: {
        ...mapState({
            sidebar: state => state.app.sidebar
        }),
        classObj: function() {
            return {
                hideSideBar: !this.sidebar.opened,
                openSideBar: this.sidebar.opened
            }
        }
    }
}
</script>

<style lang='scss' scoped>
@import '@/styles/variables.scss';
.app-warpper {
    position: relative;
    width: 100%;
    height: 100%;
    .sidebar-container {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        overflow: hidden;
        width: $sideBarWidth;
        background-color: $menuBg;
        transition: width ease .28s;
    }
    .main-container {
        min-height: 100%;
        transition: margin-left  ease .28s;
        margin-left: $sideBarWidth;
        position: relative;
    }
}
.hideSideBar {
    .sidebar-container {
      width: 63px ;
    }

    .main-container {
      margin-left: 63px;
    }
} 
.fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 10;
}
.mobile .fixed-header {
    width: 100%;
}
</style>