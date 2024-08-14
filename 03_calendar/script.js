const year = document.querySelector("#year");
const month = document.querySelector("#month");
const days = document.querySelectorAll(".days p");
const dateWrap = document.querySelector(".date_wrap");

let currentDate = new Date();
let yearTxt = currentDate.getFullYear();
let monthTxt = currentDate.getMonth();

let firstDate = new Date(yearTxt, monthTxt, 1);
let lastDate = new Date(yearTxt, monthTxt + 1, 0);

/** 텍스트 입력 */
year.innerHTML = yearTxt;
month.innerHTML = (monthTxt + "").length === 1 ? "0" + (monthTxt + 1) : monthTxt + 1;

let num = 0;
let dayCount = firstDate.getDay();

while (num < lastDate.getDate()) {
    // let date = `<div class="date">${num}</div>`;
    if (dayCount > 0) {
        dayCount--;
        dateWrap.insertAdjacentHTML("beforeend", `<div class="date_last">${new Date(yearTxt, monthTxt, 0).getDate() - dayCount}</div>`);
    } else {
        num++;
        dateWrap.insertAdjacentHTML("beforeend", `<div class="date">${num}</div>`);
    }
}


console.log(firstDate.getDay(), lastDate.getDate());