/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canPartition = function (nums) {
  let sum = nums.reduce((acc, cur) => acc + cur);
  if (sum % 2 === 1) {
    return false;
  }
  sum /= 2;
  let dp = new Array(nums.length + 1).fill(0).map(() => new Array(sum + 1));
  for (let i = 0; i < dp.length; i++) {
    for (let j = 0; j < dp[i].length; j++) {
      if (i === 0 || j === 0) {
        dp[i][j] = false;
        continue;
      }

      if (nums[i - 1] > j) {
        dp[i][j] = dp[i - 1][j];
        continue;
      }

      if (nums[i - 1] === j) {
        dp[i][j] = true;
        continue;
      }

      dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]];
    }
  }
  return dp[nums.length][sum];
  // T.C: O(M*N), M = half of sum, N = length of given array
  // S.C: O(M*N)
};
