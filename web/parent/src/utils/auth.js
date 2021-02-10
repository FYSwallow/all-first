import Cookies from 'js-cookie'

const TokenKey = 'react-admin-token'


export function getToken() {
    return Cookies.get(TokenKey)
}

export function setToken(role) {
    return Cookies.set(TokenKey, role)
}

export function removeToken() {
    return Cookies.remove(TokenKey)
}
