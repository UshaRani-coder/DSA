var removeDuplicates = function (nums) {

    // nextPos indicates where the next allowed element should be placed in the array
    let nextPos = 2;

    // Start from index 2 because:
    // - First two elements are always allowed
    // - We only need to check from the 3rd element onwards
    for (let i = 2; i < nums.length; i++) {

        // Compare current element with the last second valid element in our constructed array
        // If they are different, it means we haven't taken this element twice yet
        if (nums[i] !== nums[nextPos - 2]) {

            // Place the current element at the next valid position
            nums[nextPos] = nums[i];

            // Move nextPos forward
            nextPos++;
        }
    }

    // nextPos represents the count of valid elements (k)
    return nextPos;
};