var guessNumber = function (n) {
    // search space from 1 to n
    let left = 1;
    let right = n;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        // Get feedback from API
        let res = guess(mid);

        // If pick is greater than mid(our guess), search right half
        if (res === 1) {
            left = mid + 1;
        }

        // If pick is smaller than mid, search left half
        else if (res === -1) {
            right = mid - 1;
        }

        // If res === 0, we found the number
        else {
            return mid;
        }
    }

    // If not found (actually not needed in this problem)
    return -1;
};