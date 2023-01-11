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
            <small class="text-body">${item.amount}</small>
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
      .map((item) => {
        return `<div
        class="carousel-item position-relative active"
        style="height: 430px"
      >
        <img
          class="position-absolute w-100 h-100"
          src="img/carousel-1.jpg"
          style="object-fit: cover"
        />
        <div
          class="carousel-caption d-flex flex-column align-items-center justify-content-center"
        >
          <div class="p-3" style="max-width: 700px">
            <h1
              class="display-4 text-white mb-3 animate__animated animate__fadeInDown"
            >
              Men Fashion
            </h1>
            <p class="mx-md-5 px-5 animate__animated animate__bounceIn">
              Lorem rebum magna amet lorem magna erat diam stet. Sadips
              duo stet amet amet ndiam elitr ipsum diam
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
    document.getElementById("menu-list").innerHTML = menu;
  });
