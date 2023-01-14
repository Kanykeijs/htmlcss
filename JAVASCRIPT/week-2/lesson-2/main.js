//!логические операторы

//? и - &&
// console.log(true && false); //false
// console.log(true && true && false); //false
// console.log(true && true); //true
// console.log(false && false); //false

// console.log(!!"hello"); //преобразование в булевый тип
// console.log("" && "hello" && 0); //логические оператор и

// console.log("first" && "" && "second" && 45 && 0);

//?  ИЛИ - ||
// console.log(false || true); // true
// console.log(false || false || false || true); // true

// console.log(false || false); // false

//! Boolean(), || - для преобразования в булевый тип

// console.log("" || 56 || 0 || "hello"); // возвращает самое первое значение (true)

// console.log("" || 0); // если все операнды яввдяются false, то вернет самый последний false

// console.log("" || 0 || null || undefined || NaN || 0);

// const isAdmin = false;

// const mimetype = "images/jpeg";

// const result = isAdmin || mimetype; //false || "image/jpeg" --> "image/jpeg"
// console.log(result);

// let book; // undefined

// book = "hello"; // true

// const author = null; //

// const title = "";

// const result2 = book || title || "1" || author;
// console.log(result2);

// console.log(true || (false && true)); //true || (false || true); //true || false; // true;

// console.log(("hello" && false) || (null && true)); //("hello" && false) || (null && true); // false || null; // null;

// console.log("22" && true && "" && 0);
//true && true && false && false
//? оператор И находит и возвращает самый первый false, или же если все значенте верны (true), возвращает самый последний true

// console.log("22" && 14 && "hello");
// console.log("" || (30 && "1" && 10 === 10) || false);
// "" || (30 && "1" && 10 === 10) || false ;
// "" || ("1" && 10 === 10) || false;
// "" || ("1" && true) || false;
// "" || true || false;
// true;

//! - НЕ (переводит в булевое зна чение и переворочивает его)

// console.log(!true); //false
// console.log(!""); //true
// console.log(!50); //false
// console.log(!0); // true

//? "11" то же самое что и Boolean()

// console.log(!!false);
// console.log(!!50);
// console.log(!!null);
// console.log(Boolean(null));

// const firstValue = null;
// const secondValue = 5000;

// const resultVar = firstValue || !secondValue;
// console.log(resultVar);

// let name = prompt("enter name");
// console.log(name);

// console.log(typeof name);

let stringNumber = "100";
console.log(+stringNumber); // 100
console.log(+true); //1
console.log(+false); // 0
console.log(+null); // 0
console.log(+undefined); // NaN

console.log(+"h2"); // NaN
