
var containsNearbyDuplicate = function (nums, k) {
    // Creating a map to store: number -> last seen index
    let map = {}

    // Traverse the array
    for (let i = 0; i < nums.length; i++) {

        // Check if current number was seen before in the map
        if (map[nums[i]] !== undefined) {

            // Get the previous index of this number
            let prevIndex = map[nums[i]];

            // If the condition satisfied
            if ((i - prevIndex) <= k) {
                return true;
            }
        }

        // Update the map with current index (latest occurrence)
        map[nums[i]] = i
    }

    // If no such pair found after full traversal
    return false;
};


containsNearbyDuplicate([1, 0, 1, 1], 3)