/**
 * @param {number[]} nums
 * @return {number}
 */
const wiggleMaxLength = function (nums) {
  const n = nums.length;
  if (n < 2) return n;

  let down = 1;
  let up = 1;
  for (let i = 1; i < n; i++) {
    if (nums[i] > nums[i - 1]) {
      up = down + 1;
    } else if (nums[i] < nums[i - 1]) {
      down = up + 1;
    }
  }

  return Math.max(down, up);
};
