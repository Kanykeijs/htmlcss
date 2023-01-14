//! ПРОСТЫЕ МЕТОДЫ МАССИВОВ
//! PUSH - метод, который добавляет элементы в конец массива и возвращает новую длину массива
// let arr = ["elem-1", "elem-2"];
// let res = arr.push("elem-3", "elem-4");
// console.log(arr, res);

//! UNSHIFT - метод, который добавляет элементы в начало массива и возвращает новую длину массива
// let arr = ["elem-1", "elem-2"];
// let res = arr.unshift(0);
// console.log(arr);

//! POP - метод, удаляет с конца массива и возвращает удаленный элемент
// let arr = ["elem-1", "elem-2"];
// console.log(arr);
// l
// console.log(arr, deletedElem);

//! SHIFT -удвляет с начала массива и возвращает удаленный элемент
// let arr = ["elem-1", "elem-2"];
// let deletedElem = arr.shift();
// console.log(arr, deletedElem);

// ! SPLICE - удаляет элементы начиная с указанного индекса(первый аргумент), вторым аргументом передаем количество удаляемых элементов, третьим (необязательные)  и далее принимает элементы на которые  нужно заменить  удаленные элементы
// let arr = ["elem-1", "elem-2", "elem-3", "elem-4"];
// console.log(arr);
// let deletedElems = arr.splice(1, 2, "hello");
// console.log(arr, deletedElems);

//! SLICE - копирует массив с указанного индекса до указанного индекса (не включительно),  и создает новый массив, исходный массив не меняется
// let arr = ["elem-1", "elem-2", "elem-3", "elem-4"];
// let newArr = arr.slice(1, 3);
// console.log(newArr, arr);

//! SLICE, но со строками
// let str = "Helio";
// console.log(str.slice(2, 3));
// console.log(str.substring(2, 3));

//! JOIN -  может сделать из массива строку и принимает в аргументы "соединитель", если передадим пустую строку - значит разделителя нет, исходный массив не меняет
// let arr = ["elem-1", "elem-2", "elem-3", "elem-4"];
// let newJoin = arr.join(" ");
// console.log(newJoin);
// [
//   [{ name: "js27" }, { name: "js29" }],
//   [{ name: "Mustafa" }, { name: "Kristina" }],
//   [{ name: "Sultan" }, { name: "Aizirek" }],
// ];

//! SPLIT = может сделать из строки массив и принимает в аргументы "разделитель", если передадим пустую строку ("") то разделить по одному символу. Исходную строку он не меняет
// let str = "Hello+World";
// let newStr = str.split("/");
// console.log();

//!REVERSE - переворачивает массив - исходный массив не меняется
// let nums = [215, 1241, 2, 32, 123, 321];
// nums.reverse();
// console.log(nums);

//! SORT - при сортировке меняет исходный массив, но если не передать аргументы, то сортирует в лексикографическом порядке
// let nums = [1, 51, 22, 2, 8, 83];
// nums.sort();
//? сортировка по возрастанию
// nums.sort((a, b) => a - b);
//? сортировка по убыванию
// console.log(nums);

//! CALLLBACK функция - функция, которя передается в аргументы другой функции
//? сортировка по длине элемента
// let arr = ["Timur", "Nurdan", "Abdulhamid", "Aidar"];
// arr.sort((a, b) => a.length - b.length);
// console.log(arr);

//! CONCAT - может обьединить несколько массивов в один, создает и возвращает новый
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = [7, 8, 9];
// let concatedArr = arr1.concat(arr2, arr3);

//! INCLUDES - проверяет есть ли в массиве указанный элемент
// let arr = ["Vahid", "Kanai", "Urmat-tiger"];
// let findUrmat = arr.includes("Urmat-tiger");
// console.log(findUrmat);

//! SPREAD оператор - копирует и копирирует массив или обьект
// let arr1 = [1, 2, 3];
// let arr2 = [...arr1];
// console.log(arr2);

// let obj = {
//   name: "Erkayim",
//   skill: "JS",
//   position: "mentor",
// };
// let objCopy = { ...arr1 };
// console.log(objCopy);

// let num1 = 5;
// let num2 = 5;
// console.log(num1 == num2);

// let a = {}; // отдельная ячейка памяти
// let b = {}; // отдельная ячейка памяти
// console.log(a == b); // false (коптруе ссылку на обьект)

// let obj = { name: "Azret" }; // создается ячейка памяти
// let obj2 = obj; // копирует ссылка на обьект

// obj.name = "Sultan";
// console.log(obj, obj2);

// let num1 = 5;
// let num2 = num1;
// num2 = 18;
// console.log(num1, num2);

// дан массив
// при помощи метода splice удалите студента по имени Drake и добавьте студента Bekjan
// let students = ["Azim", "Chinara", "Eldiyar", "Benazir", "Drake"];
// students.splice(4, 4, "Bekjan");
// console.log(students);

// выведите в alert максимальное и минимальное число из массива
// let nums = [142, 15, 51, 617, 248, 38];
// nums.sort((a, b) => a - b); // минимальное - 15
// console.log(nums[0]);
// nums.sort((a, b) => b - a); // максимальное - 617
// console.log(nums[0]);
// console.log(Math.max(...nums)); //максимальное
// console.log(Math.min(...nums)); // минимальное

// TODO 3
// исправьте предложение так чтобы в консоль выводилось "HELLO WORLD" (именно большими буквами)
// let str = "world hello";
let str = "world hello";
let strCopy = str.toLocaleLowerCase();
if (str === strCopy) {
  str = str.toLocaleUpperCase();
  console.log(str);
} else {
  str = str.toLocaleLowerCase();
  console.log(str);
}
str1 = str.unshift("Hello");
console.log(str);
if (str === str1) {
  console.log();
}
