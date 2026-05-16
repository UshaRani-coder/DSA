
// Expand while window is valid
// Shrink when window is invalid
var characterReplacement = function (s, k) {

    // Left side of sliding window
    let leftPointer = 0;

    // Stores maximum valid window length
    let maxLength = 0;

    // Stores frequency of most repeated character in current window
    let maxFreq = 0;

    // Frequency map for characters inside current window
    let map = {};

    // Expand window using right pointer
    for (let rightPointer = 0; rightPointer < s.length; rightPointer++) {

        // Add current character into frequency map
        map[s[rightPointer]] = (map[s[rightPointer]] || 0) + 1;

        // Track highest frequency character in current window
        maxFreq = Math.max(maxFreq, map[s[rightPointer]]);

        // Current window size
        let windowSize = rightPointer - leftPointer + 1;
        // If replacements needed are more than k
        // shrink window from left
        while ((windowSize - maxFreq) > k) {

            // Remove left character frequency
            map[s[leftPointer]]--;

            // Move left pointer forward
            leftPointer++;

            // Recalculate window size after shrinking
            windowSize = rightPointer - leftPointer + 1;
        }

        // Store maximum valid window length
        maxLength = Math.max(maxLength, windowSize);
    }

    return maxLength;
};