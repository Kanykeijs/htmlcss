//! ASYNC

// console.log("1");
// console.log("2");

// // const timer = setTimeout(function () {
// //   console.log("Hello!");
// // }, 2000);
// console.log("3");

// const int = setInterval(() => {
//   console.log("Hello!");
// }, 2000);

// const int = setInterval(
//   (text) => {
//     console.log(text);
//   },
//   1000,
//   "Hello123"
// );
// clearInterval(int);

//1
//2
//Hello
//3

//! Асинхронный код
// console.log("Привет! до функции showMessage");

// function showMessage() {
//   console.log("Я подождал 2 секунды!");
// }
// setTimeout(showMessage, 2000); // почему он 2 ?

// console.log("После функции showMessage");

function outer() {
  function inner() {
    // console.log("Hello!");
  }
  inner(); // вызов функции
}
outer(); // вызов функции

// function main() {
//   setTimeout(function greet() {
//     console.log("Inside greet func!");
//   }, 2000);
//   console.log("Bye! After setTimeout");
// }
// setTimeout

// function setTimeout(callback, timer) {
//   //timer - задержка
//   callback();
// }

// main();

function myAnimation() {
  const elem = document.querySelector(".box");
  let pos = 0;

  const id = setInterval(frame, 10);

  function frame() {
    if (pos === 300) {
      clearInterval(id);
    } else {
      pos++;
      console.log(pos);
      elem.style.top = pos + "px";
      elem.style.left = pos + "px";
    }
  }
}
// const btn = document.querySelector(".btn");
// btn.addEventListener("click", myAnimation);

// const myFirstPromise = new Promise((resolve, reject) => {
//   //выполняеться асинхронная операция, которая в итоге вызовет
//   resolve(someValue);
//   // успешное завершение  или
//   reject("failure"); // неудача
// });

// const p = new Promise((resolve, reject) => {
//   let a = 1 + 2;
//   if (a === 2) {
//     resolve("soccess");
//   } else {
//     reject("Fail 70-80");
//   }
// });
// p.then((message) => {
//   console.log("это находиться в then" + message);
// })
//   .catch((reason) => {
//     console.log("это находиться в catch" + reason);
//     reason;
//   })
//   .finally(() => {
//     console.log("FINALLY, работает в обеих случаях");
//   });

// console.log(p);
