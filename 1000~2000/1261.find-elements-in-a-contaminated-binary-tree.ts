/**
 * https://leetcode.com/problems/find-elements-in-a-contaminated-binary-tree/
 * Medium    
 */

class FindElements {
    private record: Set<number>;
    private tree: TreeNode | null;

    constructor(root: TreeNode | null) {
        this.record = new Set();
        this.tree = this.traverse(root, 0);
    }

    find(target: number): boolean {
        return this.record.has(target)
    }

    private traverse(root: TreeNode | null, val: number) {
        if (root === null) {
            return null
        }

        this.record.add(val)

        root.val = val
        root.left = this.traverse(root.left, 2 * val + 1)
        root.right = this.traverse(root.right, 2 * val + 2)

        return root
    }
}
