const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  age: {
    type: Number,
    min: 1,
    max: 100,
    validate: {
      //will validate the value passed in for age
      validator: (v) => v % 2 === 0,
      message: (props) => `${props.value} is not an even number`,
    },
  },
  email: String,
  createdAt: { type: Date, default: () => Date.now(), immutable: true },
  updatedAt: { type: Date, default: () => Date.now() },
  bestFriend: { type: mongoose.SchemaTypes.ObjectId, ref: "User" },
  hobbies: [String],
  address: {
    street: String,
    city: String,
  },
});

module.exports = mongoose.model("User", userSchema);
