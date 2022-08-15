const mongoose = require("mongoose"); 
const profileModel = require("../../backEnd/Modules/profileModel"); 
const UserModel = require("../../backEnd/Modules/userModel");
const passport = require("passport"); 
const express = require("express");
const router = express.Router(); 
const ProfileValidation = require("../../backEnd/Validation/Profile_Validation");



router.get("/GetProfile",
    
    passport.authenticate("jwt", { session: false }), async (req, res) => {

     console.log(req.user);     
        
    await profileModel.findOne({ user: req.user._id })
        .then(profile => {
        
        if (!profile) {    
         res.status(404).json({msg:"user authntcated but does not  have profile "})
        
        } else {
            res.status(200).json(profile);
        }
        
}).catch((err) => console.log(err))
    
}) 


router.post("/profileById", async (req, res) => {
    
    const { _id } = req.body;
    
    await profileModel.findById({_id}).populate('user' , ['name' , 'Avatar']).then(profile => {
        if (!profile) {
            res.json({ msg: "user does not have profile ..." });
        }else{
            res.json({ msg: profile });
        }
    }).catch((err) => {
        console.log(err)
    })

})




router.post("/ByHandel", async (req, res) => {
    const { handel } = req.body; 
    
    try {
    
     await profileModel.findOne({ handel }).populate('user' , ['name' , 'Avatar']).then(profile => {
             if (profile) {
        res.json({msg:profile})
             } else {
                 res.json({ msg: `we cant find this handel  ${handel}  create your profile ` });
    }
})


    } catch (err) {
        console.log(err)
    }
})


router.get("/GetAll", async (req, res) => {
    try {
         await profileModel.find({}).populate('user', ['name', 'age', 'Avatar', 'email']).then(profile => {
            if (profile) {
                res.json({msg:profile})
            } else {
                res.json({msg:`No data found create new users and create profiles for them as well `})
            }
        })



    } catch (err) {
        console.log(err)
    }
})

router.post("/createProfile", passport.authenticate("jwt", { session: false }), async(req, res) => {
    const {errors , isValid } = ProfileValidation(req.body);
    
    const { handel, company,  location,
        status, bio, facebookUser , expedience } = req.body; 
        
        // create profile 
        
        
        
        const profileFeilds = {}; 
        profileFeilds.user = req.user._id; 
    if (handel) profileFeilds.handel = handel;
    if (company) profileFeilds.company = company;
    if (location) profileFeilds.location = location; 
    if (status) profileFeilds.status = status;
    if (bio) profileFeilds.bio = bio;
    if (facebookUser) profileFeilds.facebookUser = facebookUser;
    
    if (expedience !== "undefined") {
        profileFeilds.expedience = expedience.split(",")  
   }
   
   
   
   if (!isValid) {
       res.status(400).json(errors);
} 
   await profileModel.findOne({ user: req.user._id})
   .then(data => {
       console.log(data); 
       if (data) {
           // if data thats mean this man has profile and need to update it 

           // since you have this user find it by the id  
           
                profileModel.findOneAndUpdate({ user: req.user._id },
                    { $set: profileFeilds },
                    { new: true })
                        .then(profile =>  res.json(profile)) 
    
                } else {
                    // create new profile
    
                    
                    // check if handel exsit 
    
                    profileModel.findOne({ handel: profileFeilds.handel }).then(data => {
                        if (data) {
                            // if the handel exsit 

                            res.json({ msg: "handel already exsit ... " }); 
                        } else {
                            
                            // save the new profile 
                          new profileModel(profileFeilds).save().then(data => res.json(data)); 
                        }
                    }).catch((err) => {
                        console.log(err)
                    })
                    
            }
        })





}) 
    
    
    
  

    

router.post("/updateProfile", passport.authenticate("jwt", { session: false }), async (req, res) => {
    
    const {errors , isValid } = ProfileValidation(req.body);

    

    const {handel, company, location, status, bio, facebookUser } = req.body;

    

    if (!isValid) {
        res.status(400).json(errors);
    }

    await profileModel.findOneAndUpdate({ user: req.user._id },
        { handel, company, location, status, bio, facebookUser })
        .then(profile => {
        if (profile) {
           res.json({msg:"updated"})
        } else {
            res.json({msg:"fail to update"})
       }

   }).catch((err) => {
        console.log(err);
    })
})



router.post("/AddExperinces", passport.authenticate("jwt", { session: false }), async(req, res) => {
    const { newExp } = req.body; 

      await profileModel.findOne({ user: req.user._id }).then(profile => {
    
          profile.expedience.unshift(newExp);
        
          profile.save().then(data => {
              if (data) {
                  res.json({msg:data})
              } else {
                  res.json({msg:"fail to update"})
              }
          });
        
    })
    


})


router.post("/DeleteProfile", passport.authenticate("jwt" , {session:false}) , async (req, res) => {
    
    

    const {errors , isValid } = ProfileValidation(req.body);

    if (!isValid) {
        res.status(400).json(errors);
    }

    
    await profileModel.findOneAndDelete({ user: req.user._id }).then(profile => {
        

         UserModel.findOneAndRemove({ user: req.user._id }).then(DeletedUser => {
            if (DeletedUser) {
                res.json({msg:"User And Profile deleted ..."})
            } else {
                res.json({msg:"User And Profile Not deleted ..."})
                
            }
        }).catch((err) => {
            console.log(err);
        })

    //     if (profile) {
    //         res.json({msg:"profile deleted ."})

    //     } else {
    //         res.json({msg:"err"})
    //     }
    // }).catch((err) => {
    //     console.log(err)
    })

})






module.exports = router;


