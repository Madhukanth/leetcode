/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const numWays = function (n, k) {
  const dp = new Array(n + 1).fill(0);

  dp[0] = 0;
  dp[1] = k;
  dp[2] = k * k;

  for (let f = 3; f <= n; f++) {
    dp[f] = (dp[f - 1] + dp[f - 2]) * (k - 1);
  }

  return dp[n];
};
