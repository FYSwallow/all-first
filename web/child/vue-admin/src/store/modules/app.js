const opened = JSON.parse(localStorage.getItem('sideBarOpened'))
const state = {
    sidebar: {
        opened: opened ? opened : false,
        withoutAnimation: false 
    },
    device: 'desktop', //手机还是电脑
}

const mutations = {
    TOGGLE_SIDEBAR: function (state) {
        state.sidebar.opened = !state.sidebar.opened
        state.sidebar.withoutAnimation = false
        localStorage.setItem('sideBarOpened', state.sidebar.opened)
    },
    CLOSE_SIDEBAR: function (state, withoutAnimation) {
        state.sidebar.opened = false
        state.sidebar.withoutAnimation = withoutAnimation
    },
    TOGGLE_DEVICE: function (state, device) {
        state.device = device
    }
}

const actions = {
    toggleSidebar: function ({ commit }) {
        commit('TOGGLE_SIDEBAR')
    },
    closeSidebar: function ({ commit }, {withoutAnimation}) {
        commit('CLOSE_SIDEBAR', withoutAnimation)
    },
    toggleDevice: function ({ commit }, device) {
        commit('TOGGLE_DEVICE', device)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}