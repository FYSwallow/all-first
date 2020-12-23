import { login} from '@/api/user'

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
        console.log(userInfo)
        return new Promise((resolve, reject) => {
            login({ username: username.trim(), password: password }).then(
                response => {
                    const {data} = response
                    console.log(data)
                    commit('SET_TOKEN', data.token)
                    resolve()
                }
            ).catch(error => {
                console.log(error)
                reject()
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