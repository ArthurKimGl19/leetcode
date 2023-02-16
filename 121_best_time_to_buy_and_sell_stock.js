var maxProfit = function(prices) {
    let maxProfit = 0;

    if (prices.length === 1){
        return maxProfit;
    }

    let minPrice = prices[0];
    for (let i = 1; i < prices.length; i++){
        minPrice = Math.min(minPrice, prices[i]);
        maxProfit = Math.max(prices[i] - minPrice, maxProfit);
    }
    return maxProfit;
    //Time Complexity - O(n), Space Complexity - O(1)
};