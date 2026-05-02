var removeDuplicates = function (nums) {
    // nextPos points to the position where the next unique element should be placed
    let nextPos = 1;

    // Start from index 1 because the first element is always unique in a sorted array
    for (let i = 1; i < nums.length; i++) {

        // If current element is different from the previous one, it means we found a new unique element
        if (nums[i] !== nums[i - 1]) {

            // Place this unique element at nextPos
            nums[nextPos] = nums[i];

            // Move nextPos forward for the next unique element
            nextPos++;
        }
    }

    // nextPos also represents the count of unique elements
    return nextPos;
};