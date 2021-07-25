/**
 * @param {number} n
 * @return {number}
 */
var findDerangement = function (n) {
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 0;
  for (let i = 2; i <= n; i++) {
    dp[i] = ((i - 1) * (dp[i - 1] + dp[i - 2])) % 1000000007;
  }
  return dp[n];
};
