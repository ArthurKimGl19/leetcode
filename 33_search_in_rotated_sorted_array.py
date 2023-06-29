import math

class Solution:
    def search(self, nums: List[int], target: int) -> int:
        if len(nums) == 1:
            if nums[0] == target:
                return 0
            else:
                return -1
        
        left = 0
        right = len(nums) - 1

        while left <= right:
            middle = math.floor((left+right)/2)
            if nums[middle] == target:
                return middle
            
            if nums[left] <= nums[middle]:
                if target < nums[middle] and target >= nums[left]:
                    right = middle - 1
                else:
                    left = middle + 1
            else:
                if target > nums[middle] and target <= nums[right]:
                    left = middle + 1
                else:
                    right = middle - 1
        return -1