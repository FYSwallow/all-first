
const tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  }
}

const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: '我是超级管理员',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin'
  },
  'editor-token': {
    roles: ['editor'],
    introduction: '我是普通用户',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  }
}

module.exports = [
  // 用户登录
  {
    url: '/react-template/user/login',
    type: 'post',
    response: config => {
      const { username } = config.body
      const token = tokens[username]
        
      console.log(token)
      // mock error
      if (!token) {
        return {
          code: 60204,
          message: '用户名或者密码不正确'
        }
      }

      return {
        code: 20000,
        data: token
      }
    }
  },

  // 获取用户信息
  {
    url: '/react-template/user/info\.*',
    type: 'get',
    response: config => {
      const { token } = config.query
      const info = users[token]

      // mock error
      if (!info) {
        return {
          code: 50008,
          message: '登录失败,不能获取用户详情'
        }
      }

      return {
        code: 20000,
        data: info
      }
    }
  },

  // 用户退出
  {
    url: '/react-template/user/logout',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: '操作成功'
      }
    }
  }
]
