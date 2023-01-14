//видимости. Таск 12
// Задание 12
// Напишите функцию checkTask(), которая принимает интервал в виде двух четырехзначных чисел, например 2000 и 3001.

// Функция должна возвратить список всех чисел, в заданном интервале, состоящих из четных цифр.

// Например для аргументов 2000 и 3001,

// checkTask(2000, 3001)
// функция возвратит список:

// [2000, 2002, 2004, 2006, 2008, 2020, 2022, 2024, 2026 ...  2888]

// function checkTask(num1, num2) {
//   let res = [];
//   for (let i = num1; i <= num2; i++) {
//     let str = i.toSring();
//     let isEven = true;
//     for (let val of str) {
//       if (val % 2 !== 0) {
//         isEven = false;
//       }
//     }
//     if (isEven) {
//       res.push(i);
//     }
//   }
//   return res;
// }
// checkTask(2000, 2100);

//Задание 13
// Напишите функцию checkTask(), которая будет генерировать пароли.

// Пароль должен быть из 8 случайных символов,
// В пароле должны быть как строчные и так и заглавные буквы.
// Пароль также должен содержать цифры.
// Функция возвращает результат
// Например:

// jXfPEU8t
// Дополнительное условие: написать функцию как можно короче.
// Подсказка: погуглить и использовать модуль Math.random()

// function checkTask(){
//     let str = "sdftgyhujLKJHBVCX1234567890";
//     let password = "";
//     console.log(str.length);
//     for (let i = 0; i < 8; i++) {
//       let r = Math.floor(Math.random() * str.length);
//       console.log(r);
//       password += str[r];
//     }
//     return password;
// }

// function checkTask() {
//   let lower = "abcdefghijklmnopqrstuvwxyz";
//   let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   let numbers = "0123456789";
//   let password = "";
//   for (let i = 0; i < 3; i++) {
//     let randomLower = Math.floor(Math.random() * lower.length);
//     let randomUpper = Math.floor(Math.random() * upper.length);
//     password += lower[randomLower];
//     console.log(password, "lower");
//     password += upper[randomUpper];
//     console.log(password, "upper");
//   }
//   for (let i = 0; i < 2; i++) {
//     let randomNumber = Math.floor(Math.random() * numbers.length);
//     console.log(password, "num");
//     password += numbers[randomNumber];
//   }
//   console.log(password);
// }
// checkTask();

// Задание № 14
// Напишите функцию, которая принимает два аргумента и возвращает все числа, которые делятся на данный делитель. Первый аргумент - это массив чисел, а второй - делитель.
// Пример: divisible([1, 2, 3, 4, 5, 6], 2)
// Вывод: [2, 4, 6]

// function divisible(arr, num) {
//   let sum = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % num == 0) {
//       sum.push(arr[i]);
//     }
//   }
//   return sum;
// }
// console.log(divisible([1, 2, 3, 4, 5, 6], 2));

// Задание № 15
// Напишите функцию, которая принимает в качестве параметров два целых числа и возвращает значение true (истина), если в числах одинаковое количество цифр; иначе функция возвращает значение false (ложь).
// Пример: func(2398, 19)
// Вывод: false

// function arr(num1, num2) {
//   let arb1 = num1.toString();
//   let arb2 = num2.toString();
//   if (arb1.length == arb2.length) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(arr(23, 10));
