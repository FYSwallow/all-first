<template>
    <div class="menu-container">
        <el-scrollbar wrap-class="scrollbar-wrapper">
            <el-menu
                :default-active="activeMenu"
                :collapse="isCollapse"
                :collapse-transition="false"
                :background-color="variables.menuBg"
            >
                <sidebar-Item
                    v-for="item in permission_routes"
                    :key="item.path"
                    :item="item"
                    :basePath="item.path"
                ></sidebar-Item>
            </el-menu>
        </el-scrollbar>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './sidebarItem'
import variables from '@/styles/variables.scss'

export default {
    components: { SidebarItem },
    data() {
        return {
            variables
        }
    },
    computed: {
        ...mapGetters(['sidebar', 'permission_routes']),
        isCollapse: function() {
            return !this.sidebar.opened
        },
        activeMenu: function() {
            const { path } = this.$route
            return path
        }
    },
    methods: {}
}
</script>

<style lang='scss'>
@import '@/styles/variables.scss';
.el-menu {
    border: none !important;
}
.el-menu--collapse {
    .el-submenu {
        & > .el-submenu__title {
            & > span {
                height: 0;
                width: 0;
                overflow: hidden;
                visibility: hidden;
                display: inline-block;
            }
            & > .el-submenu__icon-arrow {
                display: none;
            }
        }
    }
}
</style>