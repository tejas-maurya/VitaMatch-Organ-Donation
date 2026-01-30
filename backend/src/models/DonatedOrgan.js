const mongoose = require("mongoose");

const donatedOrganSchema = new mongoose.Schema({
    organName: {
        type: String,
        enum: ["Heart", "Liver", "Lungs", "Kidney", "Eye"]
    },
    bloodGroup: {
        type: String,
        enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]
    },
    role: {
        type: String,
        enum: ["DONOR", "DOCTOR"],
        required: true
    },
    donorId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        refPath: "role"
    },
    phoneNumber : {
        type : String
    },
    hospitalId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
        default : null
    },
    address :{
        type : String
    },
    consentId:{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Consent",
        default : null
    },
    status: {
        type: String,
        enum: ["PENDING_CONSENT","AVAILABLE", "RESERVED" , "ALLOCATED", "TRANSPLANTED", "EXPIRED"],
        default: "PENDING_CONSENT"
    },
    allocationId : {
        type : mongoose.Schema.Types.ObjectId,
        ref:"Allocation",
        default : null
    }
}, { timestamps: true });

module.exports = mongoose.model("DonatedOrgan", donatedOrganSchema);
