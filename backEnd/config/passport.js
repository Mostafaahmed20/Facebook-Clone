const JwtStrategy = require("passport-jwt").Strategy; 
const ExtractJwt = require("passport-jwt").ExtractJwt; 
const passport = require("passport");
const secret = require("../../backEnd/config/keys");
const mongoose = require("mongoose"); 
const user = mongoose.model("users"); 

const opt = {}; 


opt.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken(); 
opt.secretOrKey = secret.secrete;

module.exports = passport => {
    passport.use(
        new JwtStrategy(opt, (Jwt_Payload, done) => {
           
            user.findById(Jwt_Payload._id).then(data => {
                if (data) {
                    
                    return done(null, data)
                } else {
                    
                    return done(null, false)
                }
                
            }).catch((err) => console.log(err)); 
            // console.log(Jwt_Payload);

        })
    )
}


