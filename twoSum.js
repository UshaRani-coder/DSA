
for(let i = 0; i<nums.length; i++){
    for (let j=0; j<nums.length; j++){
        if(nums[i]+ nums[j] === 9){
            //return nums[i], nums[j]
            console.log(nums[i], nums[j])
        }
    }
}


// with hashing
function twoSum(nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    // console.log(diff)
    if (map[diff] !== undefined) {
     // return [map[diff], i];
       console.log([map[diff], nums[i]])
    }

    map[nums[i]]=nums[i];
    // console.log(map)
  }
}

twoSum([2, 7, 11, 15], 9);
