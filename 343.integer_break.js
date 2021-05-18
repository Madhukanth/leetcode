/**
 * @param {number} n
 * @return {number}
 */
const integerBreak = function (n) {
  const dp = new Array(n + 1).fill(0);
  dp[2] = 1;

  for (var i = 3; i <= n; i++) {
    for (var j = 1; j < i; j++) {
      dp[i] = Math.max(dp[i], dp[i - j] * j, (i - j) * j);
    }
  }

  return dp[n];
};
