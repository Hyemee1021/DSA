const depthFirstValues = (root) => {
  // Base case: if root is null, return an empty array
  if (root === null) {
    return [];
  }

  const result = [];

  // Perform depth-first traversal recursively
  const traverse = (node) => {
    if (node === null) {
      return;
    }
    // Visit the current node (push its value into the result array)
    result.push(node.val);

    // Recursively visit left and right subtrees
    traverse(node.left);
    traverse(node.right);
  };

  // Start traversal from the root node
  traverse(root);

  return result;
};

module.exports = {
  depthFirstValues,
};
