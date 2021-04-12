/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let l = 0, right = nums.length - 1
    while(l < right) {
        let mid = Math.floor((l + right)/2)
        if (nums[l] < nums[right]) {
            right--
        } else {
            l = mid + 1
        }
    }
    return nums[l]
}