var maxProfit = function (prices) {

    // Variable to store total profit from all transactions
    let profit = 0;

    // Start from index 1 because we compare current price with previous day (i-1)
    for (let i = 1; i < prices.length; i++) {

        // If today's price is greater than yesterday's price, we take that difference as profit (greedy choice)
        if (prices[i] > prices[i - 1]) {

            // Add the profit from this upward movement
            profit += prices[i] - prices[i - 1];
        }
    }

    // Return total accumulated profit
    return profit;
};