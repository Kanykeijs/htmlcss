//! DOM EVENTS
// let bd = document.querySelector("body");
// let btn = document.querySelector("#button");

// btn.addEventListener("click", changeColor);
// function changeColor() {
//   bd.style.backgroundColor = "red";
// }
// btn.removeEventListener("click", changeColor);

// console.log(btn);
// btn.onclick = () => {
//   btn.style.width = "300px";
//   btn.style.height = "100px";
//   btn.style.backgroundColor = "pink";
// };

//? contextmenu - происходит когда кликнули на элемент правой кнопкой мыши

// let para = document.querySelector("#first");
// para.addEventListener("contextmenu", () => {
//   alert("сработал contextmenu");
// });

// ? mouseover/ mouseout - когда мышь наводится на элемент и покидает элемент
// let img = document.querySelector("#image");
// img.addEventListener("mouseover", () => {
//   alert("HELLO, JS27!");
// });

//? mousedown / mouseup - когда нажали / отжали кнопку мыши на элементе
// let img = document.querySelector("#image");
// function zoom() {
//   img.style.width = "1200px";
//   img.style.height = "800px";
// }
// img.addEventListener("mouseup", zoom);

//? mousemove - при движении мыши
// let img = document.querySelector("#image");
// img.addEventListener("mousemove", (event) => {
//   console.log(event);
// });

// let img = document.querySelector("#image");
// img.addEventListener("click", (e)=>{
//     console.log(e);
// })

//? события для инпута

//? focus -  пользователь фокусирует на элементе, например нажимает на <input>

// let inp = document.querySelector("#inp");
// inp.addEventListener("focus", (e) => {
//   inp.setAttribute("placeholder", "start typing!");
// });

// let myDiv = document.querySelector("#myDiv");
// console.log(myDiv);

// myDiv.style.backgroundColor = "grey";
// myDiv.style.width = "200px";
// myDiv.style.height = "200px";

// // myDiv.addEventListener("click", () => {
// //   console.log("Вы кликнули на мышь!");
// //   myDiv.style.backgroundColor = "yellow";
// // });

// myDiv.addEventListener("mousedown", (e) => {
//   console.log("Вы зажимаете кнопку мыши!");
//   myDiv.style.backgroundColor = "red";
// });

// myDiv.addEventListener("mouseup", (e) => {
//   console.log("Вы зажимаете кнопку мыши!");
//   myDiv.style.backgroundColor = "blue";
// });

// myDiv.addEventListener("dblclick", (e) => {
//   console.log("Двойной клик!");
//   myDiv.style.backgroundColor = "purple";
// });

// myDiv.addEventListener("contextmenu", (e) => {
//   console.log("ВЫ открыли контекстное меню!");
//   myDiv.style.backgroundColor = "pink";
// });

// myDiv.addEventListener("mouseover", (e) => {
//   console.log("Вы попали на блок");
//   myDiv.style.backgroundColor = "green";
// });

// myDiv.addEventListener("mouseleave", (e) => {
//   console.log("Вы покинули блок!");
//   myDiv.style.backgroundColor = "lightblue";
// });

// let colors = ["green", "blue", "black", "yellow", "aqua", "lightblue"];

// myDiv.addEventListener("mousemove", (e) => {
//   const rand = Math.floor(Math.random() * colors.length);
//   console.log("Вы передвигаетесь в блоке!");
//   myDiv.style.backgroundColor = colors[rand];
// });

// document.addEventListener("DOMContentLoaded", () => {
//   console.log("DOM загружен!");
// });

// document.addEventListener("keydown", (e) => {
//   console.log(e.key);
//   myDiv.style.backgroundColor = "orange";
// });

// document.addEventListener("keyup", (e) => {
//   console.log(e.key);
//   myDiv.style.backgroundColor = "yellow";
// });

// document.addEventListener("keypress", (e) => {
//   console.log(e.key, "PRESSED");
// });

// Задачи:

/** 1
 * При нажатии на Button 1, поменяйте фон у всех параграфов на "coral"
 * Использовать цикл
 */

// let parag = document.querySelectorAll("p");
// let btn = document.querySelector("#button1");
// btn.addEventListener("click", (e) => {
//   for (let i = 0; i < parag.length; i++) {
//     parag[i].style.backgroundColor = "coral";
//     console.log(parag);
//   }
// });

