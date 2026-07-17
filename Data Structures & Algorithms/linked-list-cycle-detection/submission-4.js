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
     * @return {boolean}
     */
    hasCycle(head) {
        const visited = new Set();
        let curr = head;
        while (curr) {
            if (visited.has(curr.next))
                return true;
            visited.add(curr.next);
            curr = curr.next;
        }
        return false;
    }
}
