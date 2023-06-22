class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        output = []

        currentProd = 1
        for i in range(len(nums)):
            output.append(currentProd)
            currentProd *= nums[i]
        currentProd = 1
        for j in range(len(nums)-1, -1, -1):
            output[j] *= currentProd
            currentProd *= nums[j]
        return output