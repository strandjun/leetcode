/**
 * https://leetcode.com/problems/making-a-large-island/
 * Hard
 */

function largestIsland(grid: number[][]): number {
    // 1. itrate grid to get all islands, mark every island, record the size
    let mapId = 2
    const mapSize = new Map();

    const dfs = (r: number, c: number, id: number) => {
        if (r > grid.length - 1 || c > grid.length - 1 || r < 0 || c < 0) {
            return null
        }
        if (grid[r][c] == 1) {
            if (!mapSize.has(id)) {
                mapSize.set(id, 1)
            } else {
                mapSize.set(id, mapSize.get(id) + 1)
            }
            grid[r][c] = id
            dfs(r + 1, c, id)
            dfs(r, c + 1, id)
            dfs(r - 1, c, id)
            dfs(r, c - 1, id)
        }
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                dfs(i, j, mapId)
                mapId++
            }
        }
    }

    // 2. try to change every 0 to be 1, look for largest size
    let largestSize = 0
    for (const size of mapSize.values()) {
        largestSize = Math.max(largestSize, size)
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 0) {
                let curSize = 1
                const curId = new Set()
                if (i + 1 < grid.length 
                    && grid[i + 1][j] > 0
                ) {
                    curSize += mapSize.get(grid[i + 1][j])
                    curId.add(grid[i + 1][j])
                }
                if (j + 1 < grid.length 
                    && grid[i][j + 1] > 0 
                    && !curId.has(grid[i][j + 1])
                ) {
                    curSize += mapSize.get(grid[i][j + 1])
                    curId.add(grid[i][j + 1])
                }
                if (i > 0
                    && grid[i - 1][j] > 0  
                    && !curId.has(grid[i - 1][j])
                ) {
                    curSize += mapSize.get(grid[i - 1][j])
                    curId.add(grid[i - 1][j])
                }
                if (j > 0 
                    && grid[i][j - 1] > 0 
                    && !curId.has(grid[i][j - 1])
                ) {
                    curSize += mapSize.get(grid[i][j - 1])
                }
                largestSize = Math.max(curSize, largestSize)
            }
        }
    }

    return largestSize

}

import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

const grid = [[1, 0], [0, 1]]
const output = 3

const grid1 = [[1, 1], [1, 0]]
const output1 = 4

const grid2 = [[1, 1], [1, 1]]
const output2 = 4

Deno.test("assertEquals Test", () => {
    assertEquals(largestIsland(grid), output);
});

Deno.test("assertEquals1 Test", () => {
    assertEquals(largestIsland(grid1), output1);
});

Deno.test("assertEquals2 Test", () => {
    assertEquals(largestIsland(grid2), output2);
});

Deno.test("assertEquals3 Test", () => {
    assertEquals(largestIsland([[0, 0], [0, 0]]), 1);
});