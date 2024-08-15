const year = document.querySelector("#year");
const month = document.querySelector("#month");
const days = document.querySelectorAll(".days p");
const dateWrap = document.querySelector(".date_wrap");

const monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let today = new Date();
let firstDate;
let lastDate;

(calendar = () => {
    year.innerHTML = today.getFullYear();
    let monthTxt = month.innerHTML = monthArr[today.getMonth()];

    firstDate = new Date(year.textContent, monthArr.indexOf(monthTxt), 1);
    lastDate = new Date(year.textContent, monthArr.indexOf(monthTxt) + 1, 0);

    let num = 0;
    let dayCount = firstDate.getDay();

    dateWrap.innerHTML = "";
    while (num < lastDate.getDate()) {
        if (dayCount > 0) { // 날짜를 원하는 요일부터 노출 시키기 위한 if문
            dayCount--;
            dateWrap.insertAdjacentHTML("beforeend", `<div class="date_last"></div>`);
        } else {
            num++;
            dateWrap.insertAdjacentHTML("beforeend", `<div class="date">${num}</div>`);
        }
    }
})();

document.querySelectorAll(".date").forEach((v, i) => {
    if (i === today.getDate() - 1) v.classList.add("active");
});

/** 이전 버튼 클릭 */
document.querySelector(".btn_prev").addEventListener("click", e => {
    // 현재 보이는 달의 마지막날 만큼 빼고 날짜를 업데이트 시킨다.
    let newDate = lastDate.getDate() - lastDate.getDate();
    today.setDate(newDate);
    calendar();
});

/** 다음 버튼 클릭 */
document.querySelector(".btn_next").addEventListener("click", e => {
    let newDate = firstDate.getDate() + lastDate.getDate();
    today.setDate(newDate);
    calendar();
});