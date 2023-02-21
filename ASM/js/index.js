const showLogin = document.querySelector(".header__account");
const boxAccount = document.querySelector(".box-account");
const showCart = document.querySelector(".header__cart");
const boxCart = document.querySelector(".header__cart--text");
const products = document.querySelector("#has-submenu");
const pro_icon = document.querySelector("#product-icon");

//responsive with header menu
function check() {
  let menu = document.getElementById("header-menu").checked;
  let mobileMenu = document.getElementById("mobile-menu");
  if (menu === false) {
    mobileMenu.style.display = "block";
  } else {
    mobileMenu.style.display = "none";
  }
}
// submenu show and hide
products.addEventListener("mouseover", () => {
  pro_icon.classList.add("rotate-add");
  pro_icon.classList.remove("rotate-remove");
});
products.addEventListener("mouseout", () => {
  pro_icon.classList.add("rotate-remove");
  pro_icon.classList.remove("rotate-add");
});
//show and hide login and cart
boxAccount.addEventListener("click", () => {
  showLogin.classList.toggle("js-action-show");
  showCart.classList.remove("js-action-show");
});
boxCart.addEventListener("click", () => {
  showCart.classList.toggle("js-action-show");
  showLogin.classList.remove("js-action-show");
});

// show and hide when scrolling
window.onscroll = function () {
  scrollFunction();
  fixedHeader();
};
function scrollFunction() {
  let mybutton = document.getElementById("myBtn");
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    mybutton.classList.remove("disabled");
    showCart.classList.remove("js-action-show");
    showLogin.classList.remove("js-action-show");
  } else {
    mybutton.classList.add("disabled");
  }
}
function topFunction() {
  document.body.scrollTop = 0; //safari
  document.documentElement.scrollTop = 0; //chrome, firefox
}
//header scroll
function fixedHeader() {
  const headerFixed = document.getElementById("header-fixed");
  const navFixed = document.getElementById("nav-fixed");
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    headerFixed.classList.add("header-fixed");
    navFixed.classList.add("header-nav__fixed");
  } else {
    headerFixed.classList.remove("header-fixed");
    navFixed.classList.remove("header-nav__fixed");
  }
}
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
const deleteProduct = (e) => {
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
  showAllCart();
};
const addProduct = (e) => {
  let targetGrand = e.parentNode;
  let detail = targetGrand.previousElementSibling;
  let imgDiv = detail.previousElementSibling;
  let img = imgDiv.children[0].firstElementChild.getAttribute("src");
  let count = 1;
  let id = e.getAttribute("data-id");
  let name = detail.children[0].innerText;
  let price = detail.children[1].innerText.slice(0, -1);
  let product = { id, img, name, price, count };
  let check = true;
  let cart = JSON.parse(sessionStorage.getItem("cart"));
  if (cart) {
    for (const item of cart) {
      if (item.id == id) {
        check = false;
        item.count += 1;
        break;
      }
    }
    if (check) {
      cart.push(product);
    }
  } else {
    cart = [];
    cart.push(product);
  }
  sessionStorage.setItem("cart", JSON.stringify(cart));
  showCart.classList.add("js-action-show");
  setTimeout(() => {
    showCart.classList.remove("js-action-show");
  }, 1000);
  showAllCart();
};
