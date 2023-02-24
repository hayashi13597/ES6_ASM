class User {
  constructor(form) {
    this.form = form;
    this.emailInput = form.elements["email"];
    this.userInput = form.elements["user"];
    this.addressInput = form.elements["address"];
    this.passwordInput = form.elements["pwd"];
    this.apiUrl = "./json/users.json";
  }
  checkLogin() {
    const email = this.emailInput.value;
    const password = this.passwordInput.value;
    if (email == "" || password == "") {
      alert("Hãy nhập email và mật khẩu");
      return false;
    }
    fetch(this.apiUrl)
      .then((res) => res.json())
      .then((data) => {
        const check = data.filter(
          (user) => user.email == email && user.password == password
        );
        if (check.length > 0) {
          const html = `
          <h2>Thông tin đăng nhập</h2>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">User</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
                <th scope="col">Address</th>
                <th scope="col">Role</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>${check[0].name}</td>
                <td>${check[0].email}</td>
                <td>${check[0].password}</td>
                <td>${check[0].address}</td>
                <td>${check[0].role == 1 ? "shop" : "user"}</td>
              </tr>
            </tbody>
          </table>`;
          document.querySelector("#data").innerHTML = html;
        } else alert("Đăng nhập thất bại");
      })
      .catch((err) => console.error(err));
    return false;
  }

  register() {
    const email = this.emailInput.value;
    const password = this.passwordInput.value;
    const user = this.userInput.value;
    const address = this.addressInput.value;
    if (email == "" || password == "") {
      alert("Hãy nhập email và mật khẩu");
      return false;
    }
    fetch(this.apiUrl)
      .then((res) => res.json())
      .then((data) => {
        const check = data.filter((user) => user.email == email);
        if (check.length > 0) alert("Tài khoản đã tồn tại");
        else {
          const html = `
          <h2>Thông tin đã đăng ký</h2>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">User</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
                <th scope="col">Address</th>
                <th scope="col">Role</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>${user}</td>
                <td>${email}</td>
                <td>${password}</td>
                <td>${address}</td>
                <td>user</td>
              </tr>
            </tbody>
          </table>`;
          document.querySelector("#data").innerHTML = html;
        }
      })
      .catch((err) => console.error(err));
  }
}

const form = document.querySelector("form");
const user = new User(form);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  user.checkLogin();
  // user.register();
});
