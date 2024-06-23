/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  // Helper function to calculate the height of a subtree
  function getHeight(node) {
    if (node === null) {
      return 0;
    }
    // Recursively calculate the height of left and right subtrees
    let leftHeight = getHeight(node.left);
    let rightHeight = getHeight(node.right);

    // Check if the subtree is balanced
    if (
      leftHeight === -1 ||
      rightHeight === -1 ||
      Math.abs(leftHeight - rightHeight) > 1
    ) {
      return -1; // If unbalanced, propagate -1 upwards
    }

    // Return the height of the subtree
    return Math.max(leftHeight, rightHeight) + 1;
  }

  // Start calculating height from the root
  return getHeight(root) !== -1;
};
