export const setting = {
    title: 'react-admin', //基础名
    showSettings: true, // 是否显示右侧设置
    tagsView: true, //导航栏标签是否显示
    fixedHeader: false, // 头部排版
    sidebarLogo: false, // 侧边栏logo展示
}
/**
 * 初始自带用户权限与角色
 */
export const userList = [
    {
        key: '1',
        name: '张三',
        phone: 13288487566,
        createTime: Date.now() - 3600000,
        role: 'admin',
    },
    {
        key: '2',
        name: '李四',
        phone: 13388487566,
        createTime: Date.now() - 3600000,
        role: 'guest',
    },
    {
        key: '3',
        name: '王五',
        phone: 15265445933,
        createTime: Date.now() - 3600000,
        role: 'admin',
    },
]

export const roleList = [
    {
        key: '1',
        role: 'admin',
        phone: 13288487566,
        createTime: Date.now() - 3600000,
        description: '管理员',
        permission: ["/dashboard", "/nested","/table", "/nested/menu1", "/nested/menu2", "/nested/menu1/menu1-1", "/nested/menu1/menu1-2", "/nested/menu1/menu1-1/menu1-1-1", "/nested/menu1/menu1-1/menu1-1-2", "/h5", "/drag","/resize", "/permission", "/permission/role", "/permission/user", "https://github.com/PanJiaChen/vue-element-admin"]
    },
    {
        key: '2',
        role: 'editor',
        phone: 13388487566,
        createTime: Date.now() - 3600000,
        description: '普通用户',
        permission: ["/dashboard", "/nested/menu1/menu1-1/menu1-1-1", "/nested/menu1/menu1-2", "/nested/menu2", "/permission/role", "https://github.com/PanJiaChen/vue-element-admin", "/drag"]

    },
    {
        key: '3',
        role: 'guest',
        phone: 15265445933,
        createTime: Date.now() - 3600000,
        description: '游客预览',
        permission: ["/nested", "/nested/menu1", "/nested/menu2", "/nested/menu1/menu1-1", "/nested/menu1/menu1-2", "/nested/menu1/menu1-1/menu1-1-1", "/nested/menu1/menu1-1/menu1-1-2", "/dashboard", "https://github.com/PanJiaChen/vue-element-admin"]
    },
]