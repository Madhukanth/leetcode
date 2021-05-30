/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const canPartitionKSubsets = function (nums, k) {
  const total = nums.reduce((acc, cur) => acc + cur, 0);
  if (total % k != 0) return false;

  const subset = total / k;
  const memo = new Set();

  function partition(idx, sum, count) {
    if (count === k) return true;

    const key = nums.join();
    if (memo.has(key)) return false;

    if (sum === subset) return partition(0, 0, count + 1);
    if (sum > subset) return false;

    for (let i = idx; i < nums.length; i++) {
      if (nums[i] === null) continue;
      const num = nums[i];
      nums[i] = null;
      if (partition(i + 1, sum + num, count)) return true;
      nums[i] = num;
    }

    memo.add(key);
    return false;
  }
  return partition(0, 0, 0);
};
