<template>
    <div v-if="!item.hidden">
        <!-- 当父级路由只有一个子路由时,则菜单等级提升 -->
        <template v-if=" hasOneShowingChild(item.children, item) &&!onlyOneChild.children">
            <app-link :to="resovePath(onlyOneChild.path)">
                <el-menu-item :index="resovePath(onlyOneChild.path)">
                    <item
                        :icon="onlyOneChild.meta.icon"
                        :title="onlyOneChild.meta.title"
                        >
                        {{ onlyOneChild.meta.title }}
                    </item>
                </el-menu-item>
            </app-link>
        </template>
        <el-submenu v-else :index="resovePath(item.path)" popper-append-to-body>
            <template slot="title">
                <item
                    v-if="item.meta"
                    :icon="item.meta && item.meta.icon"
                    :title="item.meta.title"
                >
                {{ item.meta.title }}
                </item>
            </template>
            <sidebar-item
                v-for="child in item.children"
                :key="child.path"
                :item="child"
                :basePath="resovePath(child.path)"
            >
            </sidebar-item>
        </el-submenu>
    </div>
</template>

<script>
import path from 'path'
import AppLink from './link'
import Item from './item'
export default {
    name: 'SidebarItem',
    components: {
        AppLink,
        Item
    },
    props: {
        item: {
            type: Object,
            required: true
        },
        basePath: {
            type: String,
            default: ''
        }
    },
    data() {
        this.onlyOneChild = null // 只有一个子菜单
        return {}
    },
    methods: {
        hasOneShowingChild: function(children = [], parent) {
            // 过滤不在菜单中出现的路由
            const showingChildren = children.filter(item => {
                if (item.hidden) {
                    return false
                } else {
                    this.onlyOneChild = item // 只有一个子菜单是生效
                    return true
                }
            })

            // 如果只有一项的话，返回true
            if (showingChildren.length === 1) {
                return true
            }

            // 如果没有子菜单,则直接展示父级菜单,且路由地址不需要再拼接
            if (showingChildren.length === 0) {
                this.onlyOneChild = { ...parent, path: '' }
                return true
            }
            return false
        },
        resovePath: function(routePath) {
            return path.resolve(this.basePath, routePath)
        }
    }
}
</script>

<style>
</style>