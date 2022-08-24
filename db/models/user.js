const mongoose = require("mongoose");

const objectUserSchema = {
    name: String,
    password: String,
    email: String
};

const userSchema = mongoose.Schema(objectUserSchema, { versionKey: false })


const User = mongoose.model("users", userSchema);

module.exports = User;