var isSameTree = function (p, q) {
    //both trees end
    if (p === null && q === null) {
        return true;
    }
    //only one tree ends
    if (p === null || q === null) {
        return false;
    }
    return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};