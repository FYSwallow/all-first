import { login, getInfo, logout } from '@/api/user'
import { setToken, getToken, removeToken } from '@/utils/auth'

const state = {
    token: getToken() || '',
    name: '',
    avatar: '',
    roles: []
}

const mutations = {
    SET_TOKEN: function (state, token) {
        state.token = token
    },
    SET_NAME: function (state, name) {
        state.name = name
    },
    SET_AVATAR: function (state, avatar) {
        state.avatar = avatar
    },
    SET_ROLES: function (state, roles) {
        state.roles = roles
    }
}

const actions = {
    login: function ({ commit }, userInfo) {
        const { username, password } = userInfo
        return new Promise((resolve, reject) => {
            login({ username: username.trim(), password: password }).then(
                response => {
                    const { data } = response
                    commit('SET_TOKEN', data.token)
                    setToken(data.token)
                    resolve()
                }
            ).catch(error => {
                console.log(error)
                reject()
            })
        })
    },
    getInfo: function ({ state, commit }) {
        return new Promise((resolve, reject) => {
            getInfo(state.token).then(response => {
                const { data } = response
                const { name, avatar, roles } = data

                commit('SET_ROLES', roles)
                commit('SET_NAME', name)
                commit('SET_AVATAR', avatar)
                resolve(data)
            }).catch(error => {
                reject(error)
            })
        })
    },
    logout: function ({ commit }) {
        return new Promise((resolve, reject) => {
            logout(state.token).then(() => {
                commit('SET_TOKEN', '')
                commit('SET_ROlES', [])
                removeToken()
                resolve()
            }).catch((error) => {
                reject(error)
            })
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}