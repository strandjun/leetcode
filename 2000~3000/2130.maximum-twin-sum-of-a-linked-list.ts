/**
 * https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/
 * Medium    
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

function pairSum(head: ListNode | null): number {
    // listNode to array
    const res: number[] = []
    let listHead: ListNode | null = head
    while (listHead) {
        res.push(listHead.val)
        listHead = listHead.next
    }

    let max = 0
    for (let i = 0; i < res.length / 2; i++) {
        max = Math.max(max, res[i] + res[res.length - 1 - i])
    }
    return max
}

import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

const head = [5, 4, 2, 1]
const output = 6

const head1 = [4, 2, 2, 3]
const output1 = 7

Deno.test("assertEquals Test", () => {
    assertEquals(pairSum(head), output);
});

Deno.test("assertEquals Test", () => {
    assertEquals(pairSum(head1), output1);
});
