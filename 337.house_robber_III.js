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
const rob = function (root) {
  function helper(node) {
    if (!node) return [0, 0];

    let left = helper(node.left);
    let right = helper(node.right);

    let rob = node.val + left[1] + right[1];
    let notRob = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);

    return [rob, notRob];
  }

  let ans = helper(root);
  return Math.max(ans[0], ans[1]);
};
