const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phone: String,
  role:
        {
            type:String,
            default:"user",
            enum: ["user","admin"]
        },
});

module.exports = User = model("user", UserSchema);
