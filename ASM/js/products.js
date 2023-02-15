const sortBy = document.querySelector(".sort-by");
const option = document.querySelector(".checked-filter-option");
const listOption = document.querySelector("#listOption");
const checkbox = document.querySelectorAll(".checkbox-list li input");
const removeOption = document.getElementById("removeOption");

//input checkbox filter
const checkOption = () => {
  let listOptions = [];
  checkbox.forEach((item) => {
    item.addEventListener("click", async (e) => {
      const value = e.target.value;
      if (item.checked) {
        listOptions.push(value);
      } else {
        if (listOptions.includes(value)) {
          listOptions.splice(listOptions.indexOf(value), 1);
        }
      }
      const datas = await address;
      let category = [];
      for (const data of datas) {
        for (const list of listOptions) {
          if (data.category.includes(list)) {
            category.push(data);
          }
        }
      }
      showProducts(category);
      showOption(listOptions);
    });
  });
  removeOption.addEventListener("click", () => {
    listOptions = [];
    showOption(listOptions);
    checkbox.forEach((item) => {
      item.checked = false;
    });
  });
};
//sort by asc desc A-Z Z-A
const checkFilter = () => {
  sortBy.addEventListener("click", (e) => {
    const checked = e.target.closest(".sort-by li");
    if (!checked) return;
    document
      .querySelectorAll(".sort-by li")
      .forEach((el) => el.classList.remove("sort-active"));
    checked.classList.add("sort-active");
  });
};
// Show options selected when checked input checkbox
const showOption = (arr = []) => {
  if (arr.length == 0) {
    option.style.display = "none";
  } else {
    option.style.display = "block";
    listOption.innerHTML = arr.join(", ");
  }
};
checkOption();
checkFilter();
// promise products
const address = fetch("./json/products.json")
  .then((res) => res.json())
  .then((data) => data);

//show all products form API
const showAllProduct = () => {
  fetch("./json/products.json")
    .then((res) => res.json())
    .then((data) => {
      const html = data
        .map((item) => {
          return `<div class="row-item">
                  <div class="item-img">
                    <a class="nothover" href="#"
                      ><img src="img/${item.img1}" alt=""
                    /></a>
                    <a class="whenhover" href="#"
                      ><img src="img/${item.img2}" alt=""
                    /></a>
                  </div>
                  <div class="item-detail">
                    <h3>
                      <a href="#" id="product-name"
                        >${item.name}</a
                      >
                    </h3>
                    <p class="item-detail__price" id="product-price">
                      ${item.price}đ
                    </p>
                  </div>
                  <div class="item-action">
                    <button
                      class="item-action__btn"
                      id="add-cart"
                      data-id="${item.id}"
                      onclick="addProduct(this)"
                    >
                      <i class="bx bx-cart-alt"></i>
                    </button>
                  </div>
                </div>`;
        })
        .join("");
      document.getElementById("collection-body").innerHTML = html;
    });
};
showAllProduct();
//show products filtered
const showProducts = (arr = []) => {
  const sortedHtml = arr
    .map((item) => {
      return `<div class="row-item">
                  <div class="item-img">
                    <a class="nothover" href="#"
                      ><img src="img/${item.img1}" alt=""
                    /></a>
                    <a class="whenhover" href="#"
                      ><img src="img/${item.img2}" alt=""
                    /></a>
                  </div>
                  <div class="item-detail">
                    <h3>
                      <a href="#" id="product-name"
                        >${item.name}</a
                      >
                    </h3>
                    <p class="item-detail__price" id="product-price">
                      ${item.price}đ
                    </p>
                  </div>
                  <div class="item-action">
                    <button
                      class="item-action__btn"
                      id="add-cart"
                      data-id="${item.id}"
                      onclick="addProduct(this)"
                    >
                      <i class="bx bx-cart-alt"></i>
                    </button>
                  </div>
                </div>`;
    })
    .join("");
  document.getElementById("collection-body").innerHTML = sortedHtml;
};
const sortProducts = () => {
  sortBy.addEventListener("click", async (e) => {
    const checked = e.target.closest(".sort-by li");
    const sortOption = checked.dataset.value;
    const datas = await address;
    if (sortOption == "asc") {
      datas.sort(function (a, b) {
        return (
          parseInt(a.price.split(",").join("")) -
          parseInt(b.price.split(",").join(""))
        );
      });
      showProducts(datas);
    } else if (sortOption == "desc") {
      datas.sort(function (a, b) {
        return (
          parseInt(b.price.split(",").join("")) -
          parseInt(a.price.split(",").join(""))
        );
      });
      showProducts(datas);
    } else if (sortOption == "atoz") {
      datas.sort(function (a, b) {
        return a.name.toLowerCase() < b.name.toLowerCase()
          ? -1
          : a.name.toLowerCase() > b.name.toLowerCase()
          ? 1
          : 0;
      });
      showProducts(datas);
    } else if (sortOption == "ztoa") {
      datas.sort(function (a, b) {
        return a.name.toLowerCase() > b.name.toLowerCase()
          ? -1
          : a.name.toLowerCase() < b.name.toLowerCase()
          ? 1
          : 0;
      });
      showProducts(datas);
    }
  });
};
sortProducts();
