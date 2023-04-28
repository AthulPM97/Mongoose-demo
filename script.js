const mongoose = require("mongoose");
const User = require("./User");

mongoose.connect("mongodb://127.0.0.1:27017/testdb");

run();
async function run() {
  try {
    const user = await User.create({
      name: "athul",
      age: 25,
      email: "athul@gmail.com",
    });
    console.log(user);
  } catch (err) {
    console.log(err.message);
  }
}