class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  login(username, password) {
    if (username === "user" && password === "pass") {
      console.log("Đăng nhập thành công");
    } else {
      console.log("Đăng nhập thất bại");
    }
  }

  register(username, email, password) {
    // Thực hiện đăng ký người dùng
    console.log("Đăng ký thành công");
  }
}

class Shop {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.inventory = [];
  }

  addItem(item) {
    this.inventory.push(item);
  }

  removeItem(item) {
    const index = this.inventory.indexOf(item);
    if (index > -1) {
      this.inventory.splice(index, 1);
    }
  }
}
const user = new User("user", "user@gmail.com", "password");
// console.log(user);
// user.login("user", "pass");
