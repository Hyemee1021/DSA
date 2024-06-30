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
var diameterOfBinaryTree = function (root) {
  //recursion to count diameter-function

  function countDiameter(node) {
    let diameter = 0;
    if (node === null) {
      return 0;
    }
    let leftDiameter = countDiameter(node.left);
    let rightDiameter = countDiameter(node.right);

    diameter = 1 + Math.max(diameter, leftDiameter, rightDiameter);
  }

  //call the helper function here
  countDiameter(root);
  return diameter;
};
