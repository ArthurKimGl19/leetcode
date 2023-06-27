# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
import math

class Solution:
    def middleNode(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if head.next is None:
            return head
        currentNode = head
        count = 0
        while currentNode is not None:
            count+=1
            currentNode = currentNode.next
        middle = None
        if count % 2 == 0:
            middle = (count/2)+1
        else:
            middle = math.ceil(count/2)
        currentNode = head
        while middle > 1:
            middle-=1
            currentNode = currentNode.next
        return currentNode