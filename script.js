const mongoose = require("mongoose");
const User = require("./User");

mongoose.connect("mongodb://127.0.0.1:27017/testdb");

run();
async function run() {
  try {
    const user = User.findOne().where({name: 'athul'}).limit(1);
    console.log(user)
  } catch (err) {
    console.log(err.message);
  }
}