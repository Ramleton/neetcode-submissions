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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        const dummyNode = new ListNode();
        let curr = dummyNode;
        while (true) {
            let minIndex = -1;
            let minNode = new ListNode(1001);
            for (let i = 0; i < lists.length; i++) {
                if (!lists[i]) continue;
                if (lists[i].val < minNode.val) {
                    minNode = lists[i];
                    minIndex = i;
                }
            }
            if (minIndex === -1) break;
            lists[minIndex] = lists[minIndex].next;
            curr.next = minNode;
            curr = curr.next;
        }
        return dummyNode.next;
    }
}
