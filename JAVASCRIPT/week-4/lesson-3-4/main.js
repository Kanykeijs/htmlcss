//! МЕТОДЫ ОБЬЕКТОВ
// let obj = {}; // литерал обьекта
// let obj1 = new Object(); // конструктор обьекта
// console.log(obj, obj1);

// Метод бывают собственные, либо встроенные
// let car = {
//   name: "AUDI",
//   birthDate: 2003,
//   start: function () {
//       // собственные методы обьектов
//     console.log(`Машина ${this.name} готова к езде`);
//   },
// };

// car.start();

//? Выстроенные методы обьектов

let person = {
  name: "Diana",
  age: 22,
};

//! Object.keys() - создает массив из ключей обьекта

// let keys = Object.keys(person);
// console.log(keys);

//! Object.values() - создает массив из значений обьекта
// let values = Object.values(person);
// console.log(values);

//! Object.entries() - создает вложенный массив пар "ключ-значение" обьекта
// let entries = Object.entries(person);
// console.log(entries);

//! Object.assign() - копирует из одного обьекта в другой
// let copiedObj = { ...person };
// let personCopy = Object.assign(person);
// console.log(personCopy, person);

//! Object.freeze() - предотвращает модификацию свойств и значений обьекта, а так же добавление и удаление свойст обьекта
// const obj = {
//   name: "Erkayim",
// };
// obj = ""; // Uncaught TypeError: Assignment to constant variable.
// obj.name = "Aizirek";
// obj.skill = "JS";
// delete obj.skill;
//   console.log(obj);

// let freezed = Object.freeze(person);
// freezed.skill = "JS";
// freezed.name = "Erkayim";
// delete freezed.age;
// console.log(freezed);

//! Object.seal() - предотвращает добавление или удаление свойств обьекта, но позволяет изменять уже существующие

// let sealed = Object.seal(person);
// sealed.age = 23;
// sealed.skill = "JS";
// delete sealed.name;
// console.log(sealed);

//! preventExtensions - предотвращает добавление, но позволяет удалить или изменять уже существующие свойства
// let prevented = Object.preventExtensions(person);
// (prevented.name = "Alex"), console.log(prevented);
// prevented.skill = "JS";
// delete prevented.name;
// console.log(prevented);

//! hasOwnProperty() -  проверяет на наличие ключа
console.log(person.hasOwnProperty("age"));
