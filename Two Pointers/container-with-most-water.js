//  Brute force approach O(n²)
var maxArea = function (height) {
    let maxArea = 0;
    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1; j < height.length; j++) {
            // we check every pair to find the minimum height( as considering maximum height will spill the water)
            let h = Math.min(height[i], height[j])
            let w = j - i;
            let area = w * h;
            maxArea = Math.max(maxArea, area)
        }
    }
    return maxArea;
};

// Optimized approach O(n)
var maxArea = function (height) {
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        // Calculate current area
        let h = Math.min(height[left], height[right]);
        let w = right - left;
        let area = h * w;

        // Update maximum area
        maxArea = Math.max(maxArea, area);

        // Move the shorter line, as the width shrinks and increasing the limiting height is the only chance to get a larger area.
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
};