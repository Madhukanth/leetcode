/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  const n = prices.length;

  if (n <= 1) return 0;

  let leftMin = prices[0];
  let rightMax = prices[n - 1];

  let leftProfits = new Array(n).fill(0);
  let rightProfits = new Array(n + 1).fill(0);

  for (let day = 1; day < n; day++) {
    leftProfits[day] = Math.max(leftProfits[day - 1], prices[day] - leftMin);
    leftMin = Math.min(leftMin, prices[day]);

    let r = n - day;
    rightProfits[r] = Math.max(rightProfits[r + 1], rightMax - prices[r]);
    rightMax = Math.max(rightMax, prices[r]);
  }

  let maxProfit = 0;
  for (let day = 0; day < n; day++) {
    maxProfit = Math.max(maxProfit, leftProfits[day] + rightProfits[day + 1]);
  }

  return maxProfit;
};
