function height(node) {
  // base case: null node has height 0
  if (node === null) return 0;

  // height = 1 (current node) + maximum height of its subtrees
  return 1 + Math.max(height(node.left), height(node.right));
}


var diameterOfBinaryTree = function (root) {
  // empty tree has diameter 0
  if (root === null) {
    return 0;
  }

  // find the height of the left and right subtrees
  let leftHeight = height(root.left);
  let rightHeight = height(root.right);

  // diameter through root = left height + right height
  let diameter = leftHeight + rightHeight;

  return diameter;
};
