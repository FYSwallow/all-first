/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let n = nums.length - 1;
  while (n >= 0) {
    if (nums[n] === val) {
      nums.splice(n, 1);
    }
    index++;
  }
  return nums.length;
};
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement2 = function (nums, val) {
  let slow = 0,
    fast = 0,
    n = nums.length;
  while (fast < n) {
    if (nums[fast] !== val) {
      nums[slow++] = nums[fast];
    }
    fast++;
  }
  return slow;
};

console.log(removeElement2([3, 2, 2, 3], 3));
