// let first_name ="Said";
// console.log(first_name); //Said
// first_name = "Nursultan";

//! HOISTING - это процесс всплытия переменных вверх
// console.log(a);

// var a = 2;

// let company = {
//   name: "Makers",
//   address: "Manas/Toktogula",
//   "day-schedule": "24/7",
// };

// console.log(company["day - schedule"]);
// console.log(company["address"]);

// let students = ["Nurnisa", "Kristina", "Mustafa", "Urmat", "Abdulhamid"];
// console.log(students.length);
// console.log(students[4]);
// console.log(students[students.length - 1]);

// let obj = {}; //object
// let arr = []; //array
// console.log(typeof obj);
// console.log(Array.isArray(arr));

//! MATH OPERATORS
// console.log(1 + 1);
// console.log(5 - 2);
// console.log(10 / 2);
console.log(10 * 10);
// console.log("100" - "10"); //все ок
// console.log("50a" - "2"); //NaN - Not A Number
// console.log("5" + "5"); //это string склеивает
// console.log(typeof NaN);
// console.log(2 ** 3); // 2 * 2 * 2
// console.log(10 % 2 == 0); //остаток
// let result = 2 + "2a"; //у меня  22a
// console.log(Number.isNaN(result)); //у меня false
// console.log("1" + "1"); //11
// console.log("Hello world" + 1);
//! Infinity
// let result = 50 / 0;
//спрашивваем является ли это числом конечным
// console.log(isFinite(result));

//! true-false
// console.log(Boolean(0)); // 0 в булевом значении false
// console.log(Boolean(1)); //1 уже true
// console.log(Boolean(" ")); // пустая строка - false, если хотя бы пробел то true
// console.log(Boolean(null), Boolean(undefined));

//! строгое и нестрогое равенство
//?спрашиваем равны ли переданные значения и похожи ли по типу данных (ответ нет)
// console.log("3" == 3); //не сторогое
//? спрашиваем равны ли переданные значения и похожи ли по типу данных (ответ нет)
//? ====  ! - НЕ  =======
// console.log("3" === 3); // строгое
//? ==== ! -НЕ =====
//спрашиваем не ровны ли данные значения
// console.log(3 != "3"); // не строгое равенство присвоение
// console.log(3 !== "3"); //строгое равенство
//? больше меньше
// console.log(10 > 20); //false
// console.log(10 < 20); // true
// console.log(19 <= 19); //меньше или равно
// console.log(19 >= 19); //больше или равно
// ! из строки в число
//? +, если в строке есть буквы, то выдаст NaN
// let elem = "127098939";
// console.log(+elem);

//? parseint(), выведет число до первой буквы или точки, остальные не увидит
// let elem2 = "1.234gfhjfg6789";
// console.log(parseInt(elem2));
//? parseFloat(), выведет число даже если нецелое (учитывает точки)
// console.log(parseFloat(elem2));
//? Number работает как +
// let elem3 = "1234567";
// console.log(Number(elem3));
//!число в стороку
// let a = 2;
// console.log(a.toString());
// console.log(String(a));
// console.log(a + "");

//! alert, prompt, confirm
//интерполяция - встроенное вражение
let user = "hello@gmail.com";
// alert("Hello, ${user}");
// let value = prompt("Введите имя");
// alert("добро пожаловать, ${value}");

// let value = confirm("Вам есть 18?");
// console.log(value);
console.log(typeof null);
