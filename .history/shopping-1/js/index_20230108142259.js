fetch("./json/cate-menu.json")
  .then((res) => res.json())
  .then((data) => {
    const menu = data
      .map((item) => {
        return `<a href="" class="nav-item nav-link">${item.name}</a>`;
      })
      .join("");
    document.getElementById("menu-list").innerHTML = menu;
  });
fetch("./json/categories.json")
  .then((res) => res.json())
  .then((data) => {
    data.sort((a, b) => a.amount - b.amount);
    const categories = data
      .map((item) => {
        return `<div class="col-lg-3 col-md-4 col-sm-6 pb-1">
      <a class="text-decoration-none" href="">
        <div class="cat-item d-flex align-items-center mb-4">
          <div class="overflow-hidden" style="width: 100px; height: 100px">
            <img class="img-fluid" src="${item.image}" alt="" />
          </div>
          <div class="flex-fill pl-3">
            <h6>${item.name}</h6>
            <small class="text-body">${item.amount} Products</small>
          </div>
        </div>
      </a>
    </div>`;
      })
      .join("");
    document.getElementById("cate").innerHTML = categories;
  });
fetch("./json/banner.json")
  .then((res) => res.json())
  .then((data) => {
    const banner = data
      .map((item, index) => {
        return `<div
        class="carousel-item position-relative ${index === 0 ? "active" : ""}"
        style="height: 430px"
      >
        <img
          class="position-absolute w-100 h-100"
          src="img/${item.img}"></img>
          style="object-fit: cover"
        />
        <div
          class="carousel-caption d-flex flex-column align-items-center justify-content-center"
        >
          <div class="p-3" style="max-width: 700px">
            <h1
              class="display-4 text-white mb-3 animate__animated animate__fadeInDown"
            >
              ${item.title}
            </h1>
            <p class="mx-md-5 px-5 animate__animated animate__bounceIn">
              ${item.description}
            </p>
            <a
              class="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp"
              href="#"
              >Shop Now</a
            >
          </div>
        </div>
      </div>`;
      })
      .join("");
    document.getElementById("banner-img").innerHTML = banner;
  });
var slug = function (str) {
  str = str.replace(/^\s+|\s+$/g, ""); // trim
  str = str.toLowerCase();

  // remove accents, swap ñ for n, etc
  var from = "ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;";
  var to = "aaaaaeeeeeiiiiooooouuuunc------";
  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
  }

  str = str
    .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
    .replace(/\s+/g, "-") // collapse whitespace and replace by -
    .replace(/-+/g, "-"); // collapse dashes

  return str;
};
console.log(convertToSlug("Phúc Lâm"));
