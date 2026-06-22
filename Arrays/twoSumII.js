//  Brute force O(n²)
var twoSum = function (numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                return [i + 1, j + 1];
            }
        }
    }
};
// Optimal SOlution O(n)
var twoSum = function (numbers, target) {
    let map = new Map();
    for (let i = 0; i < numbers.length; i++) {
        let diff = target - numbers[i]

        if (map[diff] !== undefined) {
            return [map[diff] + 1, i + 1]
        }
        map[numbers[i]] = i

    }
};

// Using two pointers O(n)
var twoSum = function (numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        let sum = numbers[left] + numbers[right];

        if (sum === target) {
            return [left + 1, right + 1];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

}