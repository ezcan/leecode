/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const len = nums.length - 1
  for (let i = 0; i < len; i++) {
    let idx = nums.lastIndexOf(target - nums[i]);
    if (idx !== -1 && i !== idx) {
      return [i, idx]
    }
  }
};