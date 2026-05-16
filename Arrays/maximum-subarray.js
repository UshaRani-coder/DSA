
// Kadane's Algorithm O(n):
// At each step, decide:
// -> continue previous subarray currentSum + nums[i] OR
// -> start new subarray from current element nums[i]

var maxSubArray = function(nums) {

    let currentSum = nums[0];  // best sum ending here
    let maxSum = nums[0];      // global best

    for (let i = 1; i < nums.length; i++) {

        // Decide: start fresh OR extend previous subarray
        currentSum = Math.max(nums[i], currentSum + nums[i]);

        // Update global maximum
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
};