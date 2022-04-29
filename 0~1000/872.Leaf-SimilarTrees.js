/**
 * https://leetcode.com/problems/leaf-similar-trees/description/
 *
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * [3,5,1,6,2,9,8,null,null,7,4]
 * [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */

var findLeaf = function(node, str) {
    if (node.left == null && node.right == null) {
        return (str += " " + node.val);
    }
    if (node.left != null) {
        str = findLeaf(node.left, str);
    }
    if (node.right != null) {
        str = findLeaf(node.right, str);
    }
    return str;
};

var leafSimilar = function(root1, root2) {
    var tmp1 = findLeaf(root1, "");
    var tmp2 = findLeaf(root2, "");

    return tmp1 === tmp2;
};

// var root1 = [1],
//     root2 = [1];
// output: true;

// var root1 = [3, 5, 1, 6, 2, 9, 8, null, null, 7, 4],
//     root2 = [3, 5, 1, 6, 7, 4, 2, null, null, null, null, null, null, 9, 8];
// output: true;

// 模拟出的TreeNode Object, 可总说我这个用例过不去… 炸裂 单独测明明ok的
// var root1 = { val: 1, left: null, right: null },
//     root2 = { val: 1, left: null, right: null };

// 模拟出的TreeNode Object
var root1 = {
        val: 3,
        left: {
            val: 5,
            left: { val: 6, left: null, right: null },
            right: {
                val: 2,
                left: { val: 7, left: null, right: null },
                right: { val: 4, left: null, right: null }
            }
        },
        right: {
            val: 1,
            left: { val: 9, left: null, right: null },
            right: { val: 8, left: null, right: null }
        }
    },
    root2 = {
        val: 3,
        left: {
            val: 5,
            left: { val: 6, left: null, right: null },
            right: {
                val: 7,
                left: null,
                right: null
            }
        },
        right: {
            val: 1,
            left: { val: 4, left: null, right: null },
            right: {
                val: 2,
                left: { val: 9, left: null, right: null },
                right: { val: 8, left: null, right: null }
            }
        }
    };

console.log(leafSimilar(root1, root2));
