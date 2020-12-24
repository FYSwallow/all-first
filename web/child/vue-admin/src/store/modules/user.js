import { login, getInfo} from '@/api/user'
import {setToken} from '@/utils/auth'

const state = {
    token: '',
    name: '',
    avatar: '',
    roles: []
}

const mutations = {
    SET_TOKEN: function(state, token) {
        state.token = token
    },
    SET_NAME: function(state, name) {
        state.name = name
    },
    SET_AVATAR: function(state, avatar) {
        state.avatar = avatar
    },
    SET_ROLES: function(state, roles) {
        state.roles = roles
    }
}

const actions = {
    login: function({commit}, userInfo) {
        const {username, password} = userInfo
        return new Promise((resolve, reject) => {
            login({ username: username.trim(), password: password }).then(
                response => {
                    const {data} = response
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
    getInfo: function({state, commit}) {
        return new Promise((resolve, reject) => {
            getInfo(state.token).then(response => {
                const {data} = response
                const { name, avatar, roles } = data

                commit('SET_ROLES', roles)
                commit('SET_NAME', name)
                commit('SET_AVATAR', avatar)
                resolve()
            }).catch(error => {
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