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
const decimalPoint = document.getElementById("decimalPoint");
const backspace = document.getElementById("backspace");
const equal = document.getElementById("equal");

let formulaNumber = "";
let result;

function formulaDisplay() {
    formula.innerHTML = `<span class="formula-only">${formulaNumber}</span><br><span class="result">${result}</span>`;
    // 式の計算結果を表示
}

function equalDisplay() {
    formula.innerHTML = `<span class="fomula-only">${result}</span><br><span class="result">${result}</span>`;
    // 式の計算結果を表示
}

function formulaDisplayReset() {
    formulaNumber = "";
    result = "";
    newNumber = "";
    formula.innerHTML = "";
    formulaDisplay();
}

function numberInput(newNumber) {
    // styleをリセット
    document.body.classList.remove("equal");

    // 数字入力
    if (newNumber == "0" || newNumber == "1" || newNumber == "2" || newNumber == "3" || newNumber == "4" || newNumber == "5" || newNumber == "6" || newNumber == "7" || newNumber == "8" || newNumber == "9") {
        if (!(formulaNumber == "0" && formulaNumber.slice(-1) == "0")) {
            formulaNumber = formulaNumber + newNumber;
            result = eval(formulaNumber);
            formulaDisplay();
        } else {
            formulaNumber = formulaNumber + newNumber;
            result = eval(formulaNumber);
            formulaNumber = newNumber;
            formulaDisplay();
        };
    };

    // 演算記号入力
    if (newNumber == "+" || newNumber == "-" || newNumber == "*" || newNumber == "/" || newNumber == "." || newNumber == "equal") {
        formulaNumber = formulaNumber + newNumber;
        formulaDisplay();
    }

    // Backspace
    if (newNumber == "Backspace") {
        if (formulaNumber.length == "1" || formulaNumber == "") {
            formulaDisplayReset();
        } else {
            formulaNumber = formulaNumber.slice(0, -1);
            if (formulaNumber.slice(-1) == "+" || formulaNumber.slice(-1) == "-" || formulaNumber.slice(-1) == "*" || formulaNumber.slice(-1) == "/" || formulaNumber.slice(-1) == ".") {
                formulaDisplay();
            } else {
                result = eval(formulaNumber);
                formulaDisplay();
            };
        };
    };

    // AC
    if (newNumber == "ac") {
        formulaDisplayReset();
    };

    // equal
    if (newNumber == "equal") {
        formulaNumber = String(result);
        equalDisplay();
    };

    console.log(`
        formulaNumber (式)          : ${formulaNumber}
        newNumber     (直前に入力)  : ${newNumber}
        result        (解)          : ${result}
        `);
};

const pushBackgorundColor = "rgb(50, 50, 50)";

function pushAc() {
    numberInput("ac");
    ac.style.backgroundColor = pushBackgorundColor;
    setInterval(() => {
        ac.style.backgroundColor = "transparent";
    },100);
};

function pushN0() {
    numberInput("0");
    n0.style.backgroundColor = pushBackgorundColor;
    setInterval(() => {
        n0.style.backgroundColor = "transparent";
    },100);
};

function pushN1() {
    numberInput("1");
    n1.style.backgroundColor = pushBackgorundColor;
    setInterval(() => {
        n1.style.backgroundColor = "transparent";
    },100);
};

function pushN2() {
    numberInput("2");
    n2.style.backgroundColor = pushBackgorundColor;
    setInterval(() => {
        n2.style.backgroundColor = "transparent";
    },100);
};

function pushN3() {
    numberInput("3");
    n3.style.backgroundColor = pushBackgorundColor;
    setInterval(() => {
        n3.style.backgroundColor = "transparent";
    },100);
};

function pushN4() {
    numberInput("4");
    n4.style.backgroundColor = pushBackgorundColor;
    setInterval(() => {
        n4.style.backgroundColor = "transparent";
    },100);
};

function pushN5() {
    numberInput("5");
    n5.style.backgroundColor = pushBackgorundColor;
    setInterval(() => {
        n5.style.backgroundColor = "transparent";
    },100);
};

function pushN6() {
    numberInput("6");
    n6.style.backgroundColor = pushBackgorundColor;
    setInterval(() => {
        n6.style.backgroundColor = "transparent";
    },100);
};

function pushN7() {
    numberInput("7");
    n7.style.backgroundColor = pushBackgorundColor;
    setInterval(() => {
        n7.style.backgroundColor = "transparent";
    },100);
};

function pushN8() {
    numberInput("8");
    n8.style.backgroundColor = pushBackgorundColor;
    setInterval(() => {
        n8.style.backgroundColor = "transparent";
    },100);
};

