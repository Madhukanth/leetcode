/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = function (nums) {
  let max = 0;
  let left = 0;
  let right = 0;
  let numzero = 0;

  while (right < nums.length) {
    if (nums[right] === 0) numzero++;

    while (numzero === 2) {
      if (nums[left] === 0) numzero--;

      left++;
    }

    max = Math.max(max, right - left + 1);
    right++;
  }

  return max;
};
