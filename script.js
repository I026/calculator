// const keypads = ["0","1","2","3","4","5","6","7","8","9","addition","subtraction","multiply"]
// let keypadsDeclarationNumber = 0;
// while (keypadsDeclarationNumber < keypads.length) {
//     console.log(`
//         n${keypads[keypadsDeclarationNumber]}.addEventListener("click", () => {
//             numberInput("${keypads[keypadsDeclarationNumber]}");
//         });
//         `);
//     keypadsDeclarationNumber++;
// };

const formula = document.getElementById("formula");
const ac = document.getElementById("ac");
const n0 = document.getElementById("n0");
const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");
const n3 = document.getElementById("n3");
const n4 = document.getElementById("n4");
const n5 = document.getElementById("n5");
const n6 = document.getElementById("n6");
const n7 = document.getElementById("n7");
const n8 = document.getElementById("n8");
const n9 = document.getElementById("n9");
const addition = document.getElementById("addition");
const subtraction = document.getElementById("subtraction");
const multiply = document.getElementById("multiply");
const division = document.getElementById("division");
const backspace = document.getElementById("backspace");
const equal = document.getElementById("equal");

let formulaNumber = "";
let result;

function formulaDisplay() {
    formula.innerHTML = `<span class="formula-only">=${formulaNumber}</span><br><span class="result">${result}</span>`;
    // 式の計算結果を表示
}

function numberInput(newNumber) {
    document.body.classList.remove("equal");
    // styleをリセット

    // if (newNumber == "Backspace") {
    //     formulaNumber = Math.floor(formulaNumber / 10);
    // } else if (newNumber == "ac") {
    //     formulaNumber = formulaNumber + newNumber;
    // } else {
    //     result = eval(formulaNumber);
    //     formulaNumber = formulaNumber + newNumber;
    // }


    if (!(newNumber == "ac" || newNumber == "Backspace" || newNumber == "+" || newNumber == "-" || newNumber == "*" || newNumber == "/")) {
        if (newNumber == "0" && formulaNumber.length == "0") {
            
        } else {
            formulaNumber = formulaNumber + newNumber;
            result = eval(formulaNumber);
            formulaDisplay();
        }
    }
    if (newNumber == "+" || newNumber == "-" || newNumber == "*" || newNumber == "/") {
        formulaNumber = formulaNumber + newNumber;
        formulaDisplay();
    }
    if (newNumber == "Backspace") {
        formulaNumber = Math.floor(formulaNumber / 10);
        result = eval(formulaNumber);
        formulaDisplay();
    }
    if (newNumber == "ac") {
        formulaNumber = "";
        result = "";
        newNumber = "";
        formula.innerHTML = "";
        formulaDisplay();
    }

    // if (newNumber == "Backspace") {
    //     formulaNumber = Math.floor(formulaNumber / 10);
    //     newNumber = "";
    // } else if (newNumber == "ac") {
    //     formulaNumber = "";
    //     result = "";
    //     newNumber = "";
    //     formula.innerHTML = "";
    // } else {
    //     result = eval(formulaNumber);
    //     formulaNumber = formulaNumber + newNumber;
    //     // 新たな桁を追加
    // }



    console.log(`${formulaNumber} = ${result}`);
};

ac.addEventListener("click", () => {
    numberInput("ac");
});
window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        numberInput("ac");
    }
});

n0.addEventListener("click", () => {
    numberInput("0");
});
window.addEventListener("keydown", (event) => {
    if (event.key === "0") {
        numberInput("0");
    }
});
 
n1.addEventListener("click", () => {
    numberInput("1");
});
window.addEventListener("keydown", (event) => {
    if (event.key === "1") {
        numberInput("1");
    }
});
 
n2.addEventListener("click", () => {
    numberInput("2");
});
window.addEventListener("keydown", (event) => {
    if (event.key === "2") {
        numberInput("2");
    }
});
 
n3.addEventListener("click", () => {
    numberInput("3");
});
window.addEventListener("keydown", (event) => {
    if (event.key === "3") {
        numberInput("3");
    }
});
 
n4.addEventListener("click", () => {
    numberInput("4");
});
window.addEventListener("keydown", (event) => {
    if (event.key === "4") {
        numberInput("4");
    }
});
 
n5.addEventListener("click", () => {
    numberInput("5");
});
window.addEventListener("keydown", (event) => {
    if (event.key === "5") {
        numberInput("5");
    }
});
 
n6.addEventListener("click", () => {
    numberInput("6");
});
window.addEventListener("keydown", (event) => {
    if (event.key === "6") {
        numberInput("6");
    }
});
 
n7.addEventListener("click", () => {
    numberInput("7");
});
window.addEventListener("keydown", (event) => {
    if (event.key === "7") {
        numberInput("7");
    }
});
 
n8.addEventListener("click", () => {
    numberInput("8");
});
window.addEventListener("keydown", (event) => {
    if (event.key === "8") {
        numberInput("8");
    }
});
 
n9.addEventListener("click", () => {
    numberInput("9");
});
window.addEventListener("keydown", (event) => {
    if (event.key === "9") {
        numberInput("9");
    }
});
 
addition.addEventListener("click", () => {
    numberInput("+");
});
window.addEventListener("keydown", (event) => {
    if (event.key === "+") {
        numberInput("+");
    }
});
 
subtraction.addEventListener("click", () => {
    numberInput("-");
});
window.addEventListener("keydown", (event) => {
    if (event.key === "-") {
        numberInput("-");
    }
});
 
multiply.addEventListener("click", () => {
    numberInput("*");
});
window.addEventListener("keydown", (event) => {
    if (event.key === "*") {
        numberInput("*");
    }
});

division.addEventListener("click", () => {
    numberInput("/");
});
window.addEventListener("keydown", (event) => {
    if (event.key === "/") {
        numberInput("/");
    }
});

backspace.addEventListener("click", () => {
    numberInput("Backspace");
});
window.addEventListener("keydown", (event) => {
    if (event.key === "Backspace") {
        numberInput("Backspace");
    }
});

equal.addEventListener("click", () => {
    document.body.classList.add("equal");
});
window.addEventListener("keydown", (event) => {
    if (event.key === "=" ||event.key === "Enter") {
        document.body.classList.add("equal");
    }
});
