var removeElement = function (nums, val) {
    // Pointer to track position where next valid element should be placed
    let nextPos = 0;

    // Variable to count number of elements not equal to val (k)
    let sum = 0;

    // Traverse the array
    for (let i = 0; i < nums.length; i++) {

        // If current element is not equal to val
        if (nums[i] !== val) {

            // Place it at the next available position
            nums[nextPos] = nums[i];

            // Move nextPos forward
            nextPos++;

            // Increase count of valid elements
            sum++;
        }
    }

    // Return the count of elements not equal to val
    return sum;
};