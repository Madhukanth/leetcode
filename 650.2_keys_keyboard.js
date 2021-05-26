/**
 * @param {number} n
 * @return {number}
 */
const minSteps = function (n) {
  let q = [[1, 0], null];
  let depth = 0;
  let visited = new Map();

  while (q.length) {
    let node = q.shift();
    if (node === null) {
      if (q.length) {
        depth++;
        q.push(null);
      }
    } else {
      let quantity = node[0];
      let cache = node[1];
      const key = `${quantity}-${cache}`;
      if (visited.has(key)) {
        continue;
      }

      if (quantity === n) {
        return depth;
      }

      if (quantity + cache <= n) {
        q.push([quantity, quantity]); // copyAll
        q.push([quantity + cache, cache]); // paste
      }

      visited.set(key, true);
    }
  }
};
