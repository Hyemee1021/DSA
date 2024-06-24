const breadthFirstValues = (root) => {
  if (root === null) {
    return [];
  }

  const result = [];
  const queue = []; // Queue to store nodes

  // Initialize the queue with the root node
  queue.push(root);

  while (queue.length > 0) {
    // Dequeue a node from the front of the queue
    let node = queue.shift();

    // Visit the node (push its value to the result array)
    result.push(node.val);

    // Enqueue the left and right children (if they exist)
    if (node.left !== null) {
      queue.push(node.left);
    }
    if (node.right !== null) {
      queue.push(node.right);
    }
  }

  return result;
};

module.exports = {
  breadthFirstValues,
};
