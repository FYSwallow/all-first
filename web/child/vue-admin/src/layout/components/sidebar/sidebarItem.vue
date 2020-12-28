<template>
    <div v-if="!item.hidden">
        <!-- 当父级路由只有一个子路由时,则菜单等级提升 -->
        <template v-if="hasOneShowingChild(item.children, item) && !onlyOneChild.children">
            <el-menu-item index="2-1">{{ onlyOneChild.meta.title }}</el-menu-item>
        </template>
        <el-submenu v-else index="2-4">
            <template slot="title">item.name</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
    </div>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    data() {
        this.onlyOneChild = null // 只有一个子菜单
        return {}
    },
    methods: {
        hasOneShowingChild: function(children = [], parent) {
            // 过滤不在菜单中出现的路由
            const showingChildren = children.filter(item =>{
                if (item.hidden) {
                    return false
                } else {
                    this.onlyOneChild = item // 只有一个子菜单是生效
                    return true
                }
            })

            console.log(showingChildren)
            // 如果只有一项的话，返回true
            if (showingChildren.length === 1) {
                return true
            }

            // 如果没有子菜单,则直接展示父级菜单
            if (showingChildren.length === 0) {
                this.onlyOneChild = {...parent }
                console.log(this.onlyOneChild)
                return true
            }
            return false
            
        }
    }
}
</script>

<style>
</style>