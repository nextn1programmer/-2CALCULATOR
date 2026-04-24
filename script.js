const display = document.getElementById("display");
const numberbuttons = document.querySelectorAll("button");
let N1 = "";
let operator = "";
let shouldResetDisplay = false;

numberbuttons.forEach(function(button){
    button.addEventListener("click", function(){
        if (shouldResetDisplay) {
    display.textContent = "";
    shouldResetDisplay = false;
}
if (button.textContent === ".") {
    if (display.textContent.includes(".")) {
        return; // Already has a decimal, do nothing
    }
    display.textContent += ".";
    return;
}
        if (button.textContent === "C") {
    display.textContent = "";
    return;
}
if (button.textContent === "+" || button.textContent === "-" || button.textContent === "/" || button.textContent === "X") {
    N1 = display.textContent;
    operator = button.textContent;
    shouldResetDisplay = true;
    return;
}
if (button.textContent === "=") {
    let N2 = display.textContent;
    let result = 0;
    if (operator === "") {
    return;
}
    if(operator === "+") {
        result = Number(N1) + Number(N2);
    } else if (operator === "-") {
        result = Number(N1) - Number(N2);
    } else if (operator === "/") {
    if (Number(N2) === 0) {
        display.textContent = "Error";
        shouldResetDisplay = true;
        return;
    }
    result = Number(N1) / Number(N2);
    } else if (operator === "X") {
        result = Number(N1) * Number(N2);
    }
    
    display.textContent = result;
    shouldResetDisplay = true;
    return;
}
        const value = button.textContent;
        display.textContent += value;
    });
});
document.addEventListener("keydown", function(event) {
    const key = event.key;
    
    if (key >= "0" && key <= "9") {
        clickButton(key);
    } else if (key === "+" || key === "-" || key === "/" || key === "*") {
        clickButton(key);
    } else if (key === "Enter" || key === "=") {
        clickButton("=");
    } else if (key === "Escape" || key === "c" || key === "C") {
        clickButton("C");
    } else if (key === ".") {
        clickButton(".");
    }
});

function clickButton(value) {
    const buttons = document.querySelectorAll("button");
    buttons.forEach(function(btn) {
        if (btn.textContent === value || btn.dataset.value === value) {
            btn.click();
        }
    });
}