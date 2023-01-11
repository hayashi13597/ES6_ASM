fetch("./json/cate-menu.json")
  .then((res) => res.json())
  .then((data) => {
    const menu = data
      .map((item) => {
        if (item.submenu) {
          return `<div class="nav-item dropdown dropright">
          <a
            href="#"
            class="nav-link dropdown-toggle"
            data-toggle="dropdown"
            >Dresses <i class="fa fa-angle-right float-right mt-1"></i
          ></a>
          <div
            class="dropdown-menu position-absolute rounded-0 border-0 m-0"
          >
            <a href="" class="dropdown-item">Men's Dresses</a>
            <a href="" class="dropdown-item">Women's Dresses</a>
            <a href="" class="dropdown-item">Baby's Dresses</a>
          </div>
        </div>`;
        } else {
          return `<a href="${ChangeToSlug(
            item.name
          )}" class="nav-item nav-link">${item.name}</a>`;
        }
      })
      .join("");
    document.getElementById("menu-list").innerHTML = menu;
  });
fetch("./json/categories.json")
  .then((res) => res.json())
  .then((data) => {
    data.sort((a, b) => a.amount - b.amount);
    const categories = data
      .map((item, index) => {
        return `<div class="col-lg-3 col-md-4 col-sm-6 pb-1 ${
          index >= 8 ? "non-display" : ""
        }">
      <a class="text-decoration-none" href="${ChangeToSlug(item.name)}">
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
    let banner_btn = "";
    for (let index = 0; index < data.length; index++) {
      banner_btn += `<li
                data-target="#header-carousel"
                data-slide-to="${index}"
                ${index == 0 ? "class='active'" : ""}
              ></li>`;
    }
    document.getElementById("all-btn").innerHTML = banner_btn;
  });
function ChangeToSlug(title) {
  //Đổi chữ hoa thành chữ thường
  slug = title.toLowerCase();
  //Đổi ký tự có dấu thành không dấu
  slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, "a");
  slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, "e");
  slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, "i");
  slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, "o");
  slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, "u");
  slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, "y");
  slug = slug.replace(/đ/gi, "d");
  //Xóa các ký tự đặt biệt
  slug = slug.replace(
    /\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi,
    ""
  );
  //Đổi khoảng trắng thành ký tự gạch ngang
  slug = slug.replace(/ /gi, " - ");
  //Đổi nhiều ký tự gạch ngang liên tiếp thành 1 ký tự gạch ngang
  //Phòng trường hợp người nhập vào quá nhiều ký tự trắng
  slug = slug.replace(/\-\-\-\-\-/gi, "-");
  slug = slug.replace(/\-\-\-\-/gi, "-");
  slug = slug.replace(/\-\-\-/gi, "-");
  slug = slug.replace(/\-\-/gi, "-");
  //Xóa các ký tự gạch ngang ở đầu và cuối
  slug = "@" + slug + "@";
  slug = slug.replace(/\@\-|\-\@|\@/gi, "");
  //In slug ra textbox có id “slug”
  return slug.replaceAll(" ", "");
}
