/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function (nums) {
  const n = nums.length;

  const dp = new Array(n + 1).fill(0);
  dp[1] = nums[0];
  for (let i = 2; i <= n; i++) {
    if (i === n) {
      dp[i] = Math.max(dp[i - 1], dp[i - 2]);
      continue;
    }

    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1]);
  }

  const dp2 = new Array(n + 1).fill(0);
  for (let i = 2; i <= n; i++) {
    dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + nums[i - 1]);
  }

  return Math.max(dp[n], dp2[n]);
};
