// let a = 0;
// let a = 2; это ошибка error

// var a = 2;
// var a = 3; это не ошибка

// const a =  2;
// const a = 3; это тоже ошибка error

// console.log(a);
// let a = "JS27";

//! УСЛОВНЫЕ ОПЕРАТОРЫ
const number = 10;
const number2 = 20;

//? операторы сравнения всегда возвращают булевое значение (true / false)

// console.log(number > number2);
// console.log(number >= number2);

// console.log("54" <= 100); //true

//Boolean
// console.log(Boolean("string")); //true
// console.log(Boolean("")); //false
// console.log(Boolean(" ")); //true
// console.log(Boolean({})); // true
// console.log(Boolean([])); // true

// console.log(Boolean(40)); // true
// console.log(Boolean(0)); // false

// console.log(Boolean(-50)); //true

// console.log(Boolean(true)); //true
// console.log(Boolean(false)); //false
// console.log(Boolean(null)); //false
// console.log(Boolean(undefined)); //false

// ===== значения, которые возвращают false ===
// false
// 0
// -0
// null
// undefined
// ""
// NaN
// 0n (biginit)

//!  IF... ELSE...
// let num = 50;
// let num2 = 100;

// if (num < num2) {
//   alert(num + "меньше чем " + num2);
// } else {
//   alert("${num} больше чем ${num2}");
// }

// let num1 = 166;
// let num2 = 160;

// if (false) {
//   alert("${num1}  меньше чем ${num2}");
// } else if (num1 == num2) {
//   alert("${num1} равен $(num2}");
// } else {
//   alert("{num1} больше чем ${num2}");
// }

// const user = {
//   isAdmin: false,
// };
// user.isAdmin == false
// console.log(user.isAdmin);
// if (!user.isAdmin) {
//   console.log("вы не админ");
// } else {
//   console.log("Вы Aдмин!");
// }

// const week1 = 23;
// const week2 = 19;
// const week3 = 14;
// const week4 = 27;

// const userTemp = +prompt("Enter the temperature");
// console.log(userTemp);

// if(week1 === userTemp){
//     console.log("week1 ");
// }else if(week2 === userTemp){
//     console.log("week 2");
// }else if(weel3 === userTemp){
//     console.log("week 3");
// }else if(week4 === userTemp){
//     console.log("week 4");
// }else if{
//     console.log("user temp is not a number");
// }

//! SWITCH ... CASE

// const dayOfWeek = +prompt("enter day of week");

// switch (dayOfWeek) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   default:
//     console.log("No such day of week");
// }

// const tag = prompt("Как написать тег div");
// console.log(tag);

// switch (tag) {
//   case "<h1></h1>":
//     console.log("это тег h1");
//     break;
//   case "<a></a>":
//     console.log("это тег ссылка");
//     break;
//   case "<div>":
//     console.log("почти верно, попробуй еще раз!");
//     break;
//   case "<div></div>":
//     console.log("Nice one! Все верно!");
//     break;
//   default:
//     console.log("НЕ ВЕРНO, ПОПРОБУЙТЕ ЕЩЕ РАЗ!");
// }

//! ТРЕНАРНЫЙ ОПЕРАТОР
let age = +prompt("Введите свой возраст");
console.log(age);

//условие ? (код, при успешной проверке) : (код при false)
age >= 18 ? console.log("Welcome") : console.log("Not 18");
if (age >= 18) {
  console.log("Welcome");
} else {
  console.log("Not 18");
}
