/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (P) {
  const len = P.length;

  if (len === 0 || len === 1) return 0;

  if (len === 2 && P[1] > P[0]) return P[1] - P[0];

  if (len === 2 && P[0] >= P[1]) return 0;

  const dp = new Array(len).fill().map(() => new Array(2).fill(0));

  // 0th day, I have no stock
  dp[0][0] = 0;

  // 0th day, I have stock
  dp[0][1] = -P[0];

  // 1st day, I have no stock
  dp[1][0] = Math.max(dp[0][0], dp[0][1] + P[1]);

  // 1st day, I have stock
  dp[1][1] = Math.max(dp[0][1], dp[0][0] - P[1]);

  for (let i = 2; i < len; i++) {
    // I have no stock on i th day, either I am carry forwarding with no stock or i sold on i th day
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + P[i]);

    // I have stock on i th day, either I am carryforwarding with stock or i bought the stock on i th day
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 2][0] - P[i]);
  }

  return dp[len - 1][0];
};
