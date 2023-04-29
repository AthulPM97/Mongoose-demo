const mongoose = require("mongoose");
const User = require("./User");

mongoose.connect("mongodb://127.0.0.1:27017/testdb");

run();
async function run() {
  try {
    // const user = User.findOne().where({name: 'athul'}).where().limit(1);
    const user = await User.where('name').equals('athul').limit(1).select('age')
    console.log(user)
  } catch (err) {
    console.log(err.message);
  }
}