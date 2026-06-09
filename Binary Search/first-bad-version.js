var solution = function (isBadVersion) {
    return function (n) {
        // Search space is versions 1 to n
        let left = 1;
        let right = n;
        // Continue until search space shrinks to one version
        while (left < right) {
            // Find middle version
            let mid = Math.floor((left + right) / 2);
            //   If mid is bad, then first bad could be the mid or somewhere before it(so shifting right to mid as anything otherthan mid will be bad however)
            if (isBadVersion(mid)) {
                right = mid;
            } else {
                // If mid is good, first bad version must be after mid
                left = mid + 1;
            }
        }
        // When left === right, we've found the first bad version
        return left;
    };
};