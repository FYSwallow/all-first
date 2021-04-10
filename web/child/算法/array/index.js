// 1.创建数组

let arr = [1, 2, 3, 4, 5, 6];
let arr1 = new Array(); //[]
let arr2 = new Array(7); //[undefined, ...], length = 7
let arr3 = new Array(1, 2, 3, 4); // [1, 2, 3, 4]
let arr4 = Array.from(arr, item => item % 2 == 0) //[ false, true, false, true, false, true ]
let arr5 = Array.of(1, 2, 3, 4); // [1, 2, 3, 4]

console.log(arr, arr1, arr2, arr3, arr4)


// 2.基本方法

// 2.1 添加方法 push, unshift

let nums = [2, 3, 1, 4, 5, 6, 3];

// 末尾添加元素 nums.push(7)
nums[nums.length] = 7; //[2, 3, 1, 4, 5, 6, 3, 7]

// 末尾删除 pop

nums.length = nums.length - 1;
// console.log(nums);

//  数组首位添加元素 nums.unshift(1)

function myUnshift(arr, num) {
  let index = arr.length;

  while (index > 0) {
    arr[index] = arr[index - 1];
    index--;
  }
  arr[0] = num;
  return arr;
}

// console.log(myUnshift(nums, 1));

// 首位删除 shift()

function myShift(nums) {
  let length = nums.length - 1,
    index = 0;
  while (index < length - 1) {
    nums[index] = nums[index + 1];
    index++;
  }
  nums.length = nums.length - 1;
  return nums;
}

// console.log(myShift(nums));

// 任意位置添加， 替换， 删除 splice(start, length, replace)
// console.log(nums.splice(1, 2, 9, 9), nums);
// console.log(nums.slice(-4, -2), nums); // 不会改变原数组

/* 
croncat 连接两个数组, 可以是数组，也可以是其他类型
every 遍历每个元素是否都符合条件， 是的话返回true 
filter 返回满足条件的所有元素
forEach 遍历每一项, 没有返回值
join 将数组变成字符串
indexOf 返回数组中与给定数组相等的索引，没有返回-1
lastIndexOf 返回数组中与给定数组相等的最大索引，没有返回-1
map 通过对数组每一项操作，返回一个新的数组
reverse 数组翻转
slice 取出数组中指定索引位置的元素，不改变原数组， 可以为负数， 相当于length - index， start > end, 否则为空
some 数组中某一项满足条件，则返回true，否则为false
sort 数组排序
toStrig 将数组作为字符串返回, 会将所有元素扁平化
valueOf 和toString类似

*/

let nums2 = [1, 2, 3, 4, 5, 6, 7];
console.log(nums2.concat(8)); // 返回新数组， 不改变原数组
console.log(nums2.concat([9])); // 返回新数组
console.log(nums2);
console.log(nums2.every((item) => item > 0));
console.log(nums2.filter((item) => item === 3));
console.log(nums2);
console.log(nums2.indexOf(3));
console.log(nums2.lastIndexOf(6));
console.log(nums2.reverse());
console.log(nums2.sort((a, b) => a - b));
console.log([1, 2, [3, 4, 9, [8]]].toString()); // 1,2,3,4,9,8
console.log([1, 2].valueOf());

// 迭代器对象

let nums3 = [1, 2, 3, 4];
nums3[Symbol.iterator] = function() {
    let index = -1 ,length = nums3.length -1
    function next() {
        index ++
        return {
            value: nums3[index],
            hasNext: index < length ? true: false
        }
    } 

    return {next}
}
let iterator = nums3[Symbol.iterator]()
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())

// 数组填充 fill(0, 1， 5), 从索引为1开始至索引为5，全部填充为1

// copyWithin 方法复制数组中的一系列元素到同一数组指定的起始位置开始覆盖,会改变原数组
let nums4 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(nums4.copyWithin(0, 4))
console.log(nums4.copyWithin(1, 4, 6), nums4)

// 判断是否包含 includes

console.log(nums4.includes(3))