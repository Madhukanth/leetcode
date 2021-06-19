/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
const mincostTickets = function (days, costs) {
  let sums = new Array(days[days.length - 1] + 1);
  sums.fill(0);

  let travelDays = {};
  for (let i = 0; i < days.length; i++) {
    travelDays[days[i]] = true;
  }

  for (let i = 1; i < sums.length; i++) {
    if (travelDays.hasOwnProperty(i)) {
      let calcs = [];

      //one day
      calcs.push(costs[0] + sums[i - 1]);

      //weeklong
      let weeklong = i >= 7 ? costs[1] + sums[i - 7] : costs[1];
      calcs.push(weeklong);

      //30 day
      let thirtyDays = i >= 30 ? costs[2] + sums[i - 30] : costs[2];
      calcs.push(thirtyDays);

      sums[i] = Math.min(...calcs);
    } else {
      sums[i] = sums[i - 1];
    }
  }
  return sums[sums.length - 1];
};
