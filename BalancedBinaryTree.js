// Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
* @param {TreeNode} root
* @return {boolean}
*/
var isBalanced = function(root) {
  // Helper function to calculate the height of a tree
  function getHeight(node) {
      if (node === null) {
          return 0;
      }
      // Recursively get the height of the left and right subtrees
      let leftHeight = getHeight(node.left);
      let rightHeight = getHeight(node.right);
      // Check if the subtree is balanced
      // If not, return -1 to indicate imbalance
      if (leftHeight === -1 || rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1) {
          return -1;
      }
      // Return the height of the current node
      return Math.max(leftHeight, rightHeight) + 1;
  }

  // Start the recursion from the root
  return getHeight(root) !== -1;
};
