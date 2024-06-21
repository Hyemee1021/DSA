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
 * @return {TreeNode}
 */

function solution(root) {
  //edge case
  if (root === null) {
    return [];
  }
  //edge case
  if (root.left === null || root.left === null) {
    //dont swtich
  }
  //root.left <-> root.right
  swtich(root);
  //return root
  return root;
}
//tho function just swtich val
function swtich(root) {
  root.left = root.right;
}

console.log(solution([2, 1, 3]));
