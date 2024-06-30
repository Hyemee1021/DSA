var diameterOfBinaryTree = function (root) {
  let diameter = 0;

  // Helper function to calculate depth and update diameter
  function countDiameter(node) {
    if (node === null) {
      return 0; // If node is null, depth is 0
    }

    // Recursively calculate depth of left and right subtrees
    let leftDepth = countDiameter(node.left);
    let rightDepth = countDiameter(node.right);

    // Update diameter to be the maximum of current diameter or leftDepth + rightDepth
    diameter = Math.max(diameter, leftDepth + rightDepth);

    // Return the depth of the current node's subtree
    return Math.max(leftDepth, rightDepth) + 1;
  }

  // Start the recursive calculation from the root of the tree
  countDiameter(root);

  // Return the calculated diameter
  return diameter;
};
