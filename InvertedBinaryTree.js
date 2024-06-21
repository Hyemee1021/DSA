/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.left = (left === undefined ? null : left);
 *     this.right = (right === undefined ? null : right);
 * }
 */

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function solution(root) {
  if (!root) {
    return null;
  }

  let temp = root.left;
  root.left = root.right;
  root.right = temp;

  solution(root.left);
  solution(root.right);

  return root;
}

// Example usage:
// Create the binary tree
let root = new TreeNode(2);
root.left = new TreeNode(1);
root.right = new TreeNode(3);

console.log("Original tree:");
console.log(root);

// Invert the binary tree
let invertedTree = solution(root);

console.log("Inverted tree:");
console.log(invertedTree);
