//Bruteforce approach

for(let i = 0; i<nums.length; i++){
    for (let j=0; j<nums.length; j++){
        if(nums[i]+ nums[j] === 9){
            return nums[i], nums[j]
        }
    }
}
// Time complexity : O(n square)

// with hashing
function twoSum(nums, target) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i]; 
    // find the number needed to reach target

    if (map[diff] !== undefined) {
      // check if the required number already exists in map
      return [map[diff], i]; 
      // return indices: index of diff (from map) and current index
    }

    map[nums[i]] = i; 
    // store current number with its index for future lookup
  }
}

twoSum([2, 7, 11, 15], 9)
// Time complexity : O(n)