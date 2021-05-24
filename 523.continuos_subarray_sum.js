/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const checkSubarraySum = function (nums, k) {
  const memo = new Map();
  let cumSum = 0;
  for (let i = 0; i < nums.length; i++) {
    cumSum += nums[i];
    if (cumSum % k === 0 || cumSum === 0) {
      if (i + 1 >= 2) return true;
    }

    if (memo.has(cumSum % k)) {
      const subArrLen = i - (memo.get(cumSum % k) + 1) + 1;
      if (subArrLen >= 2) return true;
    } else {
      memo.set(cumSum % k, i);
    }
  }

  return false;
};