// let para = document.getElementsByTagName("p");
// console.log(para);
// let btn = document.querySelector("#button1");
// console.log(btn);
// btn.addEventListener("click", (a) => {
//   for (let i of para) {
//     i.style.color = "coral";
//   }
// });

/** 2
  * При нажатии на Button 1 замените все h2 на странице своим именем
  * Использовать цикл
 /*/

// let para = document.getElementsByTagName("h2");
// console.log(para);
// let btn = document.querySelector("#button1");
// console.log(btn);
// btn.addEventListener("click", (a) => {
//   for (let i of para) {
//     i.innerText = "Aidar";
//   }
// });

/** 3
 * При нажатии на Button 1 выберите элементы нумерованного списка
 * с классом "falseFact" и замените текст на "True Fact".
 * Использовать  метод массива
 */

// let btn = document.querySelector("#button1");

// let falseFact = document.querySelectorAll("ol .falseFact");
// console.log(falseFact);

// btn.addEventListener("click", () => {
//   falseFact.forEach((elem) => {
//     elem.innerText = "True Fact";
//   });
// });

/** 4
 * При нажатии на кнопку 2, поменяйте фон страницы на розовый
 */

// let btn = document.querySelectorAll("#button2");
// btn.style.backgroundColor = "pink";
// console.log(btn); // error

// let checkTask = document.querySelector("#button2");
// checkTask.addEventListener("click", () => {
//   document.body.style.backgroundColor = "pink";
// });

/** 5
 * При нажатии на кнопку 2, поменяйте цвет всех h2 на зеленый
 * Навесить событие как свойство ДОМ элемента (onclick)
 */

// let btn = document.querySelectorAll("#button2");
// console.log(btn);
// let para = document.querySelectorAll("h2");
// console.log(para);
// btn.addEventListener("onclick", () => {
//   para.style.backgroundColor = "green";
// }); // error

// let btn2 = document.querySelector("#button2");
// let h2 = document.querySelectorAll("h2");
// btn2.onclick = () => {
//   h2.forEach((item) => {
//     item.style.color = "green";
//   });
// };

/** 6
 * При нажатии на кнопку 2, поместите внутрь тэга "blockquote"
 "<span>no quote</span>"
 */
// let btn2 = document.querySelector("#button2");
// let blockquote = document.querySelectorAll("blockquote");

// let btn = document.querySelector("#button2");

// let blockquote = document.querySelectorAll("blockquote");
// console.log(blockquote);

// btn.addEventListener("click", () => {
//   blockquote.forEach((elem) => {
//     elem.innerHTML += "<span>no quote</span>";
//   });
// });

/** 7
 При нажатии на кнопку 3, поменяйте текст h1 на 'DOM is easy'.
 */
// let btn3 = document.querySelector("#button3");
// let h1 = document.querySelectorAll("h1");
// btn3.addEventListener("click", () => {
//   h1.forEach((elem) => {
//     elem.innerText = "DOM is easy";
//   });
// });

/** 8
 * При нажатии на кнопку 3, добавьте после h1, параграф
 описывающий какое действие произошло, например нажали такую кнопку 
 в таком месте (указать координаты)
 */

// let btn2 = document.querySelector("#button3");

// let first = document.querySelectorAll("#first");
// console.log(first);

// btn2.addEventListener("click", (e) => {
//   first.forEach((elem) => {
//     elem.innerText = `Такую buttom3  в таком месте(X=${e.offsetX},Y=${e.offsetY})`;
//     console.log(`X=${e.offsetX},Y=${e.offsetY}`);
//   });
// });

/** 9
 * При нажатии на кнопку 3, поменяйте цвет текста параграфов на красный
 и шрифт на georgia 
 */

//игра;
console.log(Math.random());
const random = () => {
  const rand = Math.random() * 100;
  return Math.floor(rand);
};

const btn = document.querySelector("#btn");
// console.log(btn.style)
btn.addEventListener("mouseenter", () => {
  btn.style.left = `${random()}%`;
  btn.style.top = `${random()}%`;
});

btn.addEventListener("click", () => {
  alert("Поздравляю! Вы кликнули на кнопку! Что Вы делаете со своей жизнью??!");
});
