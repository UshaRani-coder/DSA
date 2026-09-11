var invertTree = function (root) {
    // if root is null then there's no node to do inversion
    if (root === null) {
        return null;
    }

    // swap root's left and right
    let temp = root.left;
    root.left = root.right;
    root.right = temp;

    // invert recursively
    invertTree(root.left)
    invertTree(root.right)
    
    return root;
};

// Time: O(n) — visits every node once
// Space: O(h) — recursion call stack, where h is the tree height