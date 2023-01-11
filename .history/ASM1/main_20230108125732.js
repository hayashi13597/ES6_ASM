fetch("./json/cate-menu.json")
  .then((res) => res.json())
  .then((data) => {
    
    const menu=data.map((item) => {
      return `<a href="" class="nav-item nav-link">${item.name}</a>`;
    }).join("");
    document.getElementById("menu-list").innerHTML = menu;
  });