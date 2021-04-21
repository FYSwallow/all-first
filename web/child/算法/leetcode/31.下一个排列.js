/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    let n = nums.length - 2
    while (n >=0 && nums[n] > nums[n + 1]) {
        n --
    }
    if (n>=0) {
        for (let i = n; i < nums.length; i++) {
            if (nums[i] < nums[n]) {
                [nums[n], nums[i]] = [nums[i], nums[n]]
            }
        }
    } else {
        let l = 0, r = nums.length - 1
        while (l < r) {
            [nums[r], nums[l]] = [nums[l], nums[r]]
            l++, r--
        }
    }

};

nextPermutation([1, 2, 3]);
