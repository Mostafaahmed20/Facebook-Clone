const express = require("express");  
const app = express();   
const passport = require("passport"); 
const cors = require("cors");
const bodyparser = require("body-parser");       
const mongoose = require("mongoose");
// const DB = require("./config/keys");
const Routes = require("./Routes/route")                           
const port = process.env.PORT || 5000;
require('dotenv').config()                            

const profile = require("./Apis/profileApi");
mongoose.connect(process.env.MONGOURI).then(( ) => console.log(`app is connected `)).catch(err=>console.log(err)); // connect DB 
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}))           



// POST ROUTES
app.use(cors());
app.use(passport.initialize());
require("./config/passport")(passport);
app.use("/user" , Routes);
app.use("/posts", Routes); 
app.use("/profile" , profile); 
app.get("/", (req, res) => {
    res.write('<html><head><body><h3>Welcome to Home</h3></body></head></html>')
})







app.listen(port , ()=>console.log(`app is listen to http://localhost:${port}/`))
