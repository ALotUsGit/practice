const start = document.querySelector("#start");
const gameArea = document.querySelector("#gameArea");
const wordInput = document.querySelector("#wordInput");
const currentWord = document.querySelector("#currentWord");
const score = document.querySelector("#score");
const time = document.querySelector("#time");
const gamOver = document.querySelector("#gamOver");
const finalScore = document.querySelector("#finalScore");

start.addEventListener("click", e => {
    if (e.currentTarget.textContent === "Start") {
        e.currentTarget.innerText = "Restart";
    } else {
        e.currentTarget.innerText = "Start";
    }
    gameArea.classList.remove("d-none");
    randomWord();
});

// 임시 단어
const wordsArr = ["word", "Javascript", "Typescript", "vanillaJs", "randomGame"];

const GAME_TIME = 5; // 게임 제한시간
let restTime = 0; // 남은 시간

let timeInterval = null;

/** 단어 랜덤 호출 함수 */
randomWord = () => {
    restTime = GAME_TIME; // 카운트다운
    timeInterval = setInterval(countDown, 1000);

    // 랜덤으로 단어 호출
    let randomIdx = Math.floor(Math.random() * wordsArr.length);
    currentWord.innerHTML = wordsArr[randomIdx];
};

/** 카운트다운 함수 */
countDown = () => { 
    restTime = restTime - 1;
    time.innerHTML = restTime;
    if (restTime === 0) { // 0초로 타임아웃 시 실행
        clearInterval(timeInterval);
        score.innerText = 0;
        gamOver.classList.remove("d-none");
        gameArea.classList.add("d-none");
    };
}

wordInput.addEventListener("keypress", e => {
    if (e.keyCode === 13) { // 엔터 입력 시
        if (e.currentTarget.value.trim() === currentWord.textContent) { // 사용자 입력값이 제시된 단어와 같을 경우
            score.innerText = Number(score.textContent) + 1;
            e.currentTarget.value = "";
            clearInterval(timeInterval);
            randomWord();
            countDown();
        };
    }
});