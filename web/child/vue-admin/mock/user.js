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
      introduction: 'I am a super administrator',
      avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      name: 'Super Admin'
    },
    'editor-token': {
      roles: ['editor'],
      introduction: 'I am an editor',
      avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      name: 'Normal Editor'
    }
  }

module.exports = [
  {
    url: '/vue-element-admin/user/login',
    type: 'post',
    response: config => {
        const {username} = config.body
        const token = tokens[username]

        if (!token) {
            return {
              code: 60204,
              message: '用户名或者密码不存在'
            }
          }
    
          return {
            code: 20000,
            data: token
          }
    }
  },
  {
    url: '/vue-element-admin/user/info',
    type: 'get',
    response: config => {
        const {token} = config.query
        const info = users[token]

        if (!token) {
            return {
              code: 50008,
              message: '登录失败,无法获取用户信息'
            }
          }
    
          return {
            code: 20000,
            data: info
          }
    }
  },
]