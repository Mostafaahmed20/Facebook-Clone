const mongoose = require("mongoose"); 


const UserSchema = new mongoose.Schema({
    // _id:mongoose.Schema.Types.ObjectId,
    name: { type: String, require: true }, 
    age: { type: Number, require: true },
    Avatar:{type:String}, 
    phone: { type: Number, require: true },
    email: { type: String, require: true }, 
    password: { type: String, require: true }, 
    date:{type:Date , default:Date.now},
  
})




const MyUser = mongoose.model("users", UserSchema); 



module.exports = MyUser;