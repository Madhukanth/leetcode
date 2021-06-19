/**
 * @param {string} source
 * @param {string} target
 * @return {number}
 */
const shortestWay = function (source, target) {
  let p = 0;
  let count = 0;
  while (p < target.length) {
    let k = 0;

    const tmp = p;
    while (k < source.length) {
      if (target[p] === source[k]) p++;
      k++;
    }

    if (tmp === p) {
      return -1;
    }

    count++;
  }

  return count;
};
