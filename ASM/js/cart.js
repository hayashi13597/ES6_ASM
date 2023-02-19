// const formatter = new Intl.NumberFormat("en-US", {
//   currency: "USD",
// });
import formatter from "./formatter.js";
import { testImport } from "./formatter.js";
console.log(testImport);
const productInCart = () => {
  const cart = JSON.parse(sessionStorage.getItem("cart"));
  if (cart) {
    const html = cart
      .map((item) => {
        return `<div class="media-line-item item-${item.id}">
      <div class="media-left">
        <div class="item-imm">
          <a href="javascript:(0)">
            <img src="${item.img}" alt="${item.name}" />
          </a>
        </div>
      </div>
      <div class="media-right">
        <div class="item-info">
          <a href="product-detail.html">
            <h3 class="item--title">${item.name}</h3>
          </a>
        </div>
        <div class="item-qty">
          <div class="quantity-partent clearfix">
            <button type="button" class="qtyminus qty-btn">
              -
            </button>
            <input
              type="text"
              readonly
              min="1"
              value="1"
              data-price=${item.price.split(",").join("")}
              class="item-quantity"
            />
            <button type="button" class="qtyplus qty-btn">
              +
            </button>
          </div>
        </div>
        <div class="item-price">
          <p>
            <span>${item.price}</span>đ
          </p>
        </div>
      </div>
      <div class="item-total-price">
        <div class="price">
          <span class="text">Thành tiền</span>
          <span class="line-item-total">${item.price}đ</span>
        </div>
        <div class="remove">
          <a href="javascript:(0)" onclick="removeItem(this)" data="${item.id}">
            <img src="img/trash-regular-24.png" alt="" />
          </a>
        </div>
      </div>
    </div>`;
      })
      .join("");
    document.querySelector(".table-cart").innerHTML = html;
  } else {
    document.querySelector(".table-cart").innerHTML =
      "<p>Giỏ hàng của bạn đang trống</p>";
  }
};
productInCart();
const btnCart = () => {
  const plus = document.querySelectorAll(".qtyplus");
  const minus = document.querySelectorAll(".qtyminus");
  plus.forEach((item) => {
    item.addEventListener("click", (e) => {
      const totalPrice =
        e.target.parentNode.parentNode.parentNode.nextElementSibling.children[0]
          .children[1];
      let count =
        parseInt(e.target.previousElementSibling.getAttribute("value")) + 1;
      e.target.previousElementSibling.setAttribute("value", count);
      let price = parseInt(
        e.target.previousElementSibling.getAttribute("data-price")
      );
      let total = count * price;
      e.target.previousElementSibling.setAttribute("total", total);
      totalPrice.innerText = formatter.format(total) + "đ";
      updateTotalPrice();
    });
  });
  minus.forEach((item) => {
    item.addEventListener("click", (e) => {
      const totalPrice =
        e.target.parentNode.parentNode.parentNode.nextElementSibling.children[0]
          .children[1];
      let value = parseInt(e.target.nextElementSibling.getAttribute("value"));
      if (value <= 1) {
        return;
      } else {
        let count =
          parseInt(e.target.nextElementSibling.getAttribute("value")) - 1;
        e.target.nextElementSibling.setAttribute("value", count);
        let price = parseInt(
          e.target.nextElementSibling.getAttribute("data-price")
        );
        let total = count * price;
        totalPrice.innerText = formatter.format(total) + "đ";
      }
      updateTotalPrice();
    });
  });
};
const updateTotalPrice = () => {
  const input = document.querySelectorAll("input[data-price]");
  const summaryTotal = document.querySelector(".summary-total p span");
  let totalPrice = 0;
  input.forEach((item) => {
    let price = item.getAttribute("data-price");
    let count = item.getAttribute("value");
    let total = count * price;
    totalPrice += total;
  });
  summaryTotal.innerText = formatter.format(totalPrice) + "đ";
};
updateTotalPrice();
btnCart();
const updateCountCart = () => {
  const countCart = document.querySelector(".count-cart");
  const cart = JSON.parse(sessionStorage.getItem("cart"));
  const cartLength = cart ? cart.length : 0;
  countCart.innerText = cartLength;
};
updateCountCart();
const removeItem = (e) => {
  const dataId = e.getAttribute("data");
  let products = JSON.parse(sessionStorage.getItem("cart"));
  const objWithIdIndex = products.findIndex((obj) => obj.id === dataId);
  if (objWithIdIndex > -1) {
    products.splice(objWithIdIndex, 1);
  }
  if (products.length == 0) {
    sessionStorage.removeItem("cart");
  } else {
    sessionStorage.setItem("cart", JSON.stringify(products));
  }
  updateCountCart();
  productInCart();
  displayTitle();
  updateTotalPrice();
};
const displayTitle = () => {
  const title = document.querySelector(".title-number-cart");
  const orderNoted = document.querySelector(".order-noted-block");
  const cart = JSON.parse(sessionStorage.getItem("cart"));
  if (cart && cart.length > 0) {
    title.classList.remove("d-none");
    orderNoted.classList.remove("d-none");
  } else {
    title.classList.add("d-none");
    orderNoted.classList.add("d-none");
  }
};
displayTitle();
