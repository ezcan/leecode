/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let temp = target - nums[i];
    let idx = nums.indexOf(temp);
    if (idx !== -1 && i !== idx) {
      return [i, idx]
    }
  }
};