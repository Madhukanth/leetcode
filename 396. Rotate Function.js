/**
 * @param {number[]} nums
 * @return {number}
 */
const maxRotateFunction = function (A) {
  let n = A.length;

  let sum = 0;
  let currFSum = 0;
  A.forEach((e, i) => {
    sum += e;
    currFSum += e * i;
  });

  let maxFSum = currFSum;
  for (let i = 0; i < n; i++) {
    // 1 iteration will be repeated if <n, but ans will be same
    currFSum = n * A[i] - sum + currFSum;
    maxFSum = Math.max(maxFSum, currFSum);
  }
  return maxFSum;
};
