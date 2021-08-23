//.....................Creating User Schema and Model............................//

const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    age: Number,
  },
  {
    versionKey: false,
  }
);
const User = mongoose.model("user", userSchema);

module.exports = User;
