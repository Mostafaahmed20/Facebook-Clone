const mongoose = require("mongoose");

const PostModel = new mongoose.Schema({
    // user:{type:mongoose.Types.ObjectId , ref : "User"},       
    user:{type:mongoose.Types.ObjectId , ref : "User"},       
    
    text: { type: String, required: true },

    name:{type:String , required:true},
    Avatar: { type: String},
    
    likes: [
        {
            user: {type: mongoose.Types.ObjectId, ref: "User" }
    
}
    ],
    comment: [
        {
            user: { type: mongoose.Types.ObjectId, ref: "User" },
            text: { type: String, required: true },
            name:{type:String},
            Avatar: { type: String, required: true },
            
            date: { type: Date, default: Date.now },
        }
    
    
    ],

        date:{type:Date , default:Date.now},
}) 




const postModel = mongoose.model("post", PostModel); 


module.exports = postModel; 