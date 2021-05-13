/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
const generateTrees = function (n) {
  if (n === 0) return [null];

  return generateSubTree(1, n);
};

const generateSubTree = (start, end) => {
  if (start > end) {
    return [null];
  }

  const allTrees = [];

  for (let i = start; i <= end; i++) {
    const leftTrees = generateSubTree(start, i - 1);
    const rightTrees = generateSubTree(i + 1, end);

    for (let left of leftTrees) {
      for (let right of rightTrees) {
        const root = new TreeNode(i);
        root.left = left;
        root.right = right;
        allTrees.push(root);
      }
    }
  }

  return allTrees;
};
