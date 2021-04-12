// 深拷贝
export const deepClone = (param) => {
    let type = Object.prototype.toString.call(param).slice(8, -1) // 获取数据类型
    let result = type === 'Array' ? [] : {}
    if (type === 'Object' || type === 'Array') {
        for (let itme in param) {
            if (param.hasOwnProperty(itme)) {
                result[itme] = deepClone(param[itme]) // 递归调用
            }
        }
    } else {
        result = param
    }
    return result
}

// 防抖函数
export const debounce = (fn, wait = 500 ) => {
    console.log(wait)
    let timer = null
    return function() {
        if (timer) clearTimeout(timer)
        timer = setTimeout(fn, wait)
    }
}

// 节流函数
export const throwttle = (fn, delay) => {
    let prev = Date.now()
    return () => {
        let now = Date.now()
        if (now - prev > delay) {
            fn()
            prev = Date.now
        }
    }
}