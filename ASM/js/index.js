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
const products = document.querySelector("#has-submenu");
const pro_icon = document.querySelector("#product-icon");
products.addEventListener("mouseover", (event) => {
  pro_icon.classList.add("rotate-add");
  pro_icon.classList.remove("rotate-remove");
});
products.addEventListener("mouseout", (event) => {
  pro_icon.classList.add("rotate-remove");
  pro_icon.classList.remove("rotate-add");
});
//show and hide login and cart
const showLogin = document.querySelector(".header__account");
const boxAccount = document.querySelector(".box-account");
const showCart = document.querySelector(".header__cart");
const boxCart = document.querySelector(".header__cart--text");
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
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
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
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    headerFixed.classList.add("header-fixed");
    navFixed.classList.add("header-nav__fixed");
  } else {
    headerFixed.classList.remove("header-fixed");
    navFixed.classList.remove("header-nav__fixed");
  }
}
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
  let img = imgDiv.children[0].firstChild.getAttribute("src");
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
