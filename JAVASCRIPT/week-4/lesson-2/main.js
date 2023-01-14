//! ARROW FUNCTIONS

// let sayHi = (один_аргумент, второй_аргумент) => {
//    return блок кода
// }

// let sayHi = (один_аргумент, второй_аргумент) => блок кода

// let sayHi = один_аргумент => блок кода

// ! Отличия:
// 1. отсутствие хойстинга (есть только у function declaration)
// 2. синтаксис
// 3. У стрелочной функции нету специального объекта arguments
// 4. this, в отличие от declaration/expression, возвращает в стрелочной функции глобальный объект Window, или же this родительской функции

// let arrow1 = (a) => {
//     console.log(a);
// };

// arrow1("ARROW FUNCTION");

// let showMessage = (a) => a * 2; // return под капотом
// let mes1 = showMessage(5);
// console.log(mes1);

// let showMessage2 = (a, b) => {
//   return a * b;
// };

// showMessage2(5, 3);

// console.log(showMessage2(5, 3));

//! У СТРЕЛОЧНЫХ ФУНКЦИИ НЕТУ ARGUMENTS
// function showArg() {
//   let arrArg = [...arguments];
//   console.log(arrArg);
// }
// showArg(1, 2, 3, 4, 5);

// let showArg = function (){
//     console.log(arguments);
// };

// let showArg = () => {
//   console.log(arguments);
// };
// showArg(1, 2, 3, 4, 5);

//! THIS - обращение к родительскому обьекту
// ! Стрелочные функции особенные: у них нет своего собственного this.Если мы используем this внутри стрелочной фукнции, то его значение берется из внешней функции (function expression/function declaration)
// ! у function declaration и function expression this - это родительский объект, если этого объекта нет, значит this - глобальный объект window
// ! у arrow function this - это this родительской функции, если этой функции нет, значит this - это глобальный объект window
// let person = {
//   name: "Diana",
//   age: 20,
//   check: function () {
//     console.log(this.name); // родительский обьект
//   },
//   sayHello: () => console.log(this),
// };
// person.check();
// person.sayHello();

// function showThis() {
//   console.log(this);
// }
// showThis();

// let student = {
//   name: "Said",
//   age: 22,
//   showThis() {
//     console.log(this, "declaration this");
//     let arrowFunc = () => console.log(this, "arrow is declaration this");
//     arrowFunc();
//   },
//   getWindow: () => console.log(this, "arrow this"),
// };
// student.showThis();
// student.getWindow();

// let obj = {
//   company: "MAKERS",
//   getCompany: function () {
//     console.log(this.company);
//   },
// };
// let obj2 = { ...obj };
// // console.log(obj2, obj);
// obj.getCompany();
// obj2.getCompany();

// let person = {
//   name: "Abbas",
//   age: 20,
//   check: function () {
//     console.log(this.name);
//   },
// };
// let person2 = { ...person };
// person2.name = "Alex";
// person.check();
// person2.check();
// console.log(person, person2);

//! apply, call, bind -  методы, которые меняют this

// let dog = {
//   name: "Rex",
//   bark(num1, num2) {
//     console.log(num1);
//     console.log(num2);
//     console.log(this.name);
//   },
// };

// dog.bark(13, 15);

// let dog2 = {
//   name: "Sharik",
// };
// dog.bark.call(dog2, 12, 12);
// dog.bark.apply(dog2, [15, 15]);

//! ЧИСТАЯ ФУНКЦИЯ - функция, которая что-то принимает в аргументах и что-то возвращает

// let getSum = (a, b) => {
//   return a + b;
// };

// function greet() {
//   console.log(`Hello, ${this.name}`);
// }
// greet();

// const user1 = { name: "Alex" };

// const greetAlex = greet.bind(user1);

// greetAlex();

//TODO 1. Дан объект passenger. Напишите метод для этого объекта,который возвращает информацию о пассажире. Также, напишите второй метод, который меняет значение свойства baggage на то значение, которое получает в качестве параметра.

// let passenger = {
//   firstName: "Sam",
//   lastName: "Winchester",
//   passportNum: "US12345678",
//   baggage: 20,
//   getInfo() {
//     console.log(
//       `Passenger ${this.firstName} ${this.lastName}.Passport number is ${this.passportNum}. Maximum luggage weight is ${this.baggage}kg`
//     );
//   },
//   setBaggage(kg) {
//     Object.seal(passenger);
//     passenger.baggage = kg;
//   },
// };
// passenger.getInfo();
// passenger.setBaggage(30);
// passenger.getInfo();

//TODO 2. Дан объект user. Напишите метод byTicket для этого объекта. При вызове метода количество билетов должно увеличиваться на единицу, при условии, что у пользователя будет достаточно средств на балансе. Также, с баланса должна сниматься стоимость билета (400).Если на счету недостаточно средств вывести соответствующее сообщение.
let user = {
  name: "Sam",
  age: 17,
  balans: 700,
  tickets: 0,
  byTicket() {
    if (this.balans >= 400) {
      this.tickets += 1;
      this.balans -= 400;
    } else if (this.balans < 400) {
      alert("У вас недостаточно средств");
    }
  },
};
user.byTicket();
console.log(user);
user.byTicket();
