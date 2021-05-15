/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let globalMax = nums[0];
  let localMax = nums[0];
  let localMin = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let tempMin = localMin;
    localMin = Math.min(nums[i], localMin * nums[i], localMax * nums[i]);
    localMax = Math.min(nums[i], tempMin * nums[i], localMax * nums[i]);
    globalMax = Math.max(globalMax, localMax);
  }

  return globalMax;
};
