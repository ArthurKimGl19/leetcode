# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        if head is None or head.next is None:
            return False
        
        one = two = head
        while one is not None and one.next is not None:
            one = one.next.next
            two = two.next

            if one == two:
                return True
        return False