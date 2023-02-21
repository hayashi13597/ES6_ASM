var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});
var swiper = new Swiper(".mySwiper3", {
  slidesPerView: 5,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const showProductRelated = async () => {
  const res = await fetch("./json/products.json");
  const data = await res.json();
  const filter = data.filter((item) => item.id % 3 == 0);
  const html = filter
    .map((el) => {
      return `<div class="swiper-slide">
                <div class="row-item">
                  <div class="item-img">
                    <a class="nothover" href="#"
                      ><img src="img/${el.img1}" alt=""
                    /></a>
                  </div>
                  <div class="item-detail">
                    <h3>
                      <a href="#" id="product-name"
                        >${el.name}</a
                      >
                    </h3>
                    <p class="item-detail__price" id="product-price">
                    ${el.price}đ
                    </p>
                  </div>
                  <div class="item-action">
                    <button
                      class="item-action__btn"
                      id="add-cart"
                      data-id="${el.id}"
                      onclick="addProduct(this)"
                    >
                      <i class="bx bx-cart-alt"></i>
                    </button>
                  </div>
                </div>
              </div>`;
    })
    .join("");
  document.querySelector("#product-detail").innerHTML = html;
};
showProductRelated();

const scrollWithDiv = () => {
  const myDiv = document.getElementById("productDetai--content");
  window.addEventListener("scroll", () => {
    myDiv.scrollTop = window.scrollY - 200;
  });
};

window.onscroll = function () {
  scrollWithDiv();
};
const address = fetch("./json/products.json")
  .then((res) => res.json())
  .then((data) => data);
const showDetail = async () => {
  const id = window.location.search.slice(4) || 1;
  const data = await address;
  const item = data.find((item) => item.id == id);
  document.querySelector(".productDetai__title").innerText = item.name;
  document.querySelector(".productDetai__price").innerText = item.price + "đ";
  document.querySelector("#nameProduct").innerText = item.name;
  document.querySelector("#category").innerText = item.category;
  document.querySelector("#img1").setAttribute("src", "img/" + item.img1);
  document.querySelector("#img11").setAttribute("src", "img/" + item.img2);
};
showDetail();
