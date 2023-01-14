//! Запросы и вызоимодействие с веб - сервером

//? XHLHttpRequest

// let btn = document.querySelector("button");
// const getData = () => {
//   //   console.log("hey");

//   const xhr = new XMLHttpRequest();
//   //   console.log(xhr);

//   xhr.open("GET", "https://reqres.in/api/users?page=2");
//   xhr.send();

//   xhr.onload = () => {
//     // console.log(xhr.response);
//     const data = JSON.parse(xhr.response);
//     console.log(data);
//   };
// };
// btn.addEventListener("click", getData);

//? ajax - работает с JQuery

//! fetch

// fetch("https://reqres.in/api/users?page=2").then((res) =>
//   console.log(res.json()) // второй промис после метода json()
// );
// console.log(data);

fetch("https://reqres.in/api/users?page=2").then((res) =>
  res.json().then((data) => console.log(data))
);

//! отрисовываем на странице
const div = document.querySelector("div");
fetch("https://reqres.in/api/users")
  .then((res) => res.json())
  .then((info) => {
    info.data.forEach((person) => {
      //   let h6 = document.createElement("h6");
      //   h6.innerText = `${person.first_name} ${person.last_name}`;
      //   div.append(`<h6>${person.first_name} ${person.last_name}</h6>`);
      //   console.log(h6);
      let div = document.querySelector("div");

      fetch("https://reqres.in/api/users")
        .then((res) => res.json())
        .then((info) => {
          info.data.forEach((person) => {
            div.innerHTML += `<h5>${person.first_name} ${person.last_name}</h5> <img src=${person.avatar}></img> `;
            // let h6 = document.createElement("h3");
            // h6.innerText = `${person.first_name} ${person.last_name}`;
            // console.log(h6);
            // div.append(h6)
          });
        });
    });
  });

fetch("http://localhost:8000/students", {
  method: "POST",
  body: JSON.stringify({ name: "Kanai", lang: "JS" }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});
