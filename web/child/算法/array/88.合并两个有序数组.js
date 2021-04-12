/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
/* var merge = function(nums1, m, nums2, n) {
    if (n === 0) {
        return nums1
    }
    let result = [], n1 = 0, n2 = 0, index = 0
    while (index < nums1.length) {
        if (n1 < m && n2 < n) {
            if (nums1[n1] < nums2[n2]) {
                result[index++] = nums1[n1++]
                continue
            } 
            result[index++] = nums2[n2++]
            continue
        }

        if (n1 < m) {
            result[index++] = nums1[n1++]
            continue
        }
        if (n2 < n) {
            result[index++] = nums2[n2++]
            continue
        }
    }
    nums1 = [...result]
    console.log(nums1)
    return nums1
}; */

var merge = function (nums1, m, nums2, n) {
    nums1.splice(m, nums1.length - m, ...nums2);
    nums1.sort((a, b) => a - b)
};
let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
merge(nums1, m, nums2, n)