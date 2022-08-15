const mongoose = require("mongoose"); 
const Schema = mongoose.Schema;



const ProfileSchema = new mongoose.Schema({
    user: { type:Schema.Types.ObjectId, ref:"User"}, 
    handel: { type: String, max: 40  , required:true }, 
    company: { type: String }, 
    location:{type:String}, 
    status: { type: String}, 
    bio: { type: String }, 
    facebookUser: { type: String },
    expedience:[String] ,
    date: {
        type: Date,
        default:Date.now
        
    }
})


const myModelProfile = mongoose.model("profile", ProfileSchema); 


module.exports = myModelProfile; 