class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        if len(nums) == 2:
            return [0,1]
        storage = {}

        for i in range (len(nums)):
            if nums[i] not in storage:
                difference = target - nums[i]
                storage[difference] = i
            else:
                return [storage[nums[i]], i]