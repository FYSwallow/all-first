const Mock = require('mockjs')
const user = require('./user')

const mocks = [
  ...user,
]


for (const i of mocks) {
    Mock.mock(new RegExp(i.url), i.type || 'get', i.response)
}


