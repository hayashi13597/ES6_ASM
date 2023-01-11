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
    let category = "";
    data.map((item) => {
      category += `<a href="" class="nav-item nav-link">${item.name}</a>`;
    });
    document.getElementById("menu-list").innerHTML = category;
  });
