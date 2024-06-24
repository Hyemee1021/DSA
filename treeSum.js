// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const treeSum = (root) => {
  //subtree sum
  if (root === null) {
    return 0;
  }
  let result = 0;
  //take node
  function sum(node) {
    if (node === null) {
      return 0;
    }
    //take its val
    result += node.val;

    sum(node.left);
    sum(node.right);
  }
  //initiate
  sum(root);
  return result;
};

module.exports = {
  treeSum,
};
