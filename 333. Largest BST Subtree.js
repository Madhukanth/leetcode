/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var largestBSTSubtree = function (root) {
  let max = 0;
  dfs(root);
  return max;

  function dfs(node) {
    if (!node) return [Infinity, -Infinity, 0];

    const [minLeft, maxLeft, countLeft] = dfs(node.left);
    const [minRight, maxRight, countRight] = dfs(node.right);

    if (
      node.val > maxLeft &&
      node.val < minRight &&
      countLeft >= 0 &&
      countRight >= 0
    ) {
      max = Math.max(max, 1 + countLeft + countRight);
      return [
        Math.min(node.val, minLeft),
        Math.max(node.val, maxRight),
        1 + countLeft + countRight,
      ];
    }

    return [Infinity, -Infinity, -1];
  }
};
