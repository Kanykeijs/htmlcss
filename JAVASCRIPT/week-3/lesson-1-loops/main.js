//! LOOPS

//! Increment
// i ++ //? постфиксная форма инкремента, выведет число и тольео потом увеличить на 1
// ++ i //? префиксная форма инкремента, сначала увеличить на 1 и потом выведет в консоль
// i = i + 1

// let i = 0;

// console.log(i); // 0
// i++;
// console.log(i); // 1

//! Decrement
// i -- //? постфиксная форма декремента
// --i //? префиксная форма декркмента
// i = i - 1

// let i = 10;
// console.log(i--); // 10, но i уже равна 9
// console.log(i--); // 9, i = 8
// console.log(i); // 8

// console.log(--i); //9
// --i;
// console.log(i); //8
// console.log(i++); // 8, но i = 9
// console.log(++i); // 10

//! FOR loop - работает с массивами и со строками
//for (начало; условие; шаг) {
//    тело цикла
//}

// let arr = ["Azret", "Sultan", "Aizirek", "Erkayim", "Aidana"];
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);

// for (let index = 0; index < arr.length; index++) {
//   console.log(`${arr[index]}, вы Maker!`);
// }

//! CONTINUE -  пропускает итерацию, если условие true, BREAK - остановливает цикл, если условие true
// let tableware = ["plate-1", "plate-2", "cup", "plate-3"];
// length - 4;

// for (let i = 0; i < tableware.length; i++) {
//   if (tableware[i] == "cup") {
//     continue;
//   } else {
//     console.log(`${tableware[i]} взяли с собой`);
//   }
// }

// for (let i = 0; i < word.length; i++) {
//   console.log(word[i]);
// }

// let word = "Hello";
// for (let i = word.length - 1; i >= 0; i--) {
//   console.log(word[i]);
// }

// let arr1 = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr1.length; i++) {
//   arr1[i] *= 2; // arr1[i] = arr1[i] *2
// }
// console.log(arr1);

// for (let i = 100; i <= 200; i++) {
//     console.log(i)
// }

// for (let i = 50; i >= 0; i = i - 2) {
//   console.log(i);
// }

//! FOR IN - перебирает по ключам, работает с массивами и с обьектами
// let person = {
//   name: "Mary",
//   age: 19,
// };

// for (let key in person) {
//   console.log(`${key}: ${perspn[key]}`);
// }
// let games = ["CS:GO", "Dota-2", "Nrs", "WoT", "CoD", "PUBG", "FIFA"];

// for (let key in games) {
//   console.log(key, games[key]);
// }

//! FOR OF -  не работает с обьектом (object is not iterable), работает со строками и с массивами
// let person = {
//   name: "Mary",
//   age: 19,
// };
// for (let elem of person) {
//   console.log(elem);
// }

// let arr = [{ name: "Kalybek" }, { name: "Albina" }, { name: "Timur" }];
// for (let elem of arr) {
//   console.log(elem);
// }

//! WHILE, DO...WHILE
// while(условие){
//     тело цикла
//     шаг внутри тела цикла(завевршающая операция)
// }
// do {
//     тело цикла
//     завершающая операция {шаг}
// } while (условие)

// let i = 1;
// while(i < 10){
//     console.log(i);
//     i++;
// }

// let i = 1;
// while (i < 1) {
//   console.log(i);
//   i++;
// }
// do {
//   console.log(i);
//   i++;
// } while (i < 1);

// let elems = [1, 2, 3, 4, 5];
// for (let key in elems) {
//   console.log(elems[key]);
// }
// for (let i; i < elems.length; i++) {
//   console.log(elems[i]);
// }

// let password = null;
// while (password != "qwe") {
//   password = prompt("введите пароль");
// }

// let password = null;
// let count = 1;
// while (password != "JS") {
//   password = prompt(`попытка номер ${count}, введите пароль `);
//   if (password == "JS") {
//     alert("Пароль верный");
//     break;
//   }
//   if (count === 3) {
//     alert("Это была последняя попытка");
//     break;
//   }
//   count++;
// }

// let answer = +prompt("сколько будет 4+4");
// while (answer !== 8) {
//   alert("try again");
//   answer = +prompt("сколько будет 4+4");
//   if (answer === 8) {
//     alert("правильно!");
//   }
// }

// let money = 0;
// while (money < 30) {
//   let earnedMoney = confirm("купите за 10$?");
//   if (earnedMoney) {
//     money += 10;
//   }
//   alert(`накоплено: ${money}`);
//   if (money >= 30) {
//     alert("накопили нужную сумму");
//   }
// }

// задача 1
/*
Даны числа от 35 до 87. Найти и напечатать те из них, которые при делении на 7 дают остаток 1, 2 или 5.
*/
// for (let i = 35; i <= 87; i++) {
//   if (i % 7 == i || i % 7 == 2 || i % 7 === 5) {
//     console.log(i);
//   }
// }

// задача 2
// Есть массив с числами let arr = [1, 2, -3, 0, 1, -6, 9, 0, 0]. Составьте программу, которая определяет кол-во отрицательных, кол-во положительных и кол-во нулей в массиве.

