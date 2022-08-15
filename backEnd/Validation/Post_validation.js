const validator = require("validator");
const IsEmpty = require("../../backEnd/Validation/ieEmpty");



// text: req.body.text,
// name: req.body.name,
// Avatar:req.body.Avatar,
// user:req.user.id


module.exports = function PostValidation(data) {
    const error = {}; 

    data.text = !IsEmpty(data.text) ? data.text : ''; 


    if (!validator.isLength(data.text, { min: 10, max: 3000 })) {
        
        error.text = "Post must be not less than 10 than and not more than 3000 char"; 

    }

if(!validator)


    if (validator.isEmpty(data.text)) {
        error.text = "Post cant be Empty"; 
}

    return {
        error, 
        isValid:IsEmpty(error)
}

}

