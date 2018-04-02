const mongoose = require('mongoose')

const aadhaarSchema = new mongoose.Schema({

    email : {
        type : String,
        required : true
    },
    aadhaarNumber : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    dob : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    }
})

const dlSchema = new mongoose.Schema({
    
    email : {
        type : String,
        required : true
    },
    dlNumber : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    dob : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    relatedTo :  {
        type : String,
        required : true
    },
    issueDate :  {
        type : String,
        required : true
    },
    validity : {
        type : String,
        required : true
    },
    bloodGroup :  {
        type : String,
        required : true
    },
    vehicleType :    {
        type : String,
        required : true
    }     
})

const voteridSchema = new mongoose.Schema({

    email : {
        type : String,
        required : true
    },
    voteridNumber : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    dob : {
        type : String,
        required : true
    },
    sex : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    fathersName :  {
        type : String,
        required : true
    },
    issueDate :  {
        type : String,
        required : true
    }
})

const passportSchema = new mongoose.Schema({

    email : {
        type : String,
        required : true
    },
    passportNumber : {
        type : String,
        required : true
    },    
    surname : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    nationality : {
        type : String,
        required : true
    },
    dob : {
        type : String,
        required : true
    },
    sex : {
        type : String,
        required : true
    },
    placeOfBirth : {
        type : String,
        required : true
    },
    placeOfIssue : {
        type : String,
        required : true
    },
    dataOfIssue : {
        type : String,
        required : true
    },
    dateOfExpiry : {
        type : String,
        required : true
    },
    fathersName : {
        type : String,
        required : true
    },
    mothersName : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    }
})

mongoose.model('Aadhaar',aadhaarSchema,'aadhaar');
mongoose.model('Dl',dlSchema,'dl');
mongoose.model('Voterid',voteridSchema,'voterid');
mongoose.model('Passport',passportSchema,'passport');
