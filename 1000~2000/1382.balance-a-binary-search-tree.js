/**
 * https://leetcode.com/problems/balance-a-binary-search-tree/
 * Medium
 */

/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const balanceBST = function (root) {
  const arr = [];

  const traverse = (newRoot) => {
    if (!newRoot) {
      return;
    }

    traverse(newRoot.left);
    arr.push(newRoot.val);
    traverse(newRoot.right);
  };

  traverse(root);

  const construct = (arr) => {
    if (!arr.length) {
      return null;
    }
    const index = Math.floor(arr.length / 2);

    const left = construct(arr.slice(0, index));
    const right = construct(arr.slice(index + 1));

    const root = new TreeNode(arr[index], left, right);
    return root;
  };

  return construct(arr);
};

import { assertEquals } from 'https://deno.land/std@0.102.0/testing/asserts.ts';

const output = [2, 1, 3, null, null, null, 4]; // [3, 1, 4, null, 2];

Deno.test('assertEquals Test', () => {
  assertEquals(balanceBST([1, null, 2, null, 3, null, 4, null, null]), output);
});
