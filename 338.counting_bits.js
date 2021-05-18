/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
  const dp = new Array(num + 1).fill(0);
  for (let i = 1; i <= num; i++) {
    dp[i] = dp[i & (i - 1)] + 1;
  }

  return dp;
};
