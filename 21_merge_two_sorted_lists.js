/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if (!list1 && !list2) return null
    else if (!list1) return list2
    else if (!list2) return list1;

    let output = null;
    let currentNode = null;

    while (list1 && list2){
        if (list1.val <= list2.val){
            if (!output){
                output = list1;
            } else {
                currentNode.next = list1;
            }
            currentNode = list1;
            list1 = list1.next;
        } else {
            if (!output){
                output = list2;
            } else {
                currentNode.next = list2;
            }
            currentNode = list2;
            list2 = list2.next;
        }
    }
    //if list 1 or list 2 are null now, we have to add the rest of other list to current output;
    if (!list1 && list2){
        currentNode.next = list2;
    } else if (!list2 && list1){
        currentNode.next = list1;
    }
    return output
    //Time complexity O(n), Space complexity O(n);
};