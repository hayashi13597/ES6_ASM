fetch("./json/cate-menu.json")
  .then((res) => res.json())
  .then((data) => {
    let menu = "";
    data.map((item) => {
      menu += `<a href="" class="nav-item nav-link">${item.name}</a>`;
    });
    document.getElementById("menu-list").innerHTML = menu;
  });
fetch("./json/categories.json")
  .then((res) => res.json())
  .then((data) => {
    let categories = "";
    data.map((item) => {
      categories += `<div class="col-lg-3 col-md-4 col-sm-6 pb-1">
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
    });
    document.getElementById("cate").innerHTML = categories;
  });
