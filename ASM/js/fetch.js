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
          <a class="nothover" href="#"
            ><img src="img/${row.img1}" alt=""
          /></a>
          <a class="whenhover" href="#"
            ><img src="img/${row.img2}" alt=""
          /></a>
        </div>
        <div class="item-detail">
          <h3>
            <a href="#" id="product-name"
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
          <a class="nothover" href="#"
            ><img src="img/${row.img1}" alt=""
          /></a>
          <a class="whenhover" href="#"
            ><img src="img/${row.img2}" alt=""
          /></a>
        </div>
        <div class="item-detail">
          <h3>
            <a href="#" id="product-name"
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
          <a class="nothover" href="#"
            ><img src="img/${col.img1}" alt=""
          /></a>
          <a class="whenhover" href="#"
            ><img src="img/${col.img2}" alt=""
          /></a>
        </div>
        <div class="col-item__detail">
          <h3>
            <a href="#"
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
const showAllCart = () => {
  const cart = document.getElementById("mini-cart");
  const cartCount = document.querySelector(".cart__number");
  const products = JSON.parse(sessionStorage.getItem("cart"));
  let sum = 0;
  if (products) {
    for (const el of products) {
      let gia = el.price.split(",").join("");
      sum += parseInt(gia) * parseInt(el.count);
    }
    const formatter = new Intl.NumberFormat("en-US", {
      currency: "USD",
    });
    sum = formatter.format(sum);
  }
  if (products == null || products.length == 0) {
    cart.innerHTML = `<tr class="mini-cart__empty">
    <td>
      <div class="svgico-mini-cart">
        <svg
          width="81"
          height="70"
          viewBox="0 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <g id="icomoon-ignore"></g>
          <path
            d="M30.622 9.602h-22.407l-1.809-7.464h-5.027v1.066h4.188l5.198 21.443c-1.108 0.323-1.923 1.334-1.923 2.547 0 1.472 1.193 2.666 2.666 2.666s2.666-1.194 2.666-2.666c0-0.603-0.208-1.153-0.545-1.599h7.487c-0.337 0.446-0.545 0.997-0.545 1.599 0 1.472 1.193 2.666 2.665 2.666s2.666-1.194 2.666-2.666c0-1.473-1.193-2.665-2.666-2.666v0h-11.403l-0.517-2.133h14.968l4.337-12.795zM13.107 27.196c0 0.882-0.717 1.599-1.599 1.599s-1.599-0.717-1.599-1.599c0-0.882 0.717-1.599 1.599-1.599s1.599 0.718 1.599 1.599zM24.836 27.196c0 0.882-0.718 1.599-1.6 1.599s-1.599-0.717-1.599-1.599c0-0.882 0.717-1.599 1.599-1.599 0.882 0 1.6 0.718 1.6 1.599zM11.058 21.331l-2.585-10.662h20.662l-3.615 10.662h-14.462z"
            fill="#000000"
          ></path>
        </svg>
      </div>
      Hiện chưa có sản phẩm
    </td>
  </tr>`;
    cartCount.innerText = 0;
    document.getElementById("total-view-cart").innerText = "0đ";
  } else {
    const tbody = products
      .map((product) => {
        return `<tr class="mini-cart__item">
      <td class="mini-cart__left">
        <a href="#">
          <img
            src="${product.img}"
            alt=""
          />
        </a>
      </td>
      <td class="mini-cart__right">
        <p class="mini-cart__title">
          <a href="#">${product.name}</a>
        </p>
        <div class="mini-cart__quantity">
          <span class="mnc-value">${product.count}</span>
        </div>
        <div class="mini-cart__price">
          <span class="mnc-price">${product.price}đ</span>
        </div>
        <div class="mini-cart__remove">
          <a href="#" onclick="event.preventDefault();deleteProduct(this)" data="${product.id}" id="btn-delete">
          <i class="fa-solid fa-xmark"></i>
          </a>
        </div>
      </td>
    </tr>`;
      })
      .join("");
    document.getElementById("mini-cart").innerHTML = tbody;
    cartCount.innerHTML = products.length;
    document.getElementById("total-view-cart").innerText = sum + "đ";
  }
};
showAllCart();
