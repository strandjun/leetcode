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

var tmpArr = [];
var findLeaf = function(node) {
    if (node.left == null && node.right == null) {
        tmpArr.push(node.val);
    }
    if (node.left != null) {
        findLeaf(node.left);
    }
    if (node.right != null) {
        findLeaf(node.right);
    }
};

var leafSimilar = function(root1, root2) {
    findLeaf(root1);
    let tmp1 = tmpArr.join(",");
    tmpArr = [];
    findLeaf(root2);
    let tmp2 = tmpArr.join(",");
    if (tmp1 === tmp2) {
        return true;
    } else {
        return false;
    }
};

// var root1 = [1],
//     root2 = [1];    
// output: true;

var root1 = [3, 5, 1, 6, 2, 9, 8, null, null, 7, 4],
    root2 = [3, 5, 1, 6, 7, 4, 2, null, null, null, null, null, null, 9, 8];
// output: true;

console.log(leafSimilar(root1, root2));
