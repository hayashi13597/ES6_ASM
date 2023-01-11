fetch("./json/cate-menu.json")
  .then((res) => res.json())
  .then((data) => {
    let category = "";
    data.map((item) => {
      category += `<a href="" class="nav-item nav-link">${item.name}</a>`;
    });
    // console.log(category);
    document.getElementById("menu-list").innerHTML = category;
  });
fetch("./json/categories.json")
  .then((res) => res.json())
  .then((data) => {
    let category = "";
    data.map((item) => {
      category += `<a href="" class="nav-item nav-link">${item.name}</a>`;
    });
    // console.log(category);
    document.getElementById("menu-list").innerHTML = category;
  });
