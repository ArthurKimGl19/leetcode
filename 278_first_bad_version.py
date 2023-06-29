# The isBadVersion API is already defined for you.
# def isBadVersion(version: int) -> bool:
import math

class Solution:
    def firstBadVersion(self, n: int) -> int:
        if n==1:
            return 1
        
        left = 1
        right = n

        while left <= right:
            middle = math.floor((left+right)/2)

            if isBadVersion(middle) or isBadVersion(left):
                right = middle
            elif isBadVersion(right):
                left = middle+1
            if left == right:
                right-=1
        return left
