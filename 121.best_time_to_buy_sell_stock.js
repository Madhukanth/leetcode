/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  let max = 0;
  let buy = null;
  for (let price of prices) {
    if (buy === null) {
      buy = price;
      continue;
    }

    max = Math.max(price - buy, max);

    if (price < buy) {
      buy = price;
    }
  }

  return max;
};
