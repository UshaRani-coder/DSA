// Brute force approach (O(n²))

function productExceptSelf(nums) {
  let answer = [];

  for (let i = 0; i < nums.length; i++) {
    let product = 1;
    for (let j = 0; j < nums.length; j++) {
      if (i != j) {
        product *= nums[j];
      }
    }
    answer.push(product);
  }

  return answer;
}
console.log(productExceptSelf([1,2,3,4]));

// Optimal SOlution (O(n))

var productExceptSelf = function(nums) {
    let n = nums.length;

    // Output array to store final result
    // We initialize with 1 because we will multiply later
    let answer = new Array(n).fill(1);

    // -------------------------------
    // 1. PREFIX PASS (LEFT PRODUCTS)
    // -------------------------------
    // Idea: At each index i, store product of all elements to the LEFT of i
    // We use a running variable 'prefix' to avoid recomputation

    let prefix = 1;

    for (let i = 0; i < n; i++) {
        answer[i] = prefix;      // store left product so far
        prefix *= nums[i];       // update prefix for next index
    }

    // After this loop:
    // answer[i] = product of all elements LEFT of i

    // -------------------------------
    // 2. SUFFIX PASS (RIGHT PRODUCTS)
    // -------------------------------
    // Idea: Multiply each index with product of all elements to the RIGHT of i

    let suffix = 1;

    for (let i = n - 1; i >= 0; i--) {
        answer[i] *= suffix;     // combine left product (already stored) + right product
        suffix *= nums[i];       // update suffix for next index
    }

    // After this loop:
    // answer[i] = (left product) * (right product)

    return answer;
};

//  Re-solving
function productExceptSelf(nums) {
  let answer = [];
  let prefixProduct = 1;
  for (let i = 0; i < nums.length; i++) {
      answer[i]= prefixProduct;
      prefixProduct *= nums[i];
  }
  let suffixProduct = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    answer[i] *= suffixProduct;
    suffixProduct *= nums[i];
  }
  return answer;
}
console.log(productExceptSelf([1, 2, 3, 4]));
