const validator = require("validator"); 
const IsEmpaty = require("../../backEnd/Validation/ieEmpty");



module.exports = function ValidateProfile(data) {

    const errors = {};     
    data.handel = !IsEmpaty(data.handel) ? data.handel : ''; 
    data.company = !IsEmpaty(data.company) ? data.company : ''; 
    data.location = !IsEmpaty(data.location) ? data.location : ''; 
    data.status = !IsEmpaty(data.status) ? data.status : ''; 
    data.status = !IsEmpaty(data.status) ? data.status : ''; 
    data.facebookUser = !IsEmpaty(data.facebookUser) ? data.facebookUser : ''; 
    data.expedience = !IsEmpaty(data.expedience) ? data.expedience : ''; 



    if (!validator.isLength(data.handel, { min: 5, max: 20 })) {
        errors.handel = "Handel must Be not less than 5 chars and not more than 20";
}

    if (!validator.isLength(data.company, { min: 3 , max :20 })) {
        errors.company = "company must Be not less than 3 chars and not more than 20"
    }


    if (!validator.isLength(data.location, { min: 5, max: 20 })) {
        errors.location = "location Must be not less than 5 char"
    }


    if (!validator.isLength(data.status, { min: 3, max: 20 })) {
        errors.status = "status Must be not less than 5 char"
        
    }

    if (!validator.isLength(data.facebookUser, { min: 3, max: 20 })) {
        errors.facebookUser = "facebookUser Must be not less than 5 char"
        
    }
    if (!validator.isLength(data.expedience, { min: 3, max: 20 })) {
        errors.expedience = "exprerince Must be not less than 5 char"
        
    }
    
    // handel, company,  location,
    // status, bio, facebookUser , expedience
    

    if (validator.isEmpty(data.handel)) {
        errors.handel = "handel Required" 
    }
    
    if (validator.isEmpty(data.company)) {
        errors.company = "Company Felid Required ";
    }
    
    if (validator.isEmpty(data.location)) {
        errors.location = "Location Felid Required ";
        
    }
  
    if (validator.isEmpty(data.status)) {
        errors.status = "status Felid Required ";
        
    }
 
    if (validator.isEmpty(data.facebookUser)) {
        errors.facebookUser = "facebookUser Felid Required ";
        
    }
 
    if (validator.isEmpty(data.expedience)) {
        errors.expedience = "experience Felid Required ";
        
    }
   
    return {
        errors, 
        isValid:IsEmpaty(errors)
 }   

}