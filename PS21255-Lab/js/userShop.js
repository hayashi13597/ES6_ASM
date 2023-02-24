class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  hello() {
    console.log(`Hello, my name is ${this.name}`);
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
