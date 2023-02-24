// Tạo một đối tượng Auth
var Auth = {
  // Thuộc tính mặc định cho Auth
  loggedIn: false,

  // Phương thức đăng nhập
  login: function (username, password) {
    // Kiểm tra tên người dùng và mật khẩu
    if (username === "user" && password === "pass") {
      this.loggedIn = true;
      console.log("Đăng nhập thành công");
    } else {
      console.log("Đăng nhập thất bại");
    }
  },

  register: function (username, password) {
    // Thực hiện đăng ký người dùng
    console.log("Đăng ký thành công");
  },
};

// Sử dụng đối tượng Auth
Auth.login("user", "pass"); // Đăng nhập thành công
console.log(Auth.loggedIn); // true

Auth.register("user", "pass"); // Đăng ký thành công
