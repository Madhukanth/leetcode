/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function (n) {
  const modulo = 1000000007;
  const dp = new Array(n + 1).fill().map(() => new Array(2).fill(0));
  dp[0][1] = 1;
  dp[1][1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i][1] = (dp[i - 1][1] + dp[i - 2][1] + dp[i - 1][0]) % modulo;
    dp[i][0] = (dp[i - 2][1] + dp[i - 2][1] + dp[i - 1][0]) % modulo;
  }

  return dp[n][1];
};
