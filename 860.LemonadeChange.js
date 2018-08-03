/**
 * https://leetcode.com/problems/lemonade-change/description/
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let income = {
        "5": 0,
        "10": 0
    };
    for (let i = 0; i < bills.length; i++) {
        switch (bills[i]) {
            case 5: {
                income["5"]++;
                break;
            }
            case 10: {
                if (income["5"] <= 0) {
                    return false;
                }
                income["5"]--;
                income["10"]++;

                break;
            }
            case 20: {
                if (income["10"] > 0 && income["5"] > 0) {
                    income["5"]--;
                    income["10"]--;
                } else if (income["5"] > 2) {
                    income["5"] -= 3;
                } else {
                    return false;
                }
                break;
            }
        }
    }
    return true;
};

// var bills = [5, 5, 5, 10, 20]; //output: true
// var bills = [5, 5, 10]; //output: true
// var bills = [10, 10]; //output: false
// var bills = [5, 5, 10, 10, 20]; //output: false
// var bills = [5, 5, 10, 20, 5, 5, 5, 5, 5, 5, 5, 5, 5, 10, 5, 5, 20, 5, 20, 5]; //output: true
var bills = [5, 5, 5, 10, 5, 5, 10, 20, 20, 20]; //output: false
console.log(lemonadeChange(bills));
