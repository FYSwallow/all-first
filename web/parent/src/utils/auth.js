import Cookies from 'js-cookie'

const TokenKey = 'react-admin-token'
const tokenList = {
    'admin': {
        tokenKey: 'admin'
    },
    'guest': {
        tokenKey: 'guest'
    }
}

export function getToken() {
    return Cookies.get(TokenKey)
}

export function setToken(role) {
    return Cookies.set(TokenKey, tokenList[role].tokenKey)
}

export function removeToken() {
    return Cookies.remove(TokenKey)
}
