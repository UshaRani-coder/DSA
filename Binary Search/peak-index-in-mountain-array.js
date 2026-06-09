var peakIndexInMountainArray = function (arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        // If we are on increasing slope → move right
        if (arr[mid] < arr[mid + 1]) {
            left = mid + 1;
        } 
        // If we are on decreasing slope → move left (including mid)
        else {
            right = mid;
        }
    }

    // left == right → peak index
    return left;
};