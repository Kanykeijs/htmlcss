//! МЕТОДЫ МАССИВА

//! CALLBACK function - (функция обратного вызова) - функция, которая передается в аргументы другой функции и вызывается внутри этой функции

// function callback(x) {
//   console.log("Callback started working");
//   console.log(x);
//   console.log("Callback finished working");
// }
// function main(x) {
//   console.log("The main function started working");
//   callback(x);
//   console.log("The main function finished working");
// }
// main("hello"); // ? The main function started working Callback started working hello Callback finished working The main function finished working

// function doTasks(task, startTasks, finishTasks) {
//   startTasks(task);
//   finishTasks(task);
// }

// function startTasks(task) {
//   console.log(`Начали выполнение таск: ${task}`);
// }

// function finishTasks(task) {
//   console.log(`Закончили выполнение таска: ${task}`);
// }
// doTasks("Методы массивов", startTasks, finishTasks);
//()=>{}

const people = [
  { name: "Tanjiro", age: 13, salary: 250, status: "alive" },
  { name: "Nezuko", age: 12, salary: 300, status: "alive" },
  { name: "Zenitsu", age: 16, salary: 250, status: "alive" },
  { name: "Inosuke", age: 15, salary: 250, status: "alive" },
  { name: "Tengen", age: 23, salary: 400, status: "alive" },
  { name: "Rengoku", age: 20, salary: 500, status: "dead" },
];

// for (let i = 0; i < people.length; i++) {
//   console.log(people[i]);
// }
// //es5

// for (let person of people) {
//   console.log(person);
// }
//es6

// ! FOREACH - ! НЕ СОЗДАЕТ НОВЫЙ МАССИВ!
// ? перебирает массив и выполняет указанную фукнцию один раз для каждого элемента в массиве

// people.forEach((person, index, array) => {
//   //   console.log(person);
//   //   console.log(index);
//   //   console.log(array);
// });

// people.forEach(function (person, index, arr) {
//   console.log(person);
//   console.log(index);
//   console.log(arr);
// });
// people.forEach((person) => console.log(person));

// let arr = [
//   {
//     name: "Azat",
//     age: 28,
//     height: 176,
//   },
//   {
//     name: "Mirdin",
//     age: 22,
//     height: 183,
//   },
//   {
//     name: "Anton",
//     age: 25,
//     height: 172,
//   },
// ];
// let tall = [];
// arr.forEach((person, index, arr) => {
//   if (person.height > 175) {
//     tall.push(person);
//   }
//   if (index === arr.length - 1) {
//     console.log(`Последний в списке ${person.name}`);
//   }
// });

// console.log(tall);

// ! MAP - создает новый массив с результатом вызова указанной функции для каждого элемента массива

// const newPeople = people.map((person) => `${person.name} : ${person.age * 4}`);
// console.log(newPeople);

//! FILTER - создает новый массив со всеми элементами, прошедшими проверку

// const adults = people.filter((person) => person.age >= 15);
// console.log(adults);

const words = ["Banana", "JavaScript", "city", "car"];
// const longWords = words.filter((word) => word.length > 4);
// console.log(longWords);
// const longWords = words.filter((word) => {
//   //1-способ
//   if (word.length > 4) {
//     return true;
//   }
//   //2-способ
//   //return word.length > 4;
// });
// console.log(longWords);

//! find
//? Метод find() возвращает значение первого найденного в массиве элемента, которое удовлетворяет условию переданному в callback функции.  В противном случае возвращается undefined.

// const nezuko = people.find((person) => person.name === "Nezuko");
// console.log(nezuko);

// const numbers = [3, 6, 11, 1, 23, 1, 55, 2];
// const evenNumbers = numbers.find((num) => num % 2 == 0);
// console.log(evenNumbers);

//! FININDEX
//? Метод findIndex() возвращает индекс в массиве, если элемент удовлетворяет условию проверяющей функции. В противном случае возвращается -1.

// const nezukoInd = people.findIndex((person) => person.name === "Nezuko");
// console.log(nezukoInd);

//! INDEXOF
// ? indexof Метод indexOf() возвращает первый индекс, по которому данный элемент может быть найден в массиве или -1, если такого индекса нет.

// const arr = ["Adilet", "Mustafa", "Timur", "Burul", "Albina"];
// const showIndex = arr.indexOf("Tima");

// console.log(showIndex);

