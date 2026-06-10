var search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        // Target found
        if (nums[mid] === target) {
            return mid;
        }

        // If left half is sorted
        if (nums[left] <= nums[mid]) {

            // If target lies in the left sorted half
            if (target >= nums[left] && target < nums[mid]) {
                // Keep the left half and search there
                right = mid - 1;
            } else {
                // Target is not in the left sorted half. so discard the left half
                left = mid + 1;
            }

        }
        // If right half is sorted
        else {
            // If target lies in the right sorted half
            if (target > nums[mid] && target <= nums[right]) {
                // Keep the right half and search there
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return -1;
};