/**
 * https://leetcode.com/problems/design-a-stack-with-increment-operation/
 * Medium    
 */

class CustomStack {
    maxSize: number;
    arr: number[];

    constructor(maxSize: number) {
        this.maxSize = maxSize;
        this.arr = [];
    }

    push(x: number): void {
        if (this.arr.length < this.maxSize) {
            this.arr.push(x)
        }
    }

    pop(): number {
        return this.arr.pop() || -1
    }

    increment(k: number, val: number): void {
        const len = this.arr.length < k ? this.arr.length : k
        for (let i = 0; i < len; i++) {
            this.arr[i] += val
        }
    }
}

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */
