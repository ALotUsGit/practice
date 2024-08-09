const btnAdd = document.querySelector(".btn_add");
const inputUser = document.querySelector(".input_user");
const btnDelete = document.querySelectorAll(".btn_delete");
const listWrap = document.querySelector(".list_wrap");
const noList = document.querySelector(".no_list");

function insertList(list) {
    const newList = `<li>
                        <input type="checkbox" class="check_completed" />
                        <p>${list}</p>
                        <button class="btn_delete" onclick="deleteList(this)"></button>
                    </li>`;

    listWrap.insertAdjacentHTML("beforeend", newList);
}

for (let i = 0; i < localStorage.length; i++) {
    insertList(localStorage.key(i));
}

function listNumCheck() {
    if (listWrap.childElementCount == 0) {
        noList.style.display = "block";
    } else {
        noList.style.display = "none";
    }
}

listNumCheck();

function deleteList(e) {
    e.parentNode.remove();

    const txt = e.previousElementSibling.textContent;
    window.localStorage.removeItem(txt)
    listNumCheck();
}

btnAdd.addEventListener("click", e => {
    const inputUserValue = inputUser.value.trim()
    if (inputUserValue === "") {
        return;
    };

    insertList(inputUserValue);

    inputUser.value = "";
    window.localStorage.setItem(inputUserValue, inputUserValue);

    noList.style.display = "none";
    
    listNumCheck();
});
