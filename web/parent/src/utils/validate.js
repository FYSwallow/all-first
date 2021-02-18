/**
 * 
 * @param {*} path 路径
 * 判断是否是一个url链接 
 */

export function isExternal(path) {
    return /^(https?:|mailto:|tel:)/.test(path)
}