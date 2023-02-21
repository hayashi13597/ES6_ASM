import {
  updateCountCart,
  updateTotalPrice,
  displayTitle,
  formatter,
} from "./cart.js";

export const productInCart = () => {
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
            <button type="button" class="qtyminus qty-btn" id=${item.id}>
              -
            </button>
            <input
              type="text"
              readonly
              min="1"
              value="${item.count}"
              data-price=${item.price.split(",").join("")}
              class="item-quantity"
            />
            <button type="button" class="qtyplus qty-btn" id=${item.id}>
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
          <span class="line-item-total">${formatter.format(
            parseInt(item.price.split(",").join("")) * item.count
          )}đ</span>
        </div>
        <div class="remove">
          <a href="javascript:(0)" onclick="window._removeItems.removeItem(this)" data="${
            item.id
          }">
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
export const removeItem = (e) => {
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
  showAllCart();
};
