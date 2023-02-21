class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email;
  }

  set email(email) {
    this._email = email;
  }

  get password() {
    return this._password;
  }

  set password(password) {
    this._password = password;
  }
}

class StoreOwner extends User {
  constructor(email, password, storeName) {
    super(email, password);
    this.storeName = storeName;
  }

  get storeName() {
    return this._storeName;
  }

  set storeName(storeName) {
    this._storeName = storeName;
  }

  manageStore() {
    // phương thức quản lý cửa hàng của shop
  }
}

class Customer extends User {
  constructor(email, password) {
    super(email, password);
    this.cart = [];
  }

  get cart() {
    return this._cart;
  }

  set cart(cart) {
    this._cart = cart;
  }

  addToCart(item) {
    this.cart.push(item);
  }

  viewCart() {
    // phương thức xem giỏ hàng của khách hàng
  }
}

const storeOwner = new StoreOwner("admin@gmail.com", "123456", "Figure Shop");
storeOwner.manageStore();

const customer = new Customer("guest@gmail.com", "123456");
