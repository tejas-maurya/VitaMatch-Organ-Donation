const mongoose =require('mongoose');

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
    ,
    email:{
        type:String,
    }
    ,
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum: ["DONOR", "DOCTOR", "ADMIN"] 
    },
    hospitalId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Hospital" 
    }
    // ,
    // isVerified: { 
    //     type: Boolean,
    //      default: false 
    // }
})

module.exports= new mongoose.models("User",userSchema);