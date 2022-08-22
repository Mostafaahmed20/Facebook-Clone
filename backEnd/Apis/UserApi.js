const { default: mongoose } = require("mongoose");
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10); 
const jwt = require("jsonwebtoken"); 
// const secret = require("../../backEnd/config/keys");
require('dotenv').config({path: __dirname + '../.env'})
const passport = require("passport"); 
const UserModel = require("../Modules/userModel"); 
const ValidateReqest = require("../../backEnd/Validation/Regester_Validation");
const ValidateLogin = require("../../backEnd/Validation/Login_validation");

const Register = (async(req , res ) => {
    const { error,IsValid } = ValidateReqest(req.body); 
    try {
        if (!IsValid) {
           return res.status(400).json(error)
       }
    const { name, age, email, password } = req.body; 
    

        const cheker = await UserModel.findOne({ email }).exec();
       
        const Avatar = gravatar.url(email, {
            s: "200", 
            r: "jpg", 
            d:"retro"
        }); 


        const bcryptpass =await bcrypt.hash(password, salt); 
    
        if (cheker) {
        res.status(400).json({massage:"user is exist already"})
        } else {
            
    
            let UserData = new UserModel({ 
                // _id:mongoose.Types.ObjectId(),
                name, 
                age, 
                Avatar , 
                email, 
                password: bcryptpass
            })
        
            

            UserData.save().then(saved => {
                if (saved) { res.status(200).json(UserData) }; 
                     
                    
             }).catch(err=>console.log(err)); 
    

    }
    
    
    
    } catch (err) {
        console.log(err);
    }
    
})

//
const Login = (async(req, res) => {
    const { email, password } = req.body; 

    const {error , IsValid  } = ValidateLogin(req.body);

    if (!IsValid) {
        res.status(400).json(error);
    }
   await UserModel.findOne({ email }).then(UserFind => {
       console.log(UserFind);
        if (!UserFind) {
        res.json({msg:"you have to regester new account ..."})
      
        } else {
            
            bcrypt.compare(password, UserFind.password, (err, Comapred) => {
                if (Comapred) {
                    
                    let payload = {
                        _id: UserFind._id,
                        name: UserFind.name,
                        email: UserFind.email,
                        Avatar: UserFind.Avatar,
                    };
                    
                    console.log("payload" + " " + JSON.stringify( payload));
                  
                   jwt.sign(payload, process.env.secretOrKey , {expiresIn:8000}  , (err, token) => {
                       console.log("token" + " " + token);
                       return res.status(200).json({ mytoken: "Bearer" + " " + token });
                       
                   }) 
                } else {
                    res.json({msg:"Password incorect.."})
                     }
                 });
                    
        
        } 
        
   }).catch((err) => {
       console.log(err);
})
}) 







const EditUser = (async (req , res ) => {
    const { _id, name, age, email } = req.body; 

    try {
        let userfind = await UserModel.findOneAndUpdate({ _id: _id }, { name, age, email });

        res.status(200).send(userfind); 


    } catch (err) {
  
        
        console.log(err); 

}






})




const GetAll = (async(req, res) => {
    
    try {
        const mydata = await UserModel.find({}).sort({date:-1}).exec(); 
        res.status(200).send(mydata); 


    } catch (err) {
        console.log(err); 
}



})


const GetByname = (async(req, res) => {
    const { name } = req.body;
    
    try {
      await UserModel.findOne({ name }).then(user => {
            if (user) {
                
                res.status(200).send(user); 
            } else {
                res.status(400).json({ msg: "not found..." });
            }
         }).catch((err) => {
             console.log(err);
        }) 


    } catch (err) {
        console.log(err); 
}

    
    
    
})


const GetAuth = (req, res) => {
    const { name, _id, age, email } = req.user; 
    res.json({
        name, 
        _id, 
        age, 
        email
    })
}; 


module.exports = {
    Add: Register, 
    Edit: EditUser, 
    GetUs: GetAll, 
    Getname: GetByname, 
    loginin: Login,
    UserAuth:GetAuth
}
