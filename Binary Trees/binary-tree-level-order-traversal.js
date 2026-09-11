var levelOrder = function (root) {
  // empty tree
  if (root === null) return [];

  let queue = [];
  queue.push(root);
  let result = [];

  while (queue.length > 0) {
    let size = queue.length;
    let level = [];

    // process current level size times
    for (let i = 0; i < size; i++) {
      let nodeToRemove = queue.shift();

      // add current node's value to level
      level.push(nodeToRemove.val);

      // add children for next level
      if (nodeToRemove.left) {
        queue.push(nodeToRemove.left);
      }

      if (nodeToRemove.right) {
        queue.push(nodeToRemove.right);
      }
    }

    // store all levels
    result.push(level);
  }

  return result;
};
