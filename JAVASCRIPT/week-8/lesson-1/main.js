// http://localhost:8000/products
let API = "http://localhost:8000/products";

let title = document.querySelector("#title");
let price = document.querySelector("#price");
let descr = document.querySelector("#description");
let image = document.querySelector("#image");
let btnAdd = document.querySelector("#btn-add");
// console.log(title, price, descr, image, btnAdd);
//? блок куда добавляются карточки товара
let list = document.querySelector("#products-list");
console.log(list);

btnAdd.addEventListener("click", async function () {
  let obj = {
    title: title.value,
    price: price.value,
    description: descr.value,
    image: image.value,
  };
  console.log(obj);
  if (
    !obj.title.trim() ||
    !obj.price.trim() ||
    !obj.description.trim() ||
    !obj.image.trim()
  ) {
    alert("Заполните поле!");
    return;
  }

  await fetch(API, {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-type": "application/json; charset=utf-8",
    },
  });

  title.value = "";
  price.value = "";
  descr.value = "";
  image.value = "";
});

async function render() {
  let products = await fetch(API)
    .then((res) => res.json())
    .catch((err) => console.log(err));

  list.innerHTML = "";

  products.forEach((item) => {
    let newElem = document.createElement("div");
    newElem.id = item.id;
    newElem.innerHTML = `<div class="card m-5" style="width: 18rem;">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <p class="card-text">${item.description}</p>
        <p 
        <a href="#" class="btn btn-primary">Перейти</a>
      </div>
    </div>`;

    list.append(newElem);
    // console.log(item);
  });
  //   console.log(products);
}
render();
