// fetch("./js/test.json")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   });

const databases = require("./databases.json");

// print all databases
databases.forEach((db) => {
  console.log(`${db.name}: ${db.type}`);
});