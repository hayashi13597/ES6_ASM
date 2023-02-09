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
const showCart = document.querySelector(".header__cart");
const boxAccount = document.querySelector(".box-account");
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
let mybutton = document.getElementById("myBtn");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
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
