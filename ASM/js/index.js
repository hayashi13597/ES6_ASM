function check() {
  let menu = document.getElementById("header-menu").checked;
  let mobileMenu = document.getElementById("mobile-menu");
  if (menu === false) {
    mobileMenu.style.display = "block";
  } else {
    mobileMenu.style.display = "none";
  }
}
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
