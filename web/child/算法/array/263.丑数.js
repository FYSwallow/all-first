/* 
给你一个整数 n ，请你判断 n 是否为 丑数 。如果是，返回 true ；否则，返回 false 。

丑数 就是只包含质因数 2、3 和/或 5 的正整数。
*/

/**
 * @param {number} n
 * @return {boolean}
 */
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