import request from '../utils/request'

export function reqLogin(data) {
  return request({
    url: '/react-template/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/react-template/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/react-template/user/logout',
    method: 'post'
  })
}
