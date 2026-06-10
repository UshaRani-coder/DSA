var findMin = function (nums) {
    let left = 0;
    let right = nums.length - 1;

    // Keep searching until only one element remains
    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        // Mid is in the left sorted portion, so the minimum must be on the right side
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } 
        // Mid is in the right sorted portion,so the minimum is at mid or to the left
        else {
            right = mid;
        }
    }

    // left and right meet at the minimum element
    return nums[left];
};