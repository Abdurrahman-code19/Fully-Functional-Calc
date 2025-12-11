let displayEl = document.getElementById("display");

let num1 = "";
let num2 = "";
let operator = "";

function pressNumber(x) {
    if (operator === "") {
        num1 = num1 + x
        displayEl.innerText = num1
    } else {
        num2 = num2 + x
        displayEl.innerText = num2
    }
}

function setOperator(op) {
    operator = op
}

function calculate() {
    let n1 = Number(num1)
    let n2 = Number(num2)

    if (operator === "+") {
        let result = n1 + n2
        displayEl.innerText = result
    }

    if (operator === "-") {
        let result = n1 - n2
        displayEl.innerText = result
    }

    if (operator === "×") {
        let result = n1 * n2
        displayEl.innerText = result
    }

    if (operator === "÷") {
        if (n2 === 0) {
            displayEl.innerText = "SyntaxError"
        } else {
            let result = n1 / n2
            displayEl.innerText = result
        }
    }
}

function clearAll() {
    num1 = "";
    num2 = "";
    operator = "";
    displayEl.innerText = "0";
}

function clearEntry() {
    displayEl.innerText = displayEl.innerText.slice(0, -1);
}