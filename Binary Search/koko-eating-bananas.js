// Check if Koko can finish all bananas at speed k
function canFinish(piles, k, h) {
    let hours = 0;

    for (let pile of piles) {
        // Hours needed for current pile
        hours += Math.ceil(pile / k);  //O(n)
    }

    return hours <= h;
}

var minEatingSpeed = function (piles, h) {
    // Speed range k: [1, max pile]
    let low = 1;
    let high = Math.max(...piles); //O(n)

    while (low <= high) { // The search space is [1, maxPile]  O(log maxPile)
        let mid = Math.floor((low + high) / 2);

        if (canFinish(piles, mid, h)) {
            // Mid works, try a smaller speed(as minimum is asked, search left)
            high = mid - 1;
        } else {
            // Mid too slow, need a larger speed(right search)
            low = mid + 1;
        }
    }

    // low points to the first valid speed
    return low;
};