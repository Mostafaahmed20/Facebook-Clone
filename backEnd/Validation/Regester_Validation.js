const validator = require("validator");
const IsEmpty = require("../../backEnd/Validation/ieEmpty");

//   const { name, age, email, password }

module.exports = function ValidateReqest(data) {
    
    const error = {}; 

    data.name = !IsEmpty(data.name) ? data.name : ''; 
    data.age = !IsEmpty(data.age) ? data.age : '';
    data.email = !IsEmpty(data.email) ? data.email : ''; 
    data.password = !IsEmpty(data.password) ? data.password : ''; 

    
    if (!validator.isLength(data.name, { min: 5, max: 20 })) {
        error.name = "Name must be not less than 5 chars and not more than 20 char"
        
    }

    if (!validator.isInt(data.age, { min: 19, max: 60 })) {
    error.age = "Age must be not less than 19 and not more than 60"
    }
    
    if (!validator.isEmail(data.email)) {
        error.email = "Your input Must be Email format"
    }

    if (!validator.isStrongPassword(data.password, { min: 8, max: 15 })) {
    error.password = "minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1,"
}
    

    if (validator.isEmpty(data.name)) {
       error.name = "Name Required "
   }
    if (validator.isEmpty(data.age)) {
    error.age = "Age Required"
    }
    

    if (validator.isEmpty(data.email)) {
        error.email = 'Email Required'
    }

    if (validator.isEmpty(data.password)) {
        error.password = 'password Required'
    }
    
    
    return {
        error, 
        IsValid:IsEmpty(error)
}

} 

