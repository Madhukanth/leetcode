/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
  const adjacencyList = new Map();

  const visited = new Map();

  for (let [from, to, price] of flights) {
    if (!adjacencyList.has(from)) {
      adjacencyList.set(from, []);
    }

    adjacencyList.set(from, [...adjacencyList.get(from), [to, price]]);
  }

  const queue = [[0, src, k + 1]];

  while (queue.length) {
    queue.sort((a, b) => b[0] - a[0]);

    const [cost, from, stops] = queue.pop();
    visited.set(from, stops);

    if (from === dst) return cost;

    if (stops === 0 || !adjacencyList.has(from)) continue;

    for (let [nextCity, price] of adjacencyList.get(from)) {
      if (visited.has(nextCity) && visited.get(nextCity) >= stops - 1) {
        continue;
      }

      queue.push([cost + price, nextCity, stops - 1]);
    }
  }

  return -1;
};
