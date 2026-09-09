// Check if the array is sorted in ascending order using recursion
function isSorted(arr, index = 0) {
  // Base case: reached the last element
  if (index === arr.length - 1) {
    return true;
  }

  // Check if the remaining array is sorted
  let nextElement = isSorted(arr, index + 1);

  // Current element should be <= next element
  // and the remaining array should also be sorted
  return arr[index] <= arr[index + 1] && nextElement;
}

console.log(isSorted([1, 2, 3, 4, 5])); // true




// GOING DOWN ↓

// index 0 → 1 <= 2 → wait
// index 1 → 2 <= 3 → wait
// index 2 → 3 <= 4 → wait
// index 3 → 4 <= 5 → wait
// index 4 → return true

// COMING BACK UP ↑

// index 3 → 4 <= 5 && true → true
// index 2 → 3 <= 4 && true → true
// index 1 → 2 <= 3 && true → true
// index 0 → 1 <= 2 && true → true

//  ↓
//   console.log
//  ↓
//    true
