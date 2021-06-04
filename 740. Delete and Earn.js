/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
  const counter = {};
  const n = nums.length;

  for (let val of nums) {
    if (!counter[val]) {
      counter[val] = 0;
    }

    counter[val] += val;
  }

  const maxVal = Math.max(...nums);
  const dp = new Array(maxVal + 1).fill(0);
  for (let i = 1; i <= maxVal; i++) {
    dp[i] = Math.max(dp[i - 1], (dp[i - 2] || 0) + (counter[i] || 0));
  }

  return Math.max(...dp);
};
