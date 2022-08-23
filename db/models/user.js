const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')

const objectUserSchema = {
    name: String,
    password: String,
    email: String
};

const userSchema = mongoose.Schema(objectUserSchema, { versionKey: false })

userSchema.plugin(AutoIncrement, { inc_field: 'id_user' });

const User = mongoose.model("users", userSchema);

module.exports = User;