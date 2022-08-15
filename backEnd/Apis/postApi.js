const mongoose = require("mongoose");
const postModel = require("../../backEnd/Modules/postsModel");
const profileModel = require("../../backEnd/Modules/profileModel");
const PostValidation = require("../../backEnd/Validation/Post_validation");


const AddPost = async(req, res) => {    
    
    const {error , isValid } = PostValidation(req.body); 

    if (!isValid) {
        res.status(400).json(error)
    }

    let newPost = new postModel({
                text: req.body.text,
                name: req.body.name,
                Avatar:req.body.Avatar,
               user:req.user.id
            })
    
         await newPost.save().then(post => {
                if (post) {
                    res.json({msg:post})
                } else {
                    res.json({msg:"fail to add"})
                }
            })
        }

    


const EditPost = async (req , res ) => {
    const {_id , text} = req.body;

    try {
        await postModel.findByIdAndUpdate({ _id }, {text}).then(updatedPost => {
            if (updatedPost) {
                res.send(`msg : post updated 
                ${updatedPost}
                `)
             }
         }) 
        
    } catch (err) {
        console.log(err)
    }


}


const getPostByName = async (req , res ) => {
 
    
        await postModel.findOne({ user: req.body._id }).then(userPosts => {
            if (userPosts) {
                const { name, age, email } = req.user;
                
                const {postTitle , Postbody} = userPosts;
                res.send(`mssage from :${name}
                post title ${postTitle}
                said ${Postbody}
                his age ${age}
                his email ${email}

        `)

            } else {
                res.json({msg:"fail to retreve.."})
            }
    
    
    
        }) 
        

}

const AddComment = (async (req, res) => {
    const { text, name, Avatar } = req.body; 
    
    postModel.findOne({ _id: req.body._id }).then(post => {
        if (post) {
            let NewComment = {
                text, 
                name, 
                Avatar, 
                user: req.user._id
            }
    
            post.comment.unshift(NewComment)
            post.save().then(savedComment => {
                if (savedComment) {
                    res.json({msg:savedComment})
                } else {
                    res.json({msg:"fail to save"})
                }
            }).catch((err) => {
                console.log(err);
            })


        } else {
            res.json({msg:"fail to add the comment"})
        }
    })

    


})




const GetAll = (async(req, res) => {
    
     await postModel.find().sort({date:-1}).then(postData => {
            if (postData) {
                res.json(postData)
            } else {
                res.json({ msg: "no post found"})
            }
     }).catch((err) => {
         console.log(err);
        })
    
    
})



const DeletePost = (async (req, res) => {
    const { _id } = req.body;
    await profileModel.findOne({ user: req.user._id })
        .then(profile => {

        console.log("profile" + " " + profile); 

        postModel.findById(_id).then(post => {


            console.log("post" + " " + post); 

            // "_id": "62d81ac4a56c690e12714be4"
            
            // 62e3fdb3ad94ac753ca8b72e

            console.log("post" + " " + post.user);
            // post 62d777cb831072593aaccd14
            
            console.log("profile" + " " + profile.user);
            // profile 62d777cb831072593aaccd14

            if (post.user.toString() != profile.user) {
                           // profile.user 62e3c553628e6507a0f804bf
                        // post.user  62e3c553628e6507a0f804bf
                return res.json({ msg: "not authorized" })
            } else {

                post.remove().then(()=>res.json({msg:"deleted"}))
            }

}).catch((err)=>res.json({msg:err}))
        
  })



})


const LikePost = (async (req, res) => {
    const {_id } = req.body;
    await profileModel.findOne({ user: req.user._id })
        .then(profile => {
        // searching for the profile by the ID SENT BY THE REQUEST 

        console.log(profile);


        postModel.findById({ _id }).then(post => {
        // SEARCHING FOR THE POST THAT YOU NEED TO LIKE 
        
            console.log("post" + " " + post); 

            if (post.likes.filter((like) => like.user.toString() == req.user._id).length > 0) {
                // 62d777cb831072593aaccd14               // req.user._id = 62d777cb831072593aaccd14
 
                
            // checking if the user id === the user ID sent by the token the length is more than one thats mean he liked the
                // post before if its zero thats mean he didnt like before 
                
                return res.json({ msg: "You are already liked to this post before"})
            } 
            
            post.likes.unshift({ user: req.user._id })
            post.save().then(post=>res.json(post))

        }).catch((err) => {
            console.log(err)
        })
    }).catch((err) => {
        console.log(err);
    })
})






const DisLikePost = (async (req, res) => {
    const {_id } = req.body;
    await profileModel.findOne({ user: req.user._id }).then(profile => {
        // searching for the profile by the ID SENT BY THE REQUEST 

        console.log(profile);


        postModel.findById({ _id }).then(post => {
        // SEARCHING FOR THE POST THAT YOU NEED TO LIKE 
        
            console.log("post" + " " + post); 

            if (post.likes.filter((likes) => likes.user.toString() == req.user._id).length === 0) {
                // 62d777cb831072593aaccd14               // req.user._id = 62d777cb831072593aaccd14

                //   "user": "62d838a7a36a43e5a836905c",               "_id": "62d90e352429e2ce745d6fcf",
                
                
            // checking if the user id === the user ID sent by the token the length is more than one thats mean he liked the
                // post before if its zero thats mean he didnt like before 
                
                return res.json({ msg: "You are already not liked to this post before"})
            } 
            
            // post.likes.shift({ user: req.user._id })
            // post.save().then(post=>res.json(post))

            let removIndex = post.likes.map((v) => v.user.toString()).indexOf(req.user._id);
            post.likes.splice(removIndex, 1);
            post.save().then(post => res.json(post));

        }).catch((err) => {
            console.log(err)
        })
    }).catch((err) => {
        console.log(err);
    })
})








// profile {
//     _id: new ObjectId("62d77f7cce6acc3be89c9e7e"),
//     user: new ObjectId("62d777cb831072593aaccd14"),
//     handel: 'mo-ahmed2',
//     company: 'zed2',
//     location: 'cairo',
//     status: 'grapic',
//     bio: 'design',
//     facebookUser: '@mo-ahmed',
//     expedience: [ '1year at zone ', ' 2 years at zon2' ],
//     date: 2022-07-20T04:07:24.822Z,
//     __v: 0
//   }

//   post {
//     _id: new ObjectId("62d7e2edecdba5d5783570d5"),
//     user: new ObjectId("62d777cb831072593aaccd14"),
//     text: 'finalllllllllllllllllly',
//     name: 'mostafa',
//     Avatar: 'mo-ahmed',
//     likes: [],
//     comment: [],





const Byid = (async(req, res) => {
    const { _id } = req.body;
    try {
    
    
        await postModel.findById({ _id }).populate('user', ['name' , '_id']).then(post => {
            if (post) {
                res.status(200).json({msg:post})
            } else {
                res.status(400).json({msg:"no posts founded "})
            }
        })





    } catch (err) {
        console.log(err);
    }
 

})

module.exports = {
    Add: AddPost, 
    Edit: EditPost, 
    retreve: GetAll, 
    getByname: getPostByName,
    getById:Byid,
    Deleteone: DeletePost,
    LikeMe: LikePost,
    Dislike: DisLikePost, 
    NewComment:AddComment
}
