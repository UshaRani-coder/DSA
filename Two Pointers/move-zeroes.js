
var moveZeroes = function (nums) {
    let nextPos = 0;

    //Step 1: whenever we find a non-zero element in the array, we copy that element to index nextPos.Then move nextPos forward.
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[nextPos] = nums[i];
            nextPos++;
        }

    }
    //But after this step, remaining elements at the end (3,12) will be overwritten. So, after working with all non-zeroes, fill all the remaining positions with 0
    for (let i = nextPos; i < nums.length; i++) {
        nums[i] = 0;
    }
};

// “Why is this two pointer?”
// “I use one pointer to iterate through the array and another to track the position where the next valid element should be placed. This allows me to rearrange the array in-place in O(n) time.”