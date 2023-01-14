//! ДЕСТРУКТУРИЗАЦИЯ

/**
 * В JavaScript есть две чаще
 * всего используемые структуры
 * данных – это Object и Array.
 *
 * Object - хранит элементы данных по ключам;
 * Array – хранить упорядоченные коллекции данных.
 */

/**
 * Деструктурирующее присваивание – это специальный синтаксис,
 * который позволяет нам «распаковать» массивы или объекты
 * в кучу переменных, так как иногда они более удобны.
 *
 * Пример с инструментами, удобнее вытащить все инструменты
 * и работать. Нежели каждый раз открывать коробку с ними.
 *
 */

// let arr = ["Travis", "Scott"];

// console.log(arr[0]);
// console.log(arr[1]);

// let name = arr[0];
// let surname = arr[1];

// console.log(name, surname);

// let [name, surname] = arr;
// console.log(name, surname);

// let [mustafa, timur] = arr;
// console.log(mustafa, timur);

// let songs = ["goosebumps", "antidote", "mafia", "tkn", "wake up"];

// let [firstSong, , , , fifthSong] = songs;

// console.log(firstSong, fifthSong);

// todo GET ANTIDOTE AND WAKE UP
// let [, antidote, , , tkn] = songs;
// console.log(antidote, tkn);

//? REST OPERATOR

// let songs = ["goosebumps", "antidote", "mafia", "tkn", "wake up"];

//! rest или  other является массивом
// let [item1, item2, ...rest] = songs;
// console.log(item1, item2);
// console.log(rest);

//SPREAD OPERATOR
// let copySong = [...songs];
// console.log(copySong);

//! spread operator - копирует весь массив или обьект
//! RESR оператор - копирует остаточные значение при деструктуризации

//? ЗНАЧЕНИЕ ПО УМОЛЧАНИЮ
// let albums = ["utopia", "astroworld", "rodeo"];
// console.log(albums[0]);
// console.log(albums[4]);

// let albumFour = albums[4];
// console.log(albumFour);

// let [one, two, three, four] = albums;
// console.log(one, two, three);
// console.log(four);

// let [one = "TRAVISS", two, three, four = "jackboys"] = albums;
// console.log(one, two, three);
// console.log(four);

//TODO SHOW HOW IT WORKS WITH EMPTY ARR
// let [elem1 = "laptop", elem2 = "phone"] = [];
// console.log(elem1, elem2);

/**
 * Значения по умолчанию могут быть гораздо более
 * сложными выражениями или даже функциями.
 * Они выполняются, только если значения отсутствуют.
 */
//#1

// let [name, age = prompt("How old are you?")] = ["Tom"];
// console.log(name, age);

//! ================= подмена переменных
// let a = 1;
// let b = 2;
// let temp;
// temp = a;
// a = b;
// b = temp;
// console.log(a, b);

// let one = 1;
// let zero = 2;
// let two = 0;
// let arr1 = [two, one, zero];
// [zero, one, two] = [two, one, zero];
// console.log(zero, one, two);

//! ДЕСТРУКТРУРИЗАЦИЯ ОБЬЕКТОВ
//? Обьекты нужно деструктуризовать строго по ключам! Порядок не имеет значения

// let artist = {
//   name: "Travis",
//   lastname: "Scott",
//   position: "rapper",
//   wife: "Kylie",
// };

// let name = artist.name;
// let lastname = artist.lastname;
// let position = artist.position;

// console.log(name, lastname, position);

// let { name, lastname, position } = artist;
// console.log(name, lastname, position);

// let { position, name, lastname } = artist;
// console.log(position, name, lastname);

// let { name: hisName, lastname: hisLastname, position: hisPosition } = artist;

// console.log(hisName);
// console.log(hisLastname);
// console.log(hisPosition);
// console.log(artist);
// console.log(wife);

//todo дать значение по умолчанию как prompt()
// let { name = prompt("name"), status = prompt("status") } = {};
// console.log(name, status);

//? REST
// let { name, ...rest } = artist;
// console.log(name);
// console.log(resr);

//! rest оператор в обьектах сохраняется как обьект, в массивах - как массив

//! ДЕСТРУКТУРИЗАЦИЯ СТРОКИ
//? деструктурирует по символам (не по словам!)
// let [str, str2, str3] = "plus ultra";
// console.log(str, str2, str3);

// let [str, str2, str3 = "BILL"] = "plus ultra".split(" ");
// console.log(str, str2, str3);

//! ВЛОЖЕННАЯ ДЕСТРУКТУРРИЗАЦИЯ

// const person = {
//   name: {
//     first: "playboi",
//     last: "carti",
//   },
//   age: 25,
//   songs: ["Vamp Anthem", "SKY", "RIP"],
// };
// const {
//   name: { first, last },
//   songs: [song1, song2, song3],
// } = person;

// console.log(first, last);
// console.log(song1, song2, song3);

// let arr2 = [
//   [1, 2],
//   [3, 4],
// ];
// let [[a, b], [c, d]] = arr2;
// console.log(a, b, c, d);

// let [a, b] = arr2;
// console.log(arr2);
// console.log(a, b);