//! REDUCE
//? Метод reduce() применяет функцию reducer к каждому элементу массива (слева-направо), возвращая одно результирующее значение.
// ! принимает два аргумента (второй- необязательный)
// ! 1 аргумент - коллбэк функция, 2 аргумент - initial value (начальное значение)

// const arr = [1, 2, 3, 4, 5];

// let sum = arr.reduce((prevValue, currValue, index, array) => {
//   console.log("prev value", prevValue);
//   console.log("current value", currValue);
//   console.log("index", index);
//   console.log("array", array);
//   return prevValue + currValue;
// }, 0);
// console.log(sum);

// let amount = 0;
// for (let i = 0; i < people.length; i++) {
//   amount += people[i].salary;
// }
// console.log(amount);

// const amount = people.reduce((total, person) => {
//   return total + person.salary;
// }, 0);
// console.log(amount);

// let name = ["m", "a", "k", "e", "r", "s"];
// let newWord = name.reduce((a, b) => a + b);
// console.log(newWord);
// console.log(window.name);

// const pokemon = [
//   { name: "charmander", type: "fire" },
//   { name: "squirtle", type: "water" },
//   { name: "bulbasaur", type: "grass" },
// ];

// const getMapFromArray = (data) =>
//   data.reduce((acc, item) => {
//     acc[item.name] = { type: item.type };
//     return acc;
//   }, {});
// console.log(getMapFromArray(pokemon));

// const data2 = [
//   { a: "happy", b: "robin", c: ["blue", "green"] },
//   { a: "tired", b: "panther", c: ["green", "black", "orange", "blue"] },
//   { a: "sad", b: "goldFish", c: ["green", "red"] },
// ];

// const uniqueColors = data2.reduce((total, amound) => {
//   amound.c.forEach((color) => {
//     if (total.indexOf(color) === -1) {
//       total.push(color);
//     }
//   });
//   return total;
// }, []);
// console.log(uniqueColors);

// const data = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// const flat = data.reduce((prev, curr) => {
//   return prev.concat(curr);
// }, []);

// console.log(flat);

//! EVERY
//? Метод every() проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции.

// const alive = people.every((person) => person.status == "alive");
// console.log(alive);

// const arr1 = ["a", "a", "a"];
// const arr2 = ["a", "b", "c"];
// const res1 = arr1.every((letter) => letter === "a");
// const res2 = arr2.every((letter) => letter === "a");
// console.log(res1, res2);

//! SOME
//? Метод some() проверяет, удовлетворяет ли какой-либо элемент массива условию, заданному в передаваемой функции.
// const dead = people.some((person) => person.status === "dead");
// console.log(dead);

//! INCLUDES
//? Метод includes() определяет, содержит ли массив определённый элемент, возвращая в зависимости от этого true или false.

// const arr3 = ["a", "a", "a"];
// let res = arr3.includes("b");
// console.log(res);

// //TODO У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.
// let users = [
//   { name: "Kim", age: 41 },
//   { name: "Kortney", age: 42 },
//   { name: "Khloe", age: 37 },
//   { name: "Kendall", age: 26 },
//   { name: "Kylie", age: 24 },
// ];
// let names = users.map((person) => person.name);
// /* ... ваш код */
// console.log(names); // Kim, Kortney, Khloe, Kendall,Kylie

// //TODO Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст. Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.

// let users = [
//   { name: "Kim", age: 41 },
//   { name: "Kortnay", age: 42 },
//   { name: "Khloe", age: 37 },
//   { name: "Kendall", age: 26 },
//   { name: "Kylie", age: 24 },
// ];

// function getAverageAge(users) {
//   return users.reduce((prev, curr) => prev + curr.age / users.length, 0);
// }
// console.log(getAverageAge(users));

//TODO Дан массив с числами. Создайте новый массив, состоящий из квадратов этих чисел (map)
// let arr = [5, 6, 7, 8, 9];
// function square(arr) {
//   let newArr = arr.map((num) => num * num);
//   return newArr;
// }
// console.log(square([1, 2, 3, 4, 5]));

//TODO  Дан массив с числами. Оставьте в нем только отрицательные числа.

// let arr = [1, -3, 5, 6, -7, 8, 9, -11];

// let newArr = arr.filter((elem) => {
//   return elem < 0;
// });
// console.log(newArr);
// console.log(newArr.length);

//TODO Дан массив с числами. Проверьте то, что все элементы в массиве положительные
let arr = [5, 6, 7, 8, 9];
let newArr = arr.every((num) => num > 0);
console.log(newArr);
