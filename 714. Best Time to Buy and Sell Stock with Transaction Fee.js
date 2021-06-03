/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (P, F) {
  const len = P.length;

  if (len <= 1) return 0;

  const dp = new Array(len).fill().map(() => new Array(2));

  // 0th day, I have no stock
  dp[0][0] = 0;

  // 0th day, I have stock
  dp[0][1] = -P[0];

  for (let i = 1; i < len; i++) {
    // I have no stock on i th day, either I carry forwarding with no stock or I sell it today.
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + P[i] - F);

    // I have stock on i th day, either I carryforwarding with stock or I bought the stock on i th day.
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - P[i]);
  }

  return dp[len - 1][0];
};
