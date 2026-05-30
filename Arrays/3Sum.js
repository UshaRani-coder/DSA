var threeSum = function (nums) {
  let result = [];

  // sort array for two pointer technique
  nums.sort((a, b) => a - b);

  // fixing one element at a time
  for (let i = 0; i < nums.length; i++) {
    // optimization:
    // if current number > 0,
    // all remaining numbers(number at left(i+1) and number at right) will also be > 0
    // so sum can never become 0
    if (nums[i] > 0) break;

    // skip duplicate fixed elements
    // to avoid duplicate triplets
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    // two pointers
    let left = i + 1;
    let right = nums.length - 1;

    // search pairs(search continues only while pair has two different positions)
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];

      // found valid triplet
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        // move both pointers
        left++;
        right--;

        // skip duplicate left values
        while (left < right && nums[left] === nums[left - 1]) {
          left++;
        }

        // skip duplicate right values
        while (left < right && nums[right] === nums[right + 1]) {
          right--;
        }
      }

      // need bigger sum
      else if (sum < 0) {
        left++;
      }

      // need smaller sum
      else {
        right--;
      }
    }
  }

  return result;
};