// let arr = [1, 2, -3, 0, 1, -6, 9, 0, 0];
// let negative = 0;
// let positive = 0;
// let zero = 0;
// for (let i = 0; i < arr.length; i++) {
//   if  (arr[i] > 0) {
//     console.log(`${arr[i]} положительное`);
//   } else if (arr[i] < 0) {
//     console.log(`${arr[i]} отрицательное`);‹
//   } else {
//     console.log(`${arr[i]} ноль`);
//   }
// }

//Экстра 05
// Создайте массив из чисел arr.

// С помощью цикла for ... of и оператора if посчитайте сумму чётных элементов массива и выведите результат в консоль.

// Например, если к переменной arr присвоено данное значение: [2, 5, 9, 15, 0, 4]

// Вывод должен быть:

// 6
// т.к. 6 = 2 + 0 + 4

// let arr = [2, 5, 9, 15, 0, 4];
// let sum = 0;
// for (let num of arr) {
//   if (num % 2 == 0) {
//     sum += num; // sum = sum + num
//   }
//   console.log(sum); // 2 2 2 2 2 6
// }

// Задание 14
// Создайте переменную num.

// Напишите цикл, который поочерёдно выведет в консоль все простые числа в промежутке от 2 до num.

// Допустим в num хранится число 10

// Вывод должен быть:

// 2
// 3
// 5
// 7
// Натуральное положительное число, которое больше 1, называется простым, если оно ни на что не делится, кроме себя и 1. Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток. Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.

// let num = 10;

// for (let i = 2; i <= num; i++) {
//   let exit = false;
//   for (let j = 2; j < i; j++) {
//     if (i % j == 0) {
//       exit = true;
//       break;
//     }
//   }
//   if (!exit) {
//     console.log(i);
//   }
//   exit = false;
// }

// Задание 10
// Создайте переменную word со строкой.

// Напишите цикл, который переберет строку word выводит в консоль составную часть строки хранящейся в word.

// К примеру если в word хранится: dog

// То вывод будет:
// "d"
// "do"
// "dog"
// "o"
// "og"
// "g"
// Если значение перемнной word будет makers, то вывод будет:

// "m"
// "ma"
// "mak"
// "make"
// "maker"
// "makers"
// "a"
// "ak"
// "ake"
// "aker"
// "akers"
// "k"
// "ke"
// "ker"
// "kers"
// "e"
// "er"
// "ers"
// "r"
// "rs"
// "s"

// let word = "makers";
// for (let i in word) {
//   // i = 0;
//   let str = "";
//   for (let j = i; j < word.length; j++) {
//     // j = 0;
//     str += word[j];
//     console.log(str);
//   }
// }

// let word = "dog";
// for(let i in word){
//     let
// }

// Дан массив с элементами 1, 2, 5, 9, 4, 13, 10. С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением, равным 4. Если есть - выведите на экран 'Есть!' и прервать цикл
//написать на for

// let arr = [1, 2, 5, 9, 4, 13, 10];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == 4) {
//     console.log("Есть!");
//     break;
//   } else {
//     console.log("Нету");
//   }
// }

// задача 17
//вызывайте alert со значением i, пока i не будет равна трем
// выполнить на do ... while

// let i = 0;
// do {
//   alert(i);
//   i++;
// } while (i <= 3);

// Задание 22
// Создайте объект data где ключи это категории товаров, а значения это массивы с названиями товаров, задача реализовать имитацию поиска запросите у пользователя какой товар он хочет найти, затем найдите этот товар по названию во всех категориях, если товар есть выводим сообщение типа:
// 'Товар найден в категории: (название категории)'
// Если товар не найден:

// 'Товар не найден'
// Важно: не пишите в prompt ничего, кроме букв и чисел

// const data = {
//   electronics: ['Samsung', 'Apple', 'Xiaomi'],
//   fruits: ['Apple', 'Pineapple', 'Orange'],
//   cars: ['Audi', 'Mercedes', 'BMW']
// };
// Например:

// 'Xiaomi'
// Вывод:

// 'Товар найден в категории: electronics'

// const data = {
//   electronics: ["Samsung", "Apple", "Xiaomi"],
//   fruits: ["Apple", "Pineapple", "Orange"],
//   cars: ["Audi", "Mercedes", "BMW"],
// };
// let start = prompt();
// let ans;
// for (let i in data) {
//   if (data[i].includues(start)) {
//     ans = `Товар найден в категории: ${i}`;
//     //break;
//   } else {
//     ans = "Товар не найден";
//   }
// }
// console.log(ans);

let data = {
  electronics: ["Samsung", "Apple", "Xiaomi"],
  fruits: ["Apple", "Pineapple", "Orange"],
  cars: ["Audi", "Mercedes", "BMW"],
};
let arr = prompt("Найдите товар");
for (let i in data) {
  if (data[i].includes(arr)) {
    console.log(`Товар найден в категории:${i} `);
    break;
  } else if (!data[i].includes(arr)) {
    continue;
  }
}
