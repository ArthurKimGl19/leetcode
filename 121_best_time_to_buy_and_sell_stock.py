class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        if (len(prices) == 1):
            return 0
        minPrice = prices[0]
        maxProfit = 0

        for i in range(len(prices)):
            minPrice = min(minPrice, prices[i])
            maxProfit = max(maxProfit, prices[i]-minPrice)
        return maxProfit