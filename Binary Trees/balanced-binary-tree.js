var height = function (root) {
    
  if (root === null) return 0;

  return 1 + Math.max(height(root.left), height(root.right));
};



var isBalanced = function (root) {
  // empty tree is balanced
  if (root === null) return true;

  // find left and right subtree heights
  let leftHeight = height(root.left);
  let rightHeight = height(root.right);

  // check current node
  let diff = Math.abs(leftHeight - rightHeight);

  if (diff > 1) {
    return false;
  }

  // check both subtrees(left and right subtrees)
  return isBalanced(root.left) && isBalanced(root.right);
};
