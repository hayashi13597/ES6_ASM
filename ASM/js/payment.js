const data = JSON.parse(sessionStorage.getItem("cart"));
const formatter = new Intl.NumberFormat("en-US", {
  currency: "USD",
});
const totalTemp = document.getElementById("total-temp");
const totalPayment = document.getElementById("total-payment");
if (data == null || data.length == 0) {
  window.location.assign("cart.html");
}
const showAllProducts = () => {
  document.getElementById("payment-item").innerHTML = "";
  const html = data
    .map((item) => {
      return `<tr class="product">
    <td class="product-image">
      <div class="product-thumbnail">
        <div class="product-thumbnail-wrapper">
          <img
            class="product-thumbnail-image"
            alt="${item.name}"
            src="${item.img}"
          />
        </div>
        <span class="product-thumbnail-quantity">${item.count}</span>
      </div>
    </td>
    <td class="product-description">
      <span
        class="product-description-name order-summary-emphasis"
        >${item.name}</span
      >
    </td>
    <td class="product-quantity visually-hidden">1</td>
    <td class="product-price">
      <span class="order-summary-emphasis">${formatter.format(
        parseInt(item.price.split(",").join("")) * item.count
      )}₫</span>
    </td>
  </tr>`;
    })
    .join("");
  document.getElementById("payment-item").innerHTML = html;
};
const updateMoney = () => {
  const price = [];
  data.forEach((item) => {
    price.push(parseInt(item.price.split(",").join("")) * item.count);
  });
  const total = price.reduce((acc, curValue) => (acc += curValue), 0);
  totalTemp.innerText = formatter.format(total) + "đ";
  totalPayment.innerText = formatter.format(total) + "đ";
};
if (data && data.length > 0) {
  showAllProducts();
}
updateMoney();
