/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  const n = prices.length;
  let empty = new Array(n);
  let sold = new Array(n);
  let hold = new Array(n);

  empty[0] = 0;
  sold[0] = 0;
  hold[0] = -prices[0];

  for (let i = 1; i < n; i++) {
    empty[i] = Math.max(empty[i - 1], sold[i - 1]);
    hold[i] = Math.max(hold[i - 1], empty[i - 1] - prices[i]);
    sold[i] = Math.max(sold[i - 1], hold[i - 1] + prices[i]);
  }

  return Math.max(empty.pop(), sold.pop());
};
