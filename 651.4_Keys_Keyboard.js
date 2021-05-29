/**
 * @param {number} n
 * @return {number}
 */
const maxA = function (n) {
  const dp = new Array(n + 1).fill(0);

  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 3;

  for (let i = 4; i <= n; i++) {
    dp[i] = dp[i - 1] + 1;
    for (let j = 1; j < i - 2; j++) {
      dp[i] = Math.max(dp[i], dp[j] + dp[j] * (i - j - 2));
    }
  }

  return dp[n];
};
