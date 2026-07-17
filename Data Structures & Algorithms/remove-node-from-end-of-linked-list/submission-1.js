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
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let dummyNode = new ListNode();
        if (!head.next) return null;
        dummyNode.next = head;
        let first = dummyNode;
        let i = 0;
        while (i <= n) {
            i++;
            first = first.next;
        }
        let second = dummyNode;
        while (first) {
            first = first.next;
            second = second.next;
        }
        second.next = second.next.next;
        return dummyNode.next;
    }
}
