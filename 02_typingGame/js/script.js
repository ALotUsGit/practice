const lvBtn = document.querySelectorAll(".btn-group button");
const start = document.querySelector("#start");
const gameArea = document.querySelector("#gameArea");
const wordInput = document.querySelector("#wordInput");
const currentWord = document.querySelector("#currentWord");
const score = document.querySelector("#score");
const time = document.querySelector("#time");
const gamOver = document.querySelector("#gamOver");

// 레벨 선택
lvBtn.forEach(v => {
    v.addEventListener("click", () => {
        if (gameArea.classList.contains("d-none")) { // 게임이 진행 중이지 않을 경우
            v.parentNode.querySelector(".active").classList.remove("active");
            v.classList.add("active");
        }
    });
});

/** 게임 시작 함수 */
gameStart = () => {
    gameArea.classList.remove("d-none");
    randomWord();
}

/** 시작버튼 클릭 */
start.addEventListener("click", e => {
    e.currentTarget.classList.add("d-none");
    gameStart();
});

/** 재시작 버튼 클릭 */
document.querySelector("#reStart").addEventListener("click", () => {
    gamOver.classList.add("d-none");
    gameStart();
});


let wordsArr;
const API_URL = "https://random-word-api.herokuapp.com/word?number=300"; // 랜덤 단어 API

(async () => { // 브라우저 실행 시 즉시 호출
    const response = await fetch(API_URL);
    wordsArr = await response.json();
})();

let restTime = 0; // 남은 시간
let timeInterval = null;

/** 단어 랜덤 호출 함수 */
randomWord = () => {
    wordsArr = lvBtn[2].classList.contains("active") ? wordsArr.filter(v => v.length > 6) : wordsArr.filter(v => v.length < 7); // 레벨에 따른 단어길이
    restTime = lvBtn[0].classList.contains("active") ? 7 : 5; // 레벨에 따른 카운트다운
    timeInterval = setInterval(countDown, 1000);
    
    // 랜덤으로 단어 호출
    let randomIdx = Math.floor(Math.random() * wordsArr.length);
    currentWord.innerHTML = wordsArr[randomIdx];

    wordInput.value = ""; // 단어 호출과 함께 input 비우기
    wordInput.focus();
};

/** 카운트다운 함수 */
countDown = () => { 
    restTime = restTime - 1;
    time.innerHTML = restTime;
    if (restTime === 0) { // 0초로 타임아웃 시 실행
        clearInterval(timeInterval);
        document.querySelector("#finalScore").innerText = score.textContent;
        gamOver.classList.remove("d-none");
        gameArea.classList.add("d-none");
    };
}

wordInput.addEventListener("keypress", e => {
    if (e.keyCode === 13) { // 엔터 입력 시
        if (e.currentTarget.value.trim() === currentWord.textContent) { // 사용자 입력값이 제시된 단어와 같을 경우
            score.innerText = Number(score.textContent) + 1;
            clearInterval(timeInterval);
            randomWord();
            countDown();
        };
    }
});