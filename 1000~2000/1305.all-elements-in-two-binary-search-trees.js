/**
 * https://leetcode.com/problems/all-elements-in-two-binary-search-trees/
 * Medium
 */

/**
 * Definition for a binary tree node.
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function (root1, root2) {
  const res = [];

  // travese root, get a ordered array
  const travese = (root, arr) => {
    if (root == null || root.val == null) {
      return;
    }
    travese(root.left, arr);
    arr.push(root.val);
    travese(root.right, arr);
  };

  const arr1 = [];
  const arr2 = [];
  travese(root1, arr1);
  travese(root2, arr2);

  // merge
  let i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      res.push(arr1[i]);
      i++;
    } else {
      res.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    res.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    res.push(arr2[j]);
    j++;
  }
  return res;
};


import { assertEquals } from 'https://deno.land/std@0.102.0/testing/asserts.ts';

Deno.test('assertEquals Test', () => {
  assertEquals(getAllElements([2, 1, 4], [1, 0, 3]), [0, 1, 1, 2, 3, 4]);
});
