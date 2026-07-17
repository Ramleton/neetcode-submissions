/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        if (list1 === null) {
            return list2;
        } else if (list2 === null) {
            return list1;
        }
        let l1;
        let l2;
        let newHead;
        if (list1.val < list2.val) {
            newHead = list1;
            l1 = list1.next;
            l2 = list2;
        } else {
            newHead = list2;
            l1 = list1;
            l2 = list2.next;
        }
        let curr = newHead;
        while (l1 && l2) {
            if (l1.val < l2.val) {
                curr.next = l1;
                l1 = l1.next;
            } else {
                curr.next = l2;
                l2 = l2.next;
            }
            curr = curr.next;
        }
        if (l1) curr.next = l1;
        if (l2) curr.next = l2;
        return newHead;
    }
}
