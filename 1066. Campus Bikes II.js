/**
 * @param {number[][]} workers
 * @param {number[][]} bikes
 * @return {number}
 */
const assignBikes = function (workers, bikes) {
  const n = workers.length;
  const m = bikes.length;

  let res = Infinity;
  const usedBikes = new Set();

  function getDist([x1, y1], [x2, y2]) {
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
  }

  function go(i, dist) {
    if (i === n) {
      res = Math.min(res, dist);
      return;
    }

    for (let j = 0; j < m; j++) {
      if (usedBikes.has(j)) continue;

      const d = getDist(workers[i], bikes[j]);
      usedBikes.add(j);
      go(i + 1, dist + d);
      usedBikes.delete(j);
    }
  }

  go(0, 0);
  return res;
};
