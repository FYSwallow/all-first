/* 
  常见错觉， 优先使用最大值
  动态规划组成部分之一： 确定状态， 最后一步
                  二： 状态转移方程
                  三： 初始条件和边界情况 
                  四： 计算顺序（下一个计算逻辑包含已经计算过的）
*/

/* 
    最少硬币找零问题， 银币面额[1, 5, 10, 25]， 找钱 36
    最优策略：a1, a2, a3,...ak = 36
    最后一步： 一定有最后的硬币ak， 前面的硬币总和 36 - ak。
        确定状态： 1.不关心前面的 k -1枚银币是什么结果。 2.最优策略， 36-ak 最小
        状态转移方程 ： 状态f（x） = 最少用多少银币拼出来
        最小值：f（36）= min（f（36 - 1）+ 1， f（36 - 5）+ 1， f（36 - 10）+ 1， f（36 - 25）+ 1）
        初始条件： f（0）= 0
*/
/* function minCoinChange(coins, amount) {
  let f = Array(37).fill(Infinity), n = coins.length
  f[0] = 0

  for (let i = 1; i <= amount; i++) {
      //f（36）= min（f（36 - 1）+ 1， f（36 - 5）+ 1， f（36 - 10）+ 1， f（36 - 25）+ 1）
      for (let j = 0; j < n; j++) {
        if(i >= coins[j] && f[i - coins[j]] != Infinity) {
          f[i] = Math.min(f[i - coins[j]] + 1, f[i])
        }
      }
  }

  if (f[amount] === Infinity) {
    f[amount] = -1
  }
  return f[amount]

}

console.log(minCoinChange([1, 5, 10, 25], 36)) */

/* 
  二维数组路径问题
    状态， 机器人有多少种方式从左上角走到（i， j）
    转移方程  f[i][j] = f[i - 1][j] + f[i][j - 1]
*/

/* function uniquePaths(m, n) {
  let f=(new Array(m + 1)).fill(new Array(n + 1))
  for (let i = 0; i < m + 1; i++) { // 行
    for (let j = 0; j < n + 1; j++) { // 列
      if(i===0 || j === 0) {
        f[i][j] = 1
      }
      else {
        f[i][j] = f[i - 1][j] + f[i][j - 1]
      } 
    }
  }
  return f[m][n]
}

console.log(uniquePaths(0, 0)) */

/* 
  存在型动态规划
  青蛙在石头零， 如果在第i快石头，就能调ai步， 能否跳到石头n-1
  状态： 设f[i]表示青蛙能不能跳到石头j
*/

/* function canJump(step) {
  let n = step.length,
    f = new Array(step + 1).fill(false);
  f[0] = true;

  for (let j = 1; j < n; j++) {
    for (let i = 0; i < j; i++) {
      if (f[i] && i + step[j] >= j) {
        f[j] = true;
        break;
      }
    }
  }
  return f[n - 1];
}

console.log(canJump([1, 2 , 3, 6])) */