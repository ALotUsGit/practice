const input = document.querySelector("input");
const nums = document.querySelectorAll(".num");
const operators = document.querySelectorAll(".operator");

let viewNum = "";
let tempArr = ["", "", ""];
let accureNum = 0;

/** 연산자 혹은 enter 클릭 시 진행할 계산 함수 */
const caculate = () => {
    const num1 = Number(tempArr[0]);
    const num2 = Number(tempArr[2]);
    tempArr[0] =
        num2 == ""
            ? num1
            : tempArr[1] === "+"
            ? num1 + num2
            : tempArr[1] === "-"
            ? num1 - num2
            : tempArr[1] === "/"
            ? num1 / num2
            : num1 * num2;
    input.value = tempArr[0];
};

nums.forEach((num) => {
    num.addEventListener("click", () => {
        /** tempArr[1]에 값이 있다면 2번에 숫자를 추가, 없다면 0번에 추가 */
        if (tempArr[1] === "") {
            tempArr[0] += num.textContent;
            input.value = tempArr[0];
        } else {
            tempArr[2] += num.textContent;
            input.value = tempArr[2];
        }
    });
});

operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        /** tempArr[2]에 입력값이 있으면, 0번과 2번을 계산 후 1번에 연산자를 추가, 아니라면 바로 추가 */
        tempArr[2].length < 0
            ? (tempArr[1] = operator.textContent)
            : (caculate(), (tempArr = [tempArr[0], operator.textContent, ""]));
    });
});

document.querySelector(".dot").addEventListener("click", () => {
    if (input.value.indexOf(".") < 0) {
        tempArr[2] === "" ? (tempArr[0] += ".") : (tempArr[2] += ".");
        input.value += ".";
    }
});

document.querySelector(".enter").addEventListener("click", () => {
    caculate();
    tempArr = ["", "", ""];
});

document.querySelector(".delete").addEventListener("click", () => {
    input.value = "";
    tempArr = ["", "", ""];
});

input.addEventListener("keypress", (e) => {
    e.preventDefault();
});
