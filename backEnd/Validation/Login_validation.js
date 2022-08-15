const validator = require("validator");
const IsEmpty = require("../../backEnd/Validation/ieEmpty");


module.exports = function LoginValidation(data){

    const error = {}; 

    data.email = !IsEmpty(data.email) ? data.email : ''; 
    data.password = !IsEmpty(data.password) ? data.password : ''; 


    if (!validator.isEmail(data.email)) {
        error.email = "Input Must be in email format"; 
    }

    if (!validator.isStrongPassword(data.password)) {
        error.password = "password restrictions minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1"
    }
    

    if (validator.isEmpty(data.email)) {
        error.email = "Email Is required"; 
}

    if (validator.isEmpty(data.password)) {
    error.password = "Password Is required";
}

    return {
        error, 
        IsValid:IsEmpty(error)
}


}