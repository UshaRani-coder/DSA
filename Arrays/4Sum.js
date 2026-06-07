var fourSum = function (nums, target) {
    let result = [];

    // Sort array for two-pointer technique
    nums.sort((a, b) => a - b);

    // Fix the first number
    for (let i = 0; i < nums.length - 1; i++) {

        // Skip duplicate fixed numbers
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        // Fix the second number
        for (let j = i + 1; j < nums.length - 1; j++) {

            // Skip duplicate second fixed numbers
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;

            // Two pointers for the remaining two numbers
            let left = j + 1;
            let right = nums.length - 1;

            while (left < right) {

                let sum =
                    nums[i] +
                    nums[j] +
                    nums[left] +
                    nums[right];

                // Found a valid quadruplet
                if (sum === target) {

                    result.push([
                        nums[i],
                        nums[j],
                        nums[left],
                        nums[right]
                    ]);

                    // Move both pointers
                    left++;
                    right--;

                    // Skip duplicate values on the left
                    while (
                        left < right &&
                        nums[left] === nums[left - 1]
                    ) {
                        left++;
                    }

                    // Skip duplicate values on the right
                    while (
                        left < right &&
                        nums[right] === nums[right + 1]
                    ) {
                        right--;
                    }
                }

                // Need a larger sum
                else if (sum < target) {
                    left++;
                }

                // Need a smaller sum
                else {
                    right--;
                }
            }
        }
    }

    return result;
}
