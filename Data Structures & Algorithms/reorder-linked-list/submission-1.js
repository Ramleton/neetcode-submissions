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
     * @return {void}
     */
    reorderList(head) {
        let slow = head;
        let fast = head;
        while (fast.next && fast.next.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        let prev = null;
        let curr = slow.next;
        slow.next = null;

        while (curr !== null) {
            const nextTemp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextTemp;
        }

        let first = head;
        let second = prev;
        while (second !== null) {
            const temp1 = first.next;
            const temp2 = second.next;

            first.next = second;
            second.next = temp1;

            first = temp1;
            second = temp2;
        }
    }
}
