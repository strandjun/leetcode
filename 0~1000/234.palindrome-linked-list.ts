/**
 * https://leetcode.com/problems/palindrome-linked-list/
 * Easy - 234. Palindrome Linked List
 * 
 * Follow up: Could you do it in O(n) time and O(1) space?
 */

/**
 * Definition for singly-linked list.
 */
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

/**
 *             f
 * 1->6->4->4->6->1
 *          s
 *             t
 *       p
 * 1->6->4
 */

// O(n) time & O(n) space
function isPalindrome1(head: ListNode | null): boolean {
    const list: number[] = []
    while (head) {
        list.push(head.val)
        head = head.next
    }

    let s = 0
    let e = list.length - 1
    while (s < e) {
        if (list[s] === list[e]) {
            s++
            e--
        } else {
            return false
        }
    }
    return true
}

// O(n) time & O(1) space
function isPalindrome(head: ListNode | null): boolean {
    let fast = head
    let slow = head
    let prev = null
    let temp = null

    // get slow in the middle
    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
    }

    // get the back half head
    prev = slow;
    slow = slow.next;
    prev.next = null

    // reverse the back half
    while (slow) {
        temp = slow.next
        slow.next = prev
        prev = slow
        slow = temp
    }

    // compare
    fast = head
    slow = prev
    while (slow) {
        if (fast.val !== slow.val) {
            return false
        }
        fast = fast.next
        slow = slow.next
    }
    return true
}


import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

Deno.test("assertEquals Test", () => {
    assertEquals(isPalindrome(new ListNode(1)), true);
});
