var diameterOfBinaryTree = function (root) {
  let diameter = 0;

  function height(node) {
    // Base case: null node has height 0
    if (node === null) return 0;

    // Find heights of left and right subtrees
    let leftHeight = height(node.left);
    let rightHeight = height(node.right);

    // Diameter passing through current node
    diameter = Math.max(diameter, leftHeight + rightHeight);

    // Return height to the parent node
    return 1 + Math.max(leftHeight, rightHeight);
  }

  height(root);

  return diameter;
};
