// 升序数组旋转多次求最小值
/**
 * 思路： 不管旋转多少次， 一定是由两个数组组成，都是递增趋势,
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let l = 0, r = nums.length - 1
    while (l < r) {
        let mid = Math.floor((l + r) / 2) + l
        if (nums[mid] < nums[r]) {
            r = mid
        } else if (nums[mid] > nums[r]){
            l = mid + 1
        } else {
            r -=1
        }
    }
    return nums[l]
};