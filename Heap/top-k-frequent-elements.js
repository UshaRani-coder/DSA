/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
     let result = [];
    // frequency map
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = (map[nums[i]] || 0) + 1;
    }
    // sort by frequency
    let arr = Object.entries(map)
    arr.sort((a, b) => b[1] - a[1])
    // take top k
    for (let i = 0; i < k; i++) {
        result.push(Number(arr[i][0]))
    }
    return result;
};
// Time complexity O(n log n)
// But, in the question, it is mentioned that "Your algorithm's time complexity must be better than O(n log n)"

// So, here is the optimal solution with O(n) time complexity using bucket sort technique
// Bucket sort is a sorting technique where elements are grouped together into a bucket based on a property (like value or frquency etc) instead of comparing the elements directly. After grouping, buckets are processed to give the final result

var topKFrequent = function (nums, k) {
    // build frequencies
    let freqMap = {};
    for(let i=0; i<nums.length; i++){
        freqMap[nums[i]] = (freqMap[nums[i]] || 0) + 1;
    }

    // buckets (index = frequency)
    let bucket = Array(nums.length+1).fill().map(()=>[])
    for(let num in freqMap){
        bucket[freqMap[num]].push(Number(num))
    }
    
    //  collect top k
    let result = []
    for(let i=bucket.length-1; i>=0; i--){
        for(let num of bucket[i]){
            result.push(num)
            if(result.length===k) return result;
        }
    }
}
