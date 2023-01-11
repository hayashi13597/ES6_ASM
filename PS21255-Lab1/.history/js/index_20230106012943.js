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
      categories += `<a href="" class="nav-item nav-link">${item.name}</a>`;
    });
    document.getElementById("cate").innerHTML = categories;
  });
