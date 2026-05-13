// Problem: Best Time to Buy and Sell Stock
// Pattern: Greedy / One-pass tracking
// At every moment, I only care about the cheapest buy I’ve seen and best profit I can make today(Greedy thinking).
// Difficulty: Easy

var maxProfit = function (prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        // update minimum price so far
        minPrice = Math.min(minPrice, prices[i])
        // calculate profit if sold today(current price element)
        let profit = prices[i] - minPrice
        // update maximum profit
        maxProfit = Math.max(maxProfit, profit)
    }
    return maxProfit
};