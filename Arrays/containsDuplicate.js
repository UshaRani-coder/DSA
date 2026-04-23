//Bruteforce approach
function containsDuplicate(nums) {
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            if(nums[i] === nums[j]){
                return true
            }
        }
        
    }
    return false
}

containsDuplicate([1, 2, 3,1]);

// Time complexity: O(n square) as both the loops run n times. 
// Space complexity: O(1)  since no extra space is used

//Optimized Solutions
function containsDuplicate(nums) {
  let map = {};
  for (let num of nums) {
    map[num] = (map[num] || 0) + 1;

    if (map[num] > 1) {
      return true;
    } 
  }
  return false
}

containsDuplicate([1, 2, 3, 1]);

//Time complexity O(n)

function containsDuplicate(nums) {
 let set = new Set()
 for(let num of nums) // O(n)
    { 
 if(set.has(num)){ //O(1)
    return true
 }
 set.add(num) //O(1)
 }
 return false;
}

console.log(containsDuplicate([1, 2, 3, 4, 5]));

//Time complexity O(n) : O(n) + O(1) + O(1)
// Space complexity O(n) as set has to store all unique elements