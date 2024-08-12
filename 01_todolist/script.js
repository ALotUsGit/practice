const btnAdd = document.querySelector(".btn_add");
const inputUser = document.querySelector(".input_user");
const listWrap = document.querySelector(".list_wrap");
const noList = document.querySelector(".no_list");

/**
 * 리스트 HTML
 * @param {*} list 사용자가 입력한 할 일 목록
 * @param {*} checked 완료여부 (기본값 = false)
 */
function insertList(list, checked = " ") {
    const newList = `<li>
                        <label>
                            <input type="checkbox" class="check_completed" onchange="checkValue(this)" ${checked} />
                            <span>${list}</span>
                            <input type="text" class="edit_input" />
                            <button class="btn_edit" onclick="editList(this)">수정</button>
                            <button class="btn_cancle" onclick="editCancle(this)">취소</button>
                        </label>
                        <button class="btn_delete" onclick="deleteList(this)">삭제</button>
                    </li>`;

    listWrap.insertAdjacentHTML("beforeend", newList);
}

/**
 * 페이지 로드 시 로컬 스토리지 확인해서 리스트 뿌리기
 */
for (let i = 0; i < localStorage.length; i++) {
    let localKey = localStorage.key(i);
    let checkConfirm = localStorage.getItem(localKey) === "checked" ? "checked" : " ";
    insertList(localKey, checkConfirm);
}

/**
 * 할일 갯수 체크 함수
 */
function listNumCheck() {
    listWrap.childElementCount == 0 ? noList.style.display = "block" : noList.style.display = "none";
}

listNumCheck();

/**
 * list 항목 추가 함수
 */
function addList() {
    const inputUserValue = inputUser.value.trim(); 
    if (inputUserValue === "") return; // 아무것도 입력 안했을 경우 return

    insertList(inputUserValue); // 입력내용을 받아 전달

    inputUser.value = "";
    window.localStorage.setItem(inputUserValue, inputUserValue);

    listNumCheck();
}

/**
 * 개별 삭제 함수
 * @param {} e 클릭한 요소
 */
function deleteList(e) {
    e.parentNode.remove(); // 클릭한 요소의 부모인 li 삭제
    
    const txt = e.previousElementSibling.querySelector("span").textContent;
    window.localStorage.removeItem(txt); // 해당 요소 로컬 스토리지에서 삭제
    listNumCheck(); // 리스트가 0개일 경우 .no_list 노출 위해 함수 호출
}

/** 수정 관련한 공통 요소 함수 */
function editCm(e) {
    e.parentNode.querySelector("span").style.display = "block";
    e.parentNode.querySelector(".edit_input").style.display = "none";
    e.parentNode.querySelector(".btn_edit").innerHTML = "수정";
    e.parentNode.querySelector(".btn_cancle").style.display = "none";
}

/** 수정 버튼 함수 */
function editList(e) {
    const span = e.parentNode.querySelector("span");
    const editInput = e.parentNode.querySelector(".edit_input");
    const btnCancle = e.parentNode.querySelector(".btn_cancle");

    if (e.textContent === "수정") { // 버튼의 텍스트가 "수정"인 경우
        e.textContent = "완료";
        span.style.display = "none";
        editInput.value = span.innerHTML.trim();
        editInput.style.display = "block";
        btnCancle.style.display = "block";
    } else { // 버튼의 텍스트가 "완료"인 경우
        if (editInput.value.trim() === "") { // input이 비었을 경우 focus와 함께 return
            editInput.focus();
            return;
        }

        let originalVal = localStorage.getItem(span.textContent); // 기존의 value값(완료여부 상태) 저장
        localStorage.removeItem(span.textContent); // 로컬 스토리지에서 기존 key-value 삭제

        span.innerHTML = editInput.value.trim(); // 수정된 내용을 span에 반영
        localStorage.setItem(editInput.value.trim(), originalVal); // 로컬 스토리지에 수정된 내용 추가

        editCm(e);
    }
}

/** 취소 버튼 함수 */
function editCancle(e) {
    editCm(e);
}

/**
 * 개별 checkbox 변화 감지 및 로컬 value 값 변경
 * @param {*} e 변화된 input[type="checkbox"] 
 */
function checkValue(e) {
    const txt = e.nextElementSibling.textContent;
    e.checked === true ? localStorage.setItem(txt, "checked") : localStorage.setItem(txt, "");
}

// 추가 버튼 클릭하면 항목 추가
btnAdd.addEventListener("click", addList);

// 엔터 누르면 항목 추가
inputUser.addEventListener("keypress", e => {
    if (e.keyCode === 13) addList(); 
});


// 전체 삭제 버튼
document.querySelector("#btnAllDelete").addEventListener("click", e => {
    listWrap.innerHTML = ""; // 리스트 HTML 전체 삭제
    localStorage.clear(); // 로컬 스토리지 전체 삭제
    listNumCheck();
});

// 전체 선택
document.querySelector("#allCk").addEventListener("click", e => {
    const checkCompleted = document.querySelectorAll(".check_completed");

    if (e.currentTarget.checked) { // 전체 선택 체크한 경우
        checkCompleted.forEach(v => {
            v.checked = true; // 리스트 항목들 체크로 변경
            localStorage.setItem(v.nextElementSibling.textContent, "checked"); // 로컬 스토리지 value 값 checked로 변경
        })
    } else { // 전체 선택 체크 해지한 경우
        checkCompleted.forEach(v => { 
            v.checked = false; // 리스트 항목들 체크 해지
            localStorage.setItem(v.nextElementSibling.textContent, ""); // 로컬 스토리지 value 값 빈 값으로 변경
        })
    }
});
