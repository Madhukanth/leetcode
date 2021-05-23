/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const findTargetSumWays = function (nums, target) {
  const n = nums.length;
  const dp = new Array(n).fill(0).map(() => new Array(2001).fill(0));
  if (nums[0] === 0) {
    dp[0][1000] = 2;
  } else {
    dp[0][nums[0] + 1000] = 1;
    dp[0][-nums[0] + 1000] = 1;
  }

  for (let i = 1; i < n; i++) {
    for (let sum = -1000; sum <= 1000; sum++) {
      if (dp[i - 1][sum + 1000] > 0) {
        dp[i][sum + nums[i] + 1000] += dp[i - 1][sum + 1000];
        dp[i][sum - nums[i] + 1000] += dp[i - 1][sum + 1000];
      }
    }
  }

  return target > 1000 ? 0 : dp[n - 1][target + 1000];
};
