/**
 * 有序数组去重， 最多有两位相同，从后往前遍历， 有相同的值就直接删除，
 * 从前往后会导致遍历的某项数不稳定，删除会使nums中的顺序发生变化
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let n = nums.length
    if (n <=2) {
        return n
    }
    let index = n - 2
    while (index >= 0 ) {
        if (nums[index] === nums[index + 2]) {
            nums.splice(index, 1)
        }
        index--
    }
};

/**
 * 有序数组去重， 最多有两位相同，从后往前遍历， 有相同的值就直接删除，
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates2 = function(nums) {
    let n = nums.length
    if (n <=1) {
        return n
    }
    let slow = 1, fast = 1
    while (fast < n) {
        if (nums[slow - 1] != nums[fast]) {
            nums[slow] = nums[fast]
            ++slow
        }
        ++fast
    }
    return slow
};


console.log(removeDuplicates([0,0,1,1,1,1,2,3,3]))