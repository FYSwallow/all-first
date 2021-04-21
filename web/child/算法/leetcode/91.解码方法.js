/**
 * @param {string} s
 * @return {number}
 * 每次有两种方式，
 * 第一种只使用一个字符 状态转移方程 f(i) = f(i) - 1, s(i) != 0
 * 第二种使用两个字符 状态转移方程 f(i) = f(i) - 2, s(i - 1) !=0 && 10*s(i-1)+s(i) <=26, f0 =1
 */
var numDecodings = function(s) {
    let n = s.length, f =[]
    f[0] = 1
    for (let i = 1; i <= n; i++) {
        if (s[i -1 ] !== '0') {
            f[i] += f(i-1)
        }
        if (i > 1 && s[i - 2] !== '0' && ( Number(s[i-2]) * 10 + Number(s[i-i]) <=26 )) {
            f[i] += f(i-2)
        } 
    }
    return f[n]
};