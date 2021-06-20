/**
 * @param {string[]} prices
 * @param {number} target
 * @return {string}
 */
const minimizeError = function (prices, target) {
  let prevMap = new Map();
  prevMap.set(0, 0);

  for (let price of prices) {
    const newMap = new Map();

    const floorVal = Math.floor(price);
    const floorError = price - floorVal;

    const ceilVal = Math.ceil(price);
    const ceilError = ceilVal - price;

    for (let [prevSum, prevError] of prevMap) {
      if (prevSum > target) continue;

      const newSumFloor = prevSum + floorVal;
      const newErrSumFloor = prevError + floorError;

      newMap.set(
        newSumFloor,
        newMap.has(newSumFloor)
          ? Math.min(newMap.get(newSumFloor), newErrSumFloor)
          : newErrSumFloor
      );

      const newSumCeil = prevSum + ceilVal;
      const newErrorSumCeil = prevError + ceilError;

      newMap.set(
        newSumCeil,
        newMap.has(newSumCeil)
          ? Math.min(newMap.get(newSumCeil), newErrorSumCeil)
          : newErrorSumCeil
      );
    }

    prevMap = newMap;
  }

  return prevMap.has(target) ? prevMap.get(target).toFixed(3) : "-1";
};
