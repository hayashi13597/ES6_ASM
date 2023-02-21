const fetchOrders = async () => {
  const response = await fetch("./json/product-orders.json");
  const data = await response.json();
  const numberOfColumns = 2;
  for (let i = 0; i < data.length; i += numberOfColumns) {
    const rows = data.slice(i, i + numberOfColumns);
    let test = document.getElementById("product-orders");
    let div = document.createElement("div");
    div.className = "product-row";
    test.appendChild(div);
    let rowItem = rows
      .map((row) => {
        return `<div class="row-item">
        <div class="item-img">
          <a class="nothover" href="product-detail.html?id=${row.id}">
            <img src="img/${row.img1}" alt="${row.name}"></a>
          <a class="whenhover" href="product-detail.html?id=${row.id}"
            ><img src="img/${row.img2}" alt="${row.name}"
          /></a>
        </div>
        <div class="item-detail">
          <h3>
            <a href="product-detail.html?id=${row.id}" id="product-name"
              >${row.name}</a
            >
          </h3>
          <p class="item-detail__price" id="product-price">${row.price}đ</p>
        </div>
        <div class="item-action">
          <button class="item-action__btn" id="add-cart" data-id="${row.id}" onclick="addProduct(this)">
            <i class="bx bx-cart-alt"></i>
          </button>
        </div>
      </div>`;
      })
      .join("");
    div.insertAdjacentHTML("afterBegin", rowItem);
  }
};
const fetchProductAvailable = async () => {
  const response = await fetch("./json/product-availables.json");
  const data = await response.json();
  const numberOfColumns = 2;
  for (let i = 0; i < data.length; i += numberOfColumns) {
    const rows = data.slice(i, i + numberOfColumns);
    let test = document.getElementById("prod-available");
    let div = document.createElement("div");
    div.className = "product-row";
    test.appendChild(div);
    let rowItem = rows
      .map((row) => {
        return `<div class="row-item">
        <div class="item-img">
          <a class="nothover" href="product-detail.html?id=${row.id}">
            <img src="img/${row.img1}" alt="${row.name}"
          /></a>
          <a class="whenhover" href="product-detail.html?id=${row.id}"
            ><img src="img/${row.img2}" alt=""
          /></a>
        </div>
        <div class="item-detail">
          <h3>
            <a href="product-detail.html?id=${row.id}" id="product-name"
              >${row.name}</a
            >
          </h3>
          <p class="item-detail__price" id="product-price">${row.price}đ</p>
        </div>
        <div class="item-action">
          <button class="item-action__btn" id="add-cart" data-id="${row.id}" onclick="addProduct(this)">
            <i class="bx bx-cart-alt"></i>
          </button>
        </div>
      </div>`;
      })
      .join("");
    div.insertAdjacentHTML("afterBegin", rowItem);
  }
};
const fetchScaleFigures = async () => {
  const response = await fetch("./json/scale-figure.json");
  const data = await response.json();
  const numberOfColumns = 4;
  for (let i = 0; i < data.length; i += numberOfColumns) {
    const cols = data.slice(i, i + numberOfColumns);
    let test = document.getElementById("scale-figures");
    let div = document.createElement("div");
    div.className = "product-col";
    test.appendChild(div);
    let colItem = cols
      .map((col) => {
        return `<div class="col-item">
        <div class="col-item__img">
          <a class="nothover" href="product-detail.html?id=${col.id}">
            <img src="img/${col.img1}" alt=""
          /></a>
          <a class="whenhover" href="product-detail.html?id=${col.id}"
            ><img src="img/${col.img2}" alt=""
          /></a>
        </div>
        <div class="col-item__detail">
          <h3>
            <a href="product-detail.html?id=${col.id}"
              >${col.name}</a
            >
          </h3>
          <p class="item-detail__price">${col.price}đ</p>
        </div>
      </div>`;
      })
      .join("");
    div.insertAdjacentHTML("afterBegin", colItem);
  }
};
const getAllProduct = async () => {
  const res = await fetch("./json/products.json");
  const data = await res.json();
  localStorage.setItem("products", JSON.stringify(data));
  return data;
};
fetchOrders();
fetchProductAvailable();
fetchScaleFigures();
