<template>
    <div class="menu-container">
        <el-scrollbar wrap-class="scrollbar-wrapper">
            <el-menu
                default-active="2"
                :collapse="isCollapse"
                :collapse-transition="false"
                :background-color="variables.menuBg"
            >
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span slot="title">Navigator One</span>
                    </template>
                    <el-menu-item-group>
                        <span slot="title">Group One</span>
                        <el-menu-item index="1-1">item one</el-menu-item>
                        <el-menu-item index="1-2">item two</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="Group Two">
                        <el-menu-item index="1-3">item three</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="1-4">
                        <span slot="title">item four</span>
                        <el-menu-item index="1-4-1">item one</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-menu-item index="2">
                    <i class="el-icon-menu"></i>
                    <span slot="title">Navigator Two</span>
                </el-menu-item>
            </el-menu>
        </el-scrollbar>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import variables from '@/styles/variables.scss'

export default {
    data() {
        return {
            variables
        }
    },
    computed: {
        ...mapGetters(['sidebar']),
        isCollapse: function() {
            return !this.sidebar.opened
        }
    },
    methods: {}
}
</script>

<style lang='scss' scoped>
@import '@/styles/variables.scss';
.el-submenu__title {
    &:hover {
        background-color: $menuHover !important;
    }
}

.is-active > .el-submenu__title {
    color: $subMenuActiveText !important;
}
.el-menu {
    border: none;
}
</style>