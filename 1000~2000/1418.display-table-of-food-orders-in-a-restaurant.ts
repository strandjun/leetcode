/**
 * https://leetcode.com/problems/display-table-of-food-orders-in-a-restaurant/
 * Medium - 1418. Display Table of Food Orders in a Restaurant
 */

/**
 * Q:
 *  1. What is the size of input?
 *  2. Do the customerName and foodItem contain lowercase and uppercase English letters and the space character?
 *  3. Is the length of orders[i] equal to 3?
 *  4. Is the tableNumber a valid integer? What is its size?
 */

/**
 * Strategy:
 *  Brute force:
        1. transfer all the orders to a key-val object/map, collect all the food items.
        2. sorted the food items
        3. sorted the table numbers
        4. return the result
 */

// Time Complexity: O(), Space Complexity:O()
function displayTable(orders: string[][]): string[][] {
    const res: string[][] = []
    const orderMap = new Map<string, string[]>()
    let header = []
    for (let i = 0; i < orders.length; i++) {
        const [, tableNum, foodItem] = orders[i]
        const curFoodItems = [foodItem]

        header.push(foodItem)
        if (orderMap.has(tableNum)) {
            curFoodItems.push(...(orderMap.get(tableNum) || ''))
        }
        orderMap.set(tableNum, curFoodItems)
    }

    // header = Array.from(new Set(header)).sort((a, b) => a.toUpperCase() > b.toUpperCase() ? 1 : -1)
    header = Array.from(new Set(header)).sort()
    // add header
    res.push(['Table', ...header])

    // get table num
    const tableNums = Array.from(orderMap.keys()).sort((a, b) => +a - +b)

    // add foodItems number by tableNum
    for (const tableNum of tableNums) {
        const foodItems = orderMap.get(tableNum) || []
        const foodMap = new Map()
        foodItems.forEach((val) => {
            if (foodMap.has(val)) {
                foodMap.set(val, foodMap.get(val) + 1)
            } else {
                foodMap.set(val, 1)
            }
        })

        const curArr = [tableNum]
        for (const food of header) {
            curArr.push((foodMap.get(food) || 0) + '')
        }
        res.push(curArr)
    }

    return res
}


import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

Deno.test('assertEquals Test', () => {
    assertEquals(
        displayTable([
            ['pKKgO', '1', 'qgGxK'],
            ['ZgW', '3', 'XfuBe'],
        ]),
        [
            ['Table', 'XfuBe', 'qgGxK'],
            ['1', '0', '1'],
            ['3', '1', '0'],
        ]
    );
});

Deno.test("assertEquals Test", () => {
    assertEquals(
        displayTable([
            ["David", "3", "Ceviche"],
            ["Corina", "10", "Beef Burrito"],
            ["David", "3", "Fried Chicken"],
            ["Carla", "5", "Water"],
            ["Carla", "5", "Ceviche"],
            ["Rous", "3", "Ceviche"]
        ]),
        [
            ["Table", "Beef Burrito", "Ceviche", "Fried Chicken", "Water"],
            ["3", "0", "2", "1", "0"],
            ["5", "0", "1", "0", "1"],
            ["10", "1", "0", "0", "0"]
        ]
    );
});

Deno.test("assertEquals Test", () => {
    assertEquals(
        displayTable([
            ["James", "12", "Fried Chicken"],
            ["Ratesh", "12", "Fried Chicken"],
            ["Amadeus", "12", "Fried Chicken"],
            ["Adam", "1", "Canadian Waffles"],
            ["Brianna", "1", "Canadian Waffles"]
        ]),
        [
            ["Table", "Canadian Waffles", "Fried Chicken"],
            ["1", "2", "0"],
            ["12", "0", "3"]
        ]
    );
});

Deno.test("assertEquals Test", () => {
    assertEquals(
        displayTable([
            ["Laura", "2", "Bean Burrito"],
            ["Jhon", "2", "Beef Burrito"],
            ["Melissa", "2", "Soda"]
        ]),
        [
            ["Table", "Bean Burrito", "Beef Burrito", "Soda"],
            ["2", "1", "1", "1"]
        ]
    );
});
