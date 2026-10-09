var isValidBST = function (root, min, max) {
  if (root === null) return true;

  // Set initial boundaries
  if (min === undefined) min = -Infinity;
  if (max === undefined) max = Infinity;

  // Check if current node violates BST boundaries
  if (root.val <= min || root.val >= max) {
    return false;
  }

  // Validate left and right subtrees with updated boundaries
  return (
    isValidBST(root.left, min, root.val) &&
    isValidBST(root.right, root.val, max)
  );
};
