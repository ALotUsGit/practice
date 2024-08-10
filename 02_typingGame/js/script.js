const start = document.querySelector("#start");
const gameArea = document.querySelector("#gameArea");
const wordInput = document.querySelector("#wordInput");
const currentWord = document.querySelector("#currentWord");
const score = document.querySelector("#score");
const time = document.querySelector("#time");
const message = document.querySelector("#message");

start.addEventListener("click", e => {
    e.currentTarget.textContent === "Start" ? e.currentTarget.innerText = "Reset" : e.currentTarget.innerText = "Start";

    gameArea.classList.remove("d-none");
});