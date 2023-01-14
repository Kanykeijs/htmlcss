// ! TODOS
/** 
 *GET - получать данные 
 PATCH - частичное изменение  
 PUT- полная замена данных  
 POST - добавление данных 
 DELETE - удаление данных 
 
 CRUD - Create( POST - reguest) Read(GET - reguest)   Update(PUT/PATCH) Delete(DELETE) 
 * */

//   API - Application programming interface

//npx json-server -w db.json -p 8000

// ? npm i -g json-server
//  http://localhost:8000/todos
const API = "http://localhost:8000/todos";

let inpAdd = document.getElementById("inp-add");
let btnAdd = document.getElementById("btn-add");

// console.log(inpAdd, btnAdd);

btnAdd.addEventListener("click", () => {
  let newTodo = {
    todo: inpAdd.value,
  };
  //   console.log(newTodo);

  if (newTodo.todo.trim() === "") {
    alert("Заполните поле!");
    return;
  }

  fetch(API, {
    method: "POST",
    body: JSON.stringify(newTodo),
    headers: {
      "Content-type": "application/json; charset=utf-8",
    },
  });

  inpAdd.value = "";
});

let list = document.getElementById("list");
// console.log(list);
async function getTodos() {
  let response = await fetch(API).then((res) => res.json());
  //   console.log(response);
  list.innerHTML = "";
  response.forEach((item) => {
    let newElem = document.createElement("div");
    newElem.id = item.id;
    newElem.innerHTML = `<span>${item.todo}</span>
    <button class="btn-delete">Delete</button>
    <button class="btn-edit">Edit</button>`;
    list.append(newElem);
    // console.log(newElem);
  });

  //   let data = fetch(API)
  //     .then((res) => res.json())
  //     .then((data) => data);
  //   console.log(data.then((data) => console.log(data)));
}
// let btnDelete = document.querySelector("")
getTodos();

document.addEventListener("click", async (e) => {
  //! DELETE
  if (e.target.className === "btn-delete") {
    // console.log("YES!");
    // console.log(e.target.parentNode.id);
    let id = e.target.parentNode.id;
    await fetch(`${API}/${id}`, {
      method: "DELETE",
    });
  }
  //   console.log(e.target);
  getTodos();
  //! Update
  if (e.target.className === "btn-edit") {
    modalEdit.style.display = "flex";
    let id = e.target.parentNode.id;
    console.log(id);
    let response = await fetch(`${API}/${id}`)
      .then((res) => res.json())
      .catch((err) => console.log(err));
    // console.log(response);
    inpEditTodo.value = response.todo;
    inpEditTodo.className = response.id;
  }
});

let modalEdit = document.getElementById("modal-edit");
let modalEditClose = document.getElementById("modal-edit-close");
let inpEditTodo = document.getElementById("inp-edit-todo");
let btnSaveEdit = document.getElementById("btn-save-edit");

// console.log(modalEdit, modalEditClose, inpEditTodo, btnSaveEdit);

btnSaveEdit.addEventListener("click", async (e) => {
  let editedTodo = {
    todo: inpEditTodo.value,
  };
  console.log(inpEditTodo.className);

  let id = inpEditTodo.className;
  console.log(id);
  await fetch(`${API}/${id}`, {
    method: "PATCH",
    body: JSON.stringify(editedTodo),
    headers: {
      "Content-type": "application/json; charset=utf-8",
    },
  });
  modalEdit.style.display = "none";
  getTodos();
});

modalEditClose.addEventListener("click", () => {
  modalEdit.style.display = "none";
});
