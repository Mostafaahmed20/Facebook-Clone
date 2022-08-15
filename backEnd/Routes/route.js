const express = require("express"); 
const passport = require("passport"); 
const postApi = require("../Apis/postApi");
const UserApi = require("../Apis/UserApi"); 
// const ProfileRoute = require("../Apis/profileApi"); 
const router = express.Router(); 
const mongoose = require("mongoose"); 
// const profileModel = require("../Modules/profileModel"); 
// const UserModel = require("../Modules/userModel");




// ROUTER POSTS 
router.post("/AddPost", passport.authenticate("jwt" , {session:false}) ,  postApi.Add);
router.post("/editPost",passport.authenticate("jwt" , {session:false}) ,  postApi.Edit);
router.get("/getallPosts"  , postApi.retreve); 
router.post("/getPostsByName", passport.authenticate("jwt", { session: false }), postApi.getByname); 
router.post("/getPostsById", passport.authenticate("jwt", { session: false }), postApi.getById); 
router.delete("/DeletePost", passport.authenticate("jwt", { session: false }) ,  postApi.Deleteone);
router.post("/LikePost", passport.authenticate("jwt", { session: false }) ,  postApi.LikeMe);
router.post("/DisLikePost", passport.authenticate("jwt", { session: false }) ,  postApi.Dislike);
router.post("/AddComment", passport.authenticate("jwt", { session: false }), postApi.NewComment);




// Router User
router.post("/AddUser", UserApi.Add);
router.post("/editUser",  passport.authenticate("jwt" , {session:false}) ,  UserApi.Edit);
router.get("/getallUsers" ,  UserApi.GetUs); 
router.post("/getUserByName", UserApi.Getname);
router.post("/loginUser", UserApi.loginin); 

router.use("/getAuth", passport.authenticate("jwt", { session: false }), UserApi.UserAuth);





// ROUTER PROFILE

// router.get("/GetProfile", passport.authenticate("jwt", { session: false }), ProfileRoute.RetrieveProfile);
// router.post("/createProfile", passport.authenticate("jwt", { session: false }), ProfileRoute.Creation);










module.exports = router; 