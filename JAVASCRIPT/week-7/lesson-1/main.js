//! LOCALSTORAJE

// localStorage.setItem("goods", JSON.stringify([]));

// JSON.parse(localStorage.getItem("goods"));

// localStorage.removeItem("goods");

// localStorage.clear();

// window.onstorage = (event) => {
//   alert("event in localstorage");
// };

// console.log(window.localStorage);

// console.log(this.localStorage);

// console.log(typeof localStorage);

// localStorage.setItem("breakfast", "eggs");
// localStorage.setItem("lunch", "soup");
// console.log(localStorage.getItem("breakfast"));
// console.log(localStorage.getItem("dinner")); //null
// localStorage.removeItem("breakfast");
// localStorage.clear();

//! ===== TODO LIST =======

let btn = document.querySelector(".btn");
let inp = document.querySelector(".task-input");
let list = document.querySelector(".task-list");
// console.log(btn);

btn.addEventListener("click", () => {
  //событие клик на кнопку добавить
  if (!inp.value.trim()) {
    // проверка на заполненность инпута
    alert("Заполните поле!");
    return;
  }
  let obj = {
    task: inp.value, // помещаем значение инпута в свойство таск нового обьекта
  };
  setItemToStorege(obj); // вызов функции для добавления в localStorage
  createElement(); // вызов функции отображения данных
  inp.value = ""; // очищаем инпут
});
s; // вызов функции отображения данных

function setItemToStorege(task) {
  // добавление новых тасков в localStorage
  let data = JSON.parse(localStorage.getItem("tasks-data")); // стягиваем массив из localStorage и преобразовываем в обычный формат JS
  data.push(task); // в этот же массив добавляем новый обьект
  localStorage.setItem("tasks-data", JSON.stringify(data)); // обнавленный массив преобразовываем в JSON  и отправляем обратно в localStorage
}

function createElement() {
  // отображение данных
  list.innerHTML = ""; // очищаем страницу
  if (!localStorage.getItem("tasks-data")) {
    // проверка на наличие ключа в localStorage
    localStorage.setItem("tasks-data", "[]");
  }
  let newData = JSON.parse(localStorage.getItem("tasks-data"));
  //   console.log(newData);
  newData.forEach((item, index) => {
    // перебираем массив и для каждого элемента создаем новый li тег с кнопками
    let li = document.createElement("li");
    let btnEdit = document.createElement("button");
    let btnDelete = document.createElement("button");

    li.innerText = item.task;
    btnEdit.innerText = "Edit";
    btnDelete.innerText = "Delete";

    li.append(btnEdit);
    li.appendChild(btnDelete);

    btnDelete.addEventListener("click", () => {
      // событие на кнопку удаления
      deleteElement(index); // вызов функции удаления
    });

    btnEdit.addEventListener("click", () => {
      // событие на кнопку редактирования
      editElement(index, item); // вызов функции редактирования
    });

    list.appendChild(li); // добавляем в тег ul новый созданный тег li
  });
}
function deleteElement(index) {
  // функция удаления
  let data = JSON.parse(localStorage.getItem("tasks-data")); // стягиваем массив из localStorage и преобразовываем в обычный формат JS
  data.splice(index, 1); // удаляем нужный элемент
  localStorage.setItem("tasks-data", JSON.stringify(data)); // отправляем и заменяем старый на новый
  createElement(); // вызов функции отображения данных
}

let mainModal = document.querySelector(".main-modal");
let inpEdit = document.querySelector(".inp-edit");
let btnCloser = document.querySelector(".btn-closer");

function editElement(index, item) {
  // функция для редактирования
  mainModal.style.display = "block"; // открываем мадальное окно
  inpEdit.setAttribute("id", index); // предаем индекс как id для
  inpEdit.value = item.task; // отображаем данные чтобы изменить

  // let data = localStorage.getItem("tasks-data");
}

let btnSave = document.querySelector("click", () => {
  // событик на кнопку сохраниния
  let data = JSON.parse(localStorage.getItem("tasks-data"));
  let index = inpEdit.id; // записываем id(id приходит из функции editElement)  в переменную
  if (!inpEdit.value.trim()) {
    alert("Заполните поле!");
    return;
  }
  let newTask = {
    task: inpEdit.value, // создаем обьект для того чтобы заменить старый
  };
  data.splice(index, 1, newTask); // заменяем старый обьект на обнавленный
  localStorage.setItem("tasks-data", JSON.stringify(data)); // обавляем localStorage
  mainModal.style.display = "none";
  createElement();
});
