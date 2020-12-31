<template>
    <div class="navbar-container">
        <div
            class="sidebar-btn"
            :class="sidebar.opened ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
            @click="toggleSideBar"
        ></div>
        <div class="navbar-right">
            <el-dropdown @command="handleCommand">
                <span class="el-dropdown-link">
                    {{ username}}<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="logout">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
    components: {},
    computed: {
        ...mapGetters(['sidebar', 'username']),
        ...mapState({
            username: state => state.user.name
        })
    },
    methods: {
        toggleSideBar: function() {
            this.$store.dispatch('app/toggleSidebar')
        },
        handleCommand(command) {
            this[command]()
        },
        logout: async function() {
            await this.$store.dispatch('user/logout')
            console.log(this.$router, this.$route)
            this.$router.push(`/login?redirect=${this.$route.fullPath}`)
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
        padding-right: 10px;
    }
}
</style>