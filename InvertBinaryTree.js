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
var invertTree = function(root) {
  //recersive
  //base cae1- root===null
  if(root === null){
    return []
  }

inverted(root)
};

function inverted(root){
  
  const right = root.right;

  const left = right;
  right = root.left;
  
  return[root.val, left.val, right.val]


}