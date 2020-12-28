const getters = {
    token: state => state.user.token,
    sidebar: state => state.app.sidebar,
    permission_routes: state => state.permission.routes, // 通过校验的路由
}

export default getters