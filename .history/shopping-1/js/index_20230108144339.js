fetch("./json/cate-menu.json")
  .then((res) => res.json())
  .then((data) => {
    const menu = data
      .map((item) => {
        return `<a href="${ChangeToSlug(
          item.name
        )}" class="nav-item nav-link">${item.name}</a>`;
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
    data.forEach(( index) => {
      banner_btn += `<li
                data-target="#header-carousel"
                data-slide-to="${index}"
                ${index == 0 ? "class='active'" : ""}
              ></li>`;
    });
    document.getElementById("all-btn").innerHTML = banner_btn;
  });
function ChangeToSlug(title) {
  //?????i ch??? hoa th??nh ch??? th?????ng
  slug = title.toLowerCase();
  //?????i k?? t??? c?? d???u th??nh kh??ng d???u
  slug = slug.replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/gi, "a");
  slug = slug.replace(/??|??|???|???|???|??|???|???|???|???|???/gi, "e");
  slug = slug.replace(/i|??|??|???|??|???/gi, "i");
  slug = slug.replace(/??|??|???|??|???|??|???|???|???|???|???|??|???|???|???|???|???/gi, "o");
  slug = slug.replace(/??|??|???|??|???|??|???|???|???|???|???/gi, "u");
  slug = slug.replace(/??|???|???|???|???/gi, "y");
  slug = slug.replace(/??/gi, "d");
  //X??a c??c k?? t??? ?????t bi???t
  slug = slug.replace(
    /\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi,
    ""
  );
  //?????i kho???ng tr???ng th??nh k?? t??? g???ch ngang
  slug = slug.replace(/ /gi, " - ");
  //?????i nhi???u k?? t??? g???ch ngang li??n ti???p th??nh 1 k?? t??? g???ch ngang
  //Ph??ng tr?????ng h???p ng?????i nh???p v??o qu?? nhi???u k?? t??? tr???ng
  slug = slug.replace(/\-\-\-\-\-/gi, "-");
  slug = slug.replace(/\-\-\-\-/gi, "-");
  slug = slug.replace(/\-\-\-/gi, "-");
  slug = slug.replace(/\-\-/gi, "-");
  //X??a c??c k?? t??? g???ch ngang ??? ?????u v?? cu???i
  slug = "@" + slug + "@";
  slug = slug.replace(/\@\-|\-\@|\@/gi, "");
  //In slug ra textbox c?? id ???slug???
  return slug.replaceAll(" ", "");
}
console.log(ChangeToSlug("Ph??c L??m"));
