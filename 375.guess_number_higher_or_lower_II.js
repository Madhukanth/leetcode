/**
 * @param {number} n
 * @return {number}
 */
const getMoneyAmount = function (n) {
  const map = new Map();

  function getCost(start, end) {
    if (start >= end) return 0;

    const key = `${start}-${end}`;
    if (map.has(key)) return map.get(key);

    let min = Infinity;

    for (let i = start; i <= end; i++) {
      const res = Math.max(getCost(start, i - 1), getCost(i + 1, end)) + i;
      min = Math.min(min, res);
    }

    map.set(key, min);
    return min;
  }

  return getCost(1, n);
};
