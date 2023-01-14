//! ГЛУБОКОЕ И ПОВЕРХНОСТНОЕ КОПИРОВАНИЕ

// let obj = {}; // obj - это ссылка на обьект
// let a = 1; // примитив

// let message = "Привет!";
// let phrase = message;
// phrase = "Пока!";
// console.log(phrase, message);

// let obj = {
//   name: "Erkayim",
// };
// let obj1 = {
//   name: "Erkayim",
// };

// console.log(obj == obj1); // false потому что ссылки не равны

//? ПОВЕРХНОСТНОЕ КОПИРОВАНИЕ (spread operator)

// let car = {
//   year: 2003,
//   color: "white",
//   name: "toyota",
// };

// let carCopy = { ...car };
// carCopy.color = "red";
// console.log(carCopy, car);

// let carCopy = car;
// // console.log(carCopy == car);
// carCopy.year = 2015;
// console.log(car);
// console.log(carCopy);

let company = {
  name: "TESLA",
  ceo: {
    name: "Elon Musk",
    age: 51,
    project: "SpaceX",
  },
};

// let secondCompany = { ...company };

// secondCompany.name = "makers";
// // свойство name изменилась только у скопированного обьекта

// secondCompany.ceo.name = "Mirdin";

// // свойство ceo.name изменилась у обеих обьектов

// console.log(company, "original");
// console.log(secondCompany, "copy");

// todo object.assigin()

// let newCompany = Object.assign({}, company);

// newCompany.name = "amazon";

// newCompany.ceo.name = "Aibek";

// console.log(newCompany, "copy");
// console.log(company, "original");

//? ГЛУБОКОЕ КОПИРОВАНИЕ

//?  JSON.parse() и JSON.stringify()

// const car = {
//   brand: "BMW",
//   model: "X7",
//   year: 2020,
//   owner: {
//     name: "Timur",
//     surname: "Salahudinov",
//   },
// };
// console.log(car);

// let carString = JSON.stringify(car);
// // пеоревели в строковый формат
// console.log(carString);

// let carParse = JSON.parse(carString);
// //перевели обратно в обычный формат
// console.log(carParse);

// console.log(car.owner === carParse.owner); // false, все внутренние обьекты хранятся в рахных ячейках памяти

let product = {
  price: 200,
  weight: 1000,
  count: 5,
  sayPrice: function () {
    console.log(this.price);
  },
};
product.sayPrice();
console.log(product);

let newProduct = JSON.parse(JSON.stringify(product));
console.log(newProduct);

//? при копировании с помощью JSON, методы обьекта исчезают

let wizard = {
  name: "Harry",
  lastname: "Potter",
  born: {
    date: "31 July 1980",
    country: "England",
  },
  friends: [
    {
      name: "Hermoine",
      age: 12,
    },
    {
      name: "Ron",
      age: 11,
    },
  ],
  study: {
    school: "Hogwarts",
    subjects: ["Charms", "History of Magic", "Flying"],
  },
};

//todo получить: Harry, Potter, 31 July 1980, England, Hermione, 12, Ron, 11, Hogwarts, Charms, History of Magic, Flying, Gryffindor

let {
  name,
  lastname,
  born: { date, country },
  friends: [{ name: name1, age: age1 }, { name: name2, age: age2 }],
  study: {
    school,
    subjects: [first, second, third],
  },
  fakultet = "Gryffindor",
} = wizard;
console.log(
  name,
  lastname,
  date,
  country,
  name1,
  age1,
  name2,
  age2,
  school,
  first,
  second,
  third,
  fakultet
);

let arr = [1, 2, 3, 4, 5];
// console.log(arr[0], arr[1]);
let [one, , , four] = arr;
console.log(one, four);
let obj = {
  age: 24,
  color: "blue",
  height: 160,
  hobbies: ["art", "music"],
};
// console.log(obj.hobbies);
// console.log(Object.values(obj));
let {
  imya = "Anonymous",
  hobbies: [hobby1, secondh],
} = obj;
console.log(imya, hobby1, secondh);

function checkTask(fullName) {
  let arr = fullName.split(" ");
  let [firstName, lastName] = arr;
  let obj = {
    firstName,
    lastName,
  };
  console.log(obj);
}
checkTask("Albert Einstein");
