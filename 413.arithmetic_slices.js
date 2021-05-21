/**
 * @param {number[]} nums
 * @return {number}
 */
const numberOfArithmeticSlices = function (nums) {
  const n = nums.length;
  if (n < 3) return 0;

  let dp = 0;
  let ans = 0;
  for (let i = 2; i < n; i++) {
    if (nums[i] - nums[i - 1] === nums[i - 1] - nums[i - 2]) {
      dp++;
      ans += dp;
    } else {
      dp = 0;
    }
  }

  return ans;
};
