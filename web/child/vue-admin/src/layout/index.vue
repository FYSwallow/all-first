<template>
    <div class="app-warpper" :class="classObj">
        <div v-if="device === 'mobile'&& sidebar.opened" class="draw-bg" @click="toggleSideBar"></div>
        <side-bar class="sidebar-container"></side-bar>
        <div class="main-container">
            <div :class="{ 'fixed-header': fixedHeader }">
                <nav-bar />
            </div>
            <div class="app-main">
                <router-view></router-view>
            </div>
        </div>
        <right-panel v-if="showSetting">
            <settings />
        </right-panel>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import sideBar from './components/sidebar/index'
import navBar from './components/navbar'
import rightPanel from './components/rightPanel/index'
import settings from './components/settings/index'
import mixin from './mixin/resizeHandler'
export default {
    data() {
        return {
            fixedHeader: true,
            showSetting: true
        }
    },
    components: {
        sideBar,
        navBar,
        rightPanel,
        settings
    },
    mixins: [mixin],
    computed: {
        ...mapState({
            sidebar: state => state.app.sidebar,
            device: state => state.app.device
        }),
        classObj: function() {
            return {
                hideSideBar: !this.sidebar.opened,
                openSideBar: this.sidebar.opened,
                mobile: this.device === 'mobile',
                withoutAnimation: this.sidebar.withoutAnimation
            }
        }
    },
    methods: {
        toggleSideBar: function() {
            this.$store.dispatch('app/toggleSidebar')
        }
    }
}
</script>

<style lang="scss" scoped>
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
        transition: all ease 0.28s;
        z-index: 1000;
        border-right: 1px solid #ccc;
    }
    .main-container {
        min-height: 100%;
        height: 100%;
        transition: margin-left ease 0.28s;
        margin-left: $sideBarWidth;
        position: relative;
        .fixed-header {
            position: fixed;
            top: 0;
            right: 0;
            width: calc(100% - #{$sideBarWidth});
            transition: all ease 0.28s;
        }
        .mobile .fixed-header {
            width: 100%;
        }
        .app-main {
            height: 100%;
            overflow: auto;
        }
        .fixed-header + .app-main {
            padding-top: 50px;
        }
    }
    .draw-bg {
        background: #000;
        opacity: 0.3;
        width: 100%;
        top: 0;
        height: 100%;
        position: fixed;
        z-index: 999;
    }
}
.hideSideBar {
    .sidebar-container {
        width: 63px;
    }
    .main-container {
        margin-left: 63px;
        .fixed-header {
            width: calc(100% - 63px);
        }
    }
}
.mobile {
    .main-container {
        margin-left: 0;
        .fixed-header {
            width: 100%;
        }
    }
}
.mobile.hideSideBar {
    .sidebar-container {
        transform: translateX(-100%);
    }
}
.withoutAnimation {
    .main-container,
    .sidebar-container {
        transition: none;
        .fixed-header {
            transition: none;
        }
    }
}
</style>