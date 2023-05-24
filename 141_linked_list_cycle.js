/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (!head || !head.next){
        return false;
    }

    let one = two = head;

    while (one && one.next){
        one = one.next.next;
        two = two.next;

        if (one === two){
            return true;
        }
    }
    return false;
};
//Time Complexity O(n), Space Complexity O(1);