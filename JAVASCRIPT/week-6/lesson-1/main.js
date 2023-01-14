//! DOM - Document Object Model

//! Селекторы NativeJS

//! =============== методы getElement/s ========
// console.log(document.documentElement); // html

// // console.log(document.html);

// console.log(typeof document.head); // head
// console.log(document.body); // body

// let title = document.getElementsByTagName("h1");
// console.log(title); //HTMLCollection[h1]
// // console.log(document.body);
// let list = document.getElementById("list");
// // console.log(list);

// let points = document.getElementsByClassName("elem");
// console.log(points);

// points.forEach((elem) => {
//   console.log(elem);
// });
//! У HTML Collection нет привычных методов массивов !
// for (let point of points) {
//   console.log(point);
// }

// let block = document.getElementsByName("block");
// console.log(block);

//! ======querySelector/all======
// let elem = document.querySelector(".elem");
// console.log(elem);

let elem = document.querySelectorAll(".elem");
// console.log(elem);

//? Nodelist - это масссивоподобная коллекция, в отличие от HTMLCollection Nodelist доступен аналогичный методу массивов forEach:
// elem.forEach((elem) => console.log(elem.innerHTML));

// let title = document.querySelectorAll("h1");
// let list = document.querySelectorAll("#list");
// let points = document.querySelectorAll(".elem");
// let block = document.querySelectorAll("[name='block']");
// console.log(title, list, block, points);

//! ======== createElement / innerHTML

// const newDiv = document.createElement("div");
// console.log(newDiv);

// //? запись текста в свойство innerText
// newDiv.innerText = "текс внутри div";

// newDiv.innerHTML = "<h1>WELCOME!</h1>";

//! Nodelist vs HTMLCollection

// const list = document.getElementById("list");
// console.log(list.children);

//1.Для массивоподобного объекта HTMLCollection доступно такое свойство как children, который выводит все дочерьние элементы коллекции:

//nodelist
// const list = document.querySelector("#list");
// console.log(list.childNodes);

// 2.
// const li = document.querySelectorAll("li");
// console.log(li.length);

// console.log(li[0]);
// li[1].style.color = "pink";

//3. HTMLCollection и Nodelist можно перебрать циклом for:

// const li = document.getElementsByTagName("li");
// for (let x of li) {
//   console.log(x);
// }

// const li = document.querySelectorAll("li");
// for (let x of li) {
//   console.log(x);
// }

//4. Однако только для Nodelist доступны методы массивов forEach((x)=>console.log(x))
// li.forEach((x)=> console.log(x))

// 5.  NodeList является статичной коллекцией, а HTMLCollection "живой". При добавлении нового элемента в DOM, HTMLCollection зафиксирует изменение, в то время как NodeList нет.

// const li = document.querySelectorAll("li");
// const ul = document.querySelector("ul");
// const button = document.querySelector("button");

// button.addEventListener("click", () => {
//   const newLi = document.createElement("li");
//   newLi.innerText = "Новый элемент";
//   ul.append(newLi);
//   console.log(li);
// });

//! STYLE

// let block3 = document.getElementById("block");

// block3.setAttribute(
//   "style",
//   "width: 200px; height: 200px; background-color: lightgray; "
// );
// console.log(block3.style);

// let block4 = document.getElementById("block4");
// console.log(block4);
// let styles = {
//   "background-color": "aqua",
//   width: "200px",
//   height: "200px",
//   border: "2px solid yellow",
// };
// console.log(block4.style);
// Object.assign(block4.style, styles);

// let style = `
// font-size: 1em;
// color: red;
// transform: rotate(10deg);
// background-color: black;`;
// document.querySelector("*").style = style;

//! firstElementChild / lastElementChild / nextElementSibiling / previouseElementSibiling
const list = document.querySelector("#list");
// console.log(list.firstElementChild); // JavaScript

// console.log(list.lastElementChild); // last - Java
// console.log(list.lastElementChild.textContent);\

const block2 = document.querySelector("#block2");
// console.log(block2.nextElementSibiling);

// console.log(block2.previousElementSibling);

//! append, prepend, before, after

const ul = document.querySelector("ul");

const newNode = document.createElement("li");

newNode.innerText = "Ruby";

ul.append(newNode);
// ul.append("JS27"); // работает
// ul.appendChild("js27"); // не работает
// console.log(newNode);

//? Метод prepend в свою очередь, добавляет узлы в начало указанного родительского узла:
const newNode2 = document.createElement("li");
newNode2.innerText = "Pascal";
ul.prepend(newNode2);
// console.log(newNode2);

//? Метод befor помещает данные до элемента
const newNode3 = document.createElement("li");
newNode3.innerText = "Swift";
ul.before(newNode3);

// ? Метод after помещает данные после элемента

const newNode4 = document.createElement("li");
newNode4.innerText = "Go";
ul.after(newNode4);

//! =====insertAdjacentHTML("afterbegin",)

// Для того чтобы указать куда именно мы хотим вставить элемент, используются ключевые слова:

// "beforebegin" – вставить html непосредственно перед элементом(на одном с ним уровне),
// "afterbegin" – вставить html в начало указанного элемента(т.е внутри),
// "beforeend" – вставить html в конец элемента(внутри элемента),
// "afterend" – вставить html непосредственно после элемента(на одном уровне)

// const block5 = document.querySelector("#block5");
// block5.insertAdjacentHTML("afterbegin", "<span>***</span>");

// block5.insertAdjacentHTML("afterend","<a href='https://web.telgram.org/k/#-1551585760'>LINK</a>");

//! ---------classlist--------

const block5 = document.querySelector("#block5");
// console.log(block5);
// console.log(block5.classList);
//! добавление класса
block5.classList.add("newClass");
//! удаление класса
// block5.classList.remove("newClass");
//! добавит если нету, удалить если есть
block5.classList.toggle("newClass");
//! проверка true/false
console.log(block5.classList.contains("newClass"));
