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
 * @return {boolean}
 */
var isBalanced = function (root) {
  // Helper function to get the height of a tree
  function getHigh(node) {
    if (node === null) return 0;

    let leftHeight = getHigh(node.left);
    let rightHeight = getHigh(node.right);

    // If the subtree is not balanced, return -1
    if (
      leftHeight === -1 ||
      rightHeight === -1 ||
      Math.abs(leftHeight - rightHeight) > 1
    ) {
      return -1;
    }

    // Return the height of the tree
    return Math.max(leftHeight, rightHeight) + 1;
  }

  // Start the recursion from the root
  return getHigh(root) !== -1;
};
