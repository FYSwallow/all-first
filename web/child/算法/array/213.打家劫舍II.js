/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if ((nums.length === 1)) {
    return nums[0];
  }
  let a = 0,
    b = 0,
    n = nums.length;
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      a += nums[i];
      continue;
    }
    b += nums[i];
  }
  if ((n - 1) % 2 === 0) {
    a -= Math.min(nums[0], nums[n - 1]);
  }
  return Math.max(a, b);
};

console.log(rob([1,1,1]));

