# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        if list1 is None and list2 is None:
            return None
        elif list1 is None:
            return list2
        elif list2 is None:
            return list1
        
        output = None
        currentNode = None

        while list1 is not None and list2 is not None:
            if list1.val <= list2.val:
                if output is None:
                    output = list1
                else:
                    currentNode.next = list1
                currentNode = list1
                list1 = list1.next
            else:
                if output is None:
                    output = list2
                else:
                    currentNode.next = list2
                currentNode = list2
                list2 = list2.next
        if list1 is None and list2 is not None:
            currentNode.next = list2
        elif list2 is None and list1 is not None:
            currentNode.next = list1
        return output