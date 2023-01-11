fetch("./js/test.json")
  .then((res) => res.json())
  .then((data) => {
    let category = "";
    data.map((item) => {
      category += `<a href="" class="nav-item nav-link">${item.name}</a>`;
    });
    console.log(category);
  });
