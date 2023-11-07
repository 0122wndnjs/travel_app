const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  profile: {
    type: String,
    default:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScJXWdvwDZ0RF_VSzzP8aXSX9Sx_VPAtuew&usqp=CAU",
  },
});

module.exports = mongoose.model("User", UserSchema);
