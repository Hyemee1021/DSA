// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }
//  */

// /**
//  * @param {TreeNode} root
//  * @return {number[][]}
//  */
// var levelOrder = function (root) {
//   if (root === null) {
//     return [];
//   }

//   let result = [];
//   //[3]
//   let queue = [root];

//   while (queue.length > 0) {
//     //queue.length === 1 === levelSize

//     let levelSize = queue.length;
//     let currentLevel = [];

//     for (let i = 0; i < levelSize; i++) {
//       //since levelSize is 1-it iterates one time
//       let currentNode = queue.shift();
//       //currentNode === 3
//       currentLevel.push(currentNode.val);
//       //currentLevel=[3]
//       if (currentNode.left !== null) {
//         //currentNode === 3 has left
//         //queue ===[9]
//         queue.push(currentNode.left);
//       }
//       if (currentNode.right !== null) {
//         queue.push(currentNode.right);
//         //queue ===[9, 20]
//       }
//     }

//     result.push(currentLevel);
//     //[[3]]
//   }

//   return result;
// };
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (root === null) {
    return [];
  }

  let queue = [root];
  let result = [];

  while (queue.length > 0) {
    let numberInQueue = queue.length;
    //I will loop and put numbers in one array since they are in the smae level
    let eachLevel = [];

    for (let i = 0; i < numberInQueue; i++) {
      //loop through as numbers in queue
      //unqueue from front
      let currentNode = queue.shift();
      //put value into newArray
      eachLevel.push(currentNode.val);

      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }

    result.push(eachLevel);
  }
  return result;
};
