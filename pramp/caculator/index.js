/* -------------------- Add your code here --------------------- */
/* think about the strategy
 * step1. enumerate operation
 * step2. addlistener every operation button / number
 * step3. addlistener = / c
 */

// define operation
let operation = {
    "×": function(a, b) {
        return a * b;
    },
    "÷": function(a, b) {
        return a / b;
    },
    "+": function(a, b) {
        return +a + +b;
    },
    "-": function(a, b) {
        return a - b;
    }
};

// value element
let showInput = document.getElementById("input_box"),
    operEqual = document.getElementById("oper_equal"),
    operClear = document.getElementById("oper_clear");

// let numList = document.querySelectorAll(".num_box .item"),
//     operBtn = document.querySelectorAll(".oper_box .item");
let numBox = document.querySelector(".num_box"),
    operBtnBox = document.querySelector(".oper_box");

let opers = Object.keys(operation);

let resFlag = false,
    reg = /\+|\-|\×|\÷/g;

/**
 * oper funtionality
 */

// num
numBox.addEventListener("click", function(e) {
    if (e.target.id != "oper_clear" && e.target.classList.contains("item")) {
        if (resFlag) {
            showInput.textContent = e.target.innerHTML;
            resFlag = false;
        } else {
            showInput.textContent = showInput.textContent + e.target.innerHTML;
        }
    }
});
// oper btn
operBtnBox.addEventListener("click", function(e) {
    if (e.target.classList.contains("item")) {
        let curFormula = showInput.textContent,
            curOper = curFormula.match(reg);
        if (opers.indexOf(curFormula[curFormula.length - 1]) >= 0) {
            // instead last operBtn
            let lastOper = curFormula[curFormula.length - 1];
            showInput.textContent = curFormula.replace(
                lastOper,
                e.target.innerHTML
            );
            return;
        } else if (curOper && opers.indexOf(curOper[0]) >= 0) {
            // do caculator operation
            operEqual.click();
        }
        // do add string operation
        showInput.textContent = showInput.textContent + e.target.innerHTML;
        resFlag = false;
    }
});

// equal
operEqual.addEventListener("click", function(flag) {
    let formula = showInput.textContent,
        curOper = formula.match(reg);

    if (curOper != null) {
        let numbers = formula.split(reg),
            result;
        curOper = curOper[0];
        if (numbers.length == 2) {
            result = operation[curOper](numbers[0], numbers[1]);
        }
        showInput.textContent = result;
        resFlag = true;
    }
});

// clear
operClear.addEventListener("click", function() {
    // showInput.innerHTML("");
    showInput.textContent = "";
});
