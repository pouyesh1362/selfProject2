const mongoose = require('mongoose');
const mongooseSchema = mongoose.Schema;

const UserSchema  = new Schema({
    name: String,
    familyName: String,
    email:String,
    age: Number,
    password: String,
})

const User = mangoose.model('User' ,UserSchema );
module.exports = User;


