//! FUNCTIONS

//? FUNCTION DECLORATION -  ИМЕНОВАННАЯ ФУНКЦИЯ

//Function имя функции (список параметров){
//    блок кода
//}

// function greet() {
//   console.log("Привет, вы только что вызвали функцию");
// }
// greet(); // вызов функции
// greet(); // вызов функции
// greet(); // вызов функции

// function count_until() {
//   for (let i = 1; i <= 10; i++) {
//     console.log(`Счетчик ${i}`);
//   }
// }
// count_until();
// count_until();

// function countUntilFix(number) {
//   for (let i = 1; i <= number; i++) {
//     console.log(`Счетчик ${i}`);
//   }
// }
// countUntilFix(19); // передача аргумента именно для функции
// countUntilFix(55);

// [1, 2, 3].slice(0, 1, 1, 1, 1, 1, 1, 1);

// function congratulate(firstName, lastName) {
//   console.log(
//     `Поздравляю, ${firstName} ${lastName}, с успешным прохождением теста!`
//   );
// }
// congratulate("John", "Snow");
// congratulate("Lerban", "James");
// congratulate("Franklin", "Roosevelt");

// function calcTriangleSquare(base, height) {
//   return (1 / 2) * base * height;
// }
// let firstTriangleSquare = calcTriangleSquare(20, 6);
// console.log(firstTriangleSquare);
// const secondTriangleSquare = calcTriangleSquare(10, 5);
// console.log(secondTriangleSquare);

// function givePremium(salary, percent) {
//   return (salary * percent) / 100;
// }
// const person = {
//   name: "Alex",
//   salary: 30000,
// };

// person.premium = givePremium(person.salary, 5);
// console.log(person);

//! ЛОКАЛЬНЫЕ ПЕРЕМЕННЫЕ
// Переменные, обьявленные внутри функции. Они видны внутри этой функции.

// например:

// function showMessage() {
//   let message = "Привет  я JavaScript!"; // локальная переменная
//   alert(message);
// }
// showMessage();
// alert(message);

//! ВНЕШНИЕ ПЕРЕМЕННЫЕ
// У функции есть доступ к внешним переменным
// например:;
// let name = "Вася";
// function showMessage() {
//   let message = "Привет, " + name;
//   alert(message);
// }
// showMessage();

//! Функция обладает полным доступом к внешним переменным и может изменять их значение.
// например:

// let userName = "Вася";

// function showMessage() {
//   userName = "Петя";

//   let message = "Привет, " + userName;
//   alert(message);
// }
// alert(userName); // Вася перед вызовом функции

// showMessage();

// alert(userName);

//! Если одноименная переменная обьявляется внутри функции, тогда она перекрывает внешнюю

// let userName = "Zulfukar";

// function showMessage() {
//   let userName = "Akim";

//   let message = "Привет, " + userName;
//   alert(message);
// }

// showMessage();

// alert(userName); // Zulfukar  не изменился, функция не трогала внешнюю переменную

//! ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ
// Переменная, созданная вне функции, называется глобальной

// let jsTeam = ["Urmat", "Muustafa", "Aidar", "Adilet"];
// let pythonTeam = ["Nastya", "Aizirek", " Vlad", "Sanzhar"];

// // jsTeam.splice(2, 0);
// // console.log(jsTeam);

// function deleteTeamMember(arr, startIndex, delCount) {
//   arr.splice(startIndex, delCount);
// }
// deleteTeamMember(pythonTeam, 0, 1);
// console.log(pythonTeam);

// function sum() {
//   let a = +prompt("Введите первое число");
//   let b = +prompt("Введите второе число");

//   let sum = a + b;

//   alert(sum);
// }

// alert("Вы готовы дети?");
// sum();

// function random() {
//   console.log("3");
//   console.log("random");
//   console.log("4");
// }

// function show(func) {
//   console.log(1);
//   func();
//   console.log(2);
// }
// show(random);

// ! FUNCTION EXPRESSION(Анонимная)
// let имя переменной = function (){
// блок кода
// }

// let sayHello = function(){
//     console.log("Hello,JS27!");
//     console.log(...arguments);
// }
// sayHello("sdwefwef",1,2,3,4,5)

// ? ARGUMENTS-специальный объект в JS,который хранит в себе аргументы,переданные в вызов функции

// ! Hoisting

// console.log(name); // ошибка
// console.log(obj); // ошибка

// const name = "James"
// let obj = {
//     age:22,
//     country:"KG"
// }
// var city = "Bishkek"

// sayHi();

// function sayHi(text){
//     alert(text);
// };
// console.log(sayHi); //ошибка

// let sayHi = function () {
//   alert("HELLO");
// };

//! HOISTING работает только с function declaration
// let obj = {
//   name: "Erkayim",
//   sayHello() {
//     console.log("Привет, мир!");
//   },
//   sayHi: function (){
//       console.log(arguments);
//   },
// };
// obj.sayHello();
// obj.sayHi();

// function incr() {
//   let num = 0;
//   num++;
//   return num;
// }
// let newNum = incr();

// console.log(typeof incr);

// setTimeout(() => {
//   console.log("вывел спустя 5 сек");
// }, 5000);

// setInterval(() => {
//   console.log("вывод каждые две секунды");
// }, 2000);