function pushN9() {
    numberInput("9");
    n9.style.backgroundColor = pushBackgorundColor;
    setInterval(() => {
        n9.style.backgroundColor = "transparent";
    },100);
};

function pushAddition() {
    numberInput("+");
    addition.style.backgroundColor = pushBackgorundColor;
    setInterval(() => {
        addition.style.backgroundColor = "transparent";
    },100);
};

function pushSubtraction() {
    numberInput("-");
    subtraction.style.backgroundColor = pushBackgorundColor;
    setInterval(() => {
        subtraction.style.backgroundColor = "transparent";
    },100);
};

function pushDivision() {
    numberInput("/");
    division.style.backgroundColor = pushBackgorundColor;
    setInterval(() => {
        division.style.backgroundColor = "transparent";
    },100);
};

function pushMultiply() {
    numberInput("*");
    multiply.style.backgroundColor = pushBackgorundColor;
    setInterval(() => {
        multiply.style.backgroundColor = "transparent";
    },100);
};

function pushDecimalPoint() {
    numberInput(".");
    decimalPoint.style.backgroundColor = pushBackgorundColor;
    setInterval(() => {
        decimalPoint.style.backgroundColor = "transparent";
    },100);
};

function pushBackspace() {
    numberInput("Backspace");
    backspace.style.backgroundColor = pushBackgorundColor;
    setInterval(() => {
        backspace.style.backgroundColor = "transparent";
    },100);
};

function pushEqual() {
    numberInput("equal");
    equal.style.backgroundColor = pushBackgorundColor;
    setInterval(() => {
        equal.style.backgroundColor = "transparent";
    },100);
};


ac.addEventListener("click", () => {
    pushAc();
});
window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" || event.key === "c") {
        pushAc();
    }
});

n0.addEventListener("click", () => {
    pushN0();
});
window.addEventListener("keydown", (event) => {
    if (event.key === "0") {
        pushN0();
    }
});

n1.addEventListener("click", () => {
    pushN1();
});
window.addEventListener("keydown", (event) => {
    if (event.key === "1") {
        pushN1();
    }
});

n2.addEventListener("click", () => {
    pushN2();
});
window.addEventListener("keydown", (event) => {
    if (event.key === "2") {
        pushN2();
    }
});

n3.addEventListener("click", () => {
    pushN3();
});
window.addEventListener("keydown", (event) => {
    if (event.key === "3") {
        pushN3();
    }
});

n4.addEventListener("click", () => {
    pushN4();
});
window.addEventListener("keydown", (event) => {
    if (event.key === "4") {
        pushN4();
    }
});

n5.addEventListener("click", () => {
    pushN5();
});
window.addEventListener("keydown", (event) => {
    if (event.key === "5") {
        pushN5();
    }
});

n6.addEventListener("click", () => {
    pushN6();
});
window.addEventListener("keydown", (event) => {
    if (event.key === "6") {
        pushN6();
    }
});

n7.addEventListener("click", () => {
    pushN7();
});
window.addEventListener("keydown", (event) => {
    if (event.key === "7") {
        pushN7();
    }
});

n8.addEventListener("click", () => {
    pushN8();
});
window.addEventListener("keydown", (event) => {
    if (event.key === "8") {
        pushN8();
    }
});

n9.addEventListener("click", () => {
    pushN9();
});
window.addEventListener("keydown", (event) => {
    if (event.key === "9") {
        pushN9();
    }
});

addition.addEventListener("click", () => {
    pushAddition();
});
window.addEventListener("keydown", (event) => {
    if (event.key === "+") {
        pushAddition();
    }
});

subtraction.addEventListener("click", () => {
    pushSubtraction();
});
window.addEventListener("keydown", (event) => {
    if (event.key === "-") {
        pushSubtraction();
    }
});

multiply.addEventListener("click", () => {
    pushMultiply();
});
window.addEventListener("keydown", (event) => {
    if (event.key === "*") {
        pushMultiply();
    }
});

division.addEventListener("click", () => {
    pushDivision();
});
window.addEventListener("keydown", (event) => {
    if (event.key === "/") {
        pushDivision();
    }
});

decimalPoint.addEventListener("click", () => {
    pushDecimalPoint();
});
window.addEventListener("keydown", (event) => {
    if (event.key === ".") {
        pushDecimalPoint();
    }
});

backspace.addEventListener("click", () => {
    pushBackspace();
});
window.addEventListener("keydown", (event) => {
    if (event.key === "Backspace") {
        pushBackspace();
    }
});

equal.addEventListener("click", () => {
    pushEqual();
});
window.addEventListener("keydown", (event) => {
    if (event.key === "=" || event.key === "Enter") {
        pushEqual();
    }
});