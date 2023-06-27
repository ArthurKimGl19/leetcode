# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if head is None or head.next is None:
            return head
        
        storage = []
        currentNode = head
        while currentNode is not None:
            storage.append(currentNode)
            currentNode = currentNode.next
        output = None
        while len(storage) > 0:
            poppedNode = storage.pop()
            if output is None:
                output = poppedNode
                currentNode = output
            else:
                currentNode.next = poppedNode
                currentNode = poppedNode
        currentNode.next = None
        return output