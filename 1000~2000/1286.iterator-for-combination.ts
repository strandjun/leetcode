/**
 * https://leetcode.com/problems/iterator-for-combination/
 * Medium
 */

// for (let i = 0; i < arr.length; i++) {}
class CombinationIterator {
    comb: string[];

    constructor(characters: string, combinationLength: number) {
        this.comb = []
        const recursion = (str: string, char: string, len: number) => {
            if (char.length < len) {
                return
            }
            if (char.length === len) {
                this.comb.push(str + char)
                return
            }
            if (len === 0) {
                this.comb.push(str)
            }
            for (let i = 0; i < char.length; i++) {
                recursion(str + char[i], char.substring(i + 1), len - 1)
            }
        }

        recursion('', characters, combinationLength)
    }

    next(): string {
        return this.comb.shift()
    }

    hasNext(): boolean {
        return this.comb.length > 0 ? true : false
    }
}

/**
 * Your CombinationIterator object will be instantiated and called as such:
 * var obj = new CombinationIterator(characters, combinationLength)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */