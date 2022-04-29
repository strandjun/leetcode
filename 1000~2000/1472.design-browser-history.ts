/**
 * https://leetcode.com/problems/design-browser-history/
 * Medium
 */

// for (let i = 0; i < arr.length; i++) {}
class BrowserHistory {
    history: string[];
    curIndex: number;

    constructor(homepage: string) {
        this.history = [homepage]
        this.curIndex = 0
    }

    visit(url: string): void {
        this.curIndex = this.curIndex + 1
        if (this.curIndex < this.history.length) {
            this.history.splice(this.curIndex, (this.history.length - this.curIndex), url)
        } else {
            this.history.push(url)
        }
    }

    back(steps: number): string {
        if (this.curIndex >= steps) {
            this.curIndex = this.curIndex - steps
        } else {
            this.curIndex = 0
        }
        return this.history[this.curIndex]
    }

    forward(steps: number): string {
        if (this.history.length - this.curIndex > steps) {
            this.curIndex = this.curIndex + steps
        } else {
            this.curIndex = this.history.length - 1
        }
        return this.history[this.curIndex]
    }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
