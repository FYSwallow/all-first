/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    let cache = [], number = 0
    while (cache.length <= n) {
        const flag = isUgly(number)
        if (flag) {
            cache.push(number)
        }
        number ++
    }
};

var isUgly = function(n) {
    if (n <= 0) return false
    let arr = [2, 3 ,5]
    for (const key of arr) {
        while (n % key === 0) {
            n /=key
        }
    }
    return n ===1
};