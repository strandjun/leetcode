/**
 * https://leetcode.com/problems/middle-of-the-linked-list/description/
 * @param {ListNode} head
 * @return {ListNode}
 *
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 *
 * 原来 第一次head.next 输出的是[2,3,4,5]
 */

var middleNode = function(head) {
    let mid = (last = head);
    while (last != null) {
        mid = ListNode(mid);
        last = ListNextNode(last);
    }
    return mid;
};

function ListNode(head) {
    return head.next ? head.next : head;
}

function ListNextNode(head) {
    if (head.next && head.next.next && head.next.next.next == null) {
        return null;
    }
    return head.next ? head.next.next : null;
}

let h = [1, 2, 3, 4, 5];
// let h = [1, 2, 3, 4, 5, 6];
console.log(middleNode(h));
