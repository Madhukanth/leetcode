/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
  //     const dp = Array(amount + 1).fill(0);
  //     dp[0] = 1;

  //     coins.forEach(coin => {
  //         for(let idx=coin; idx <= amount; ++idx) {
  //             dp[idx] = dp[idx] + dp[idx - coin];
  //         }
  //     });

  //     return dp[amount];

  const n = coins.length;
  const dp = new Array(n + 1).fill().map(() => new Array(amount + 1).fill(0));

  // Including any coins we can bring total amount 0(by excluding it)
  for (let i = 0; i <= n; i++) {
    dp[i][0] = 1;
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= amount; j++) {
      const coinVal = coins[i - 1];
      if (coinVal > j) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - coinVal]; // Either include the coin or exclude it
      }
    }
  }

  return dp[n][amount];
};
