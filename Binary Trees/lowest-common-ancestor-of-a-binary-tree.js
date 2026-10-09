var lowestCommonAncestor = function (root, p, q) {
    
  // Stop if root is null or a target node is found(no need to go deeper/lower)
  if (root === null || root === p || root === q) {
    return root;
  }

  // Search both subtrees
  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);

  // Targets found on opposite sides
  if (left !== null && right !== null) {
    return root;
  }

  // Return the non-null result
  return left !== null ? left : right;
};
