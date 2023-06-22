class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        if (len(nums) == 1):
            return False
        newSet = set()
        for i in range(len(nums)):
            if nums[i] not in newSet:
                newSet.add(nums[i])
            else:
                return True
        return False
