const User = require("../models/User");
const DoctorService = require("../services/doctorService");
const jwt = require('jsonwebtoken');

const doctorServ = new DoctorService;

const requestOrgan = async (req,res) => {
    try {

        if(!req.user || req.user.role == "DONOR"){
            throw new Error('Not Authenticated');
        }
        const doctorId = req.user.id;
        const role = req.user.role;
        const organName = req.body.organName ; 
        const bloodGroup = req.body.bloodGroup;

        const organ = await doctorServ.requestOrgan({
            organName,bloodGroup,doctorId,role
        });
        return res.status(201).json({
            data : organ,
            succes : true,
            message : 'Requested Successfully',
            err : {}
        })
    }
    catch(error) {
        console.log(error)
        return res.status(500).json({
            data : {},
            succes : false,
            message : 'Request failed',
            err : error
        })
    }
}

const findAllAvailable = async (req,res) => {
    try {
        const organName = req.body.organName;
        const bloodGroup = req.body.bloodGroup;
        const availableOrgans = await doctorServ.findAllAvailable({organName,bloodGroup});
        if(!availableOrgans){
            console.log("No such available organs")
        }
        return res.status(201).json({
            data : availableOrgans,
            succes : true,
            message : 'Fetched all available organs for donation',
            err : {}
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data : {},
            succes : false,
            message : 'Could not load',
            err : error
        })
    }
}

const acceptOrgan = async (req, res) => {
    try {
        const { organId, requestId } = req.body;
        const doctorId = req.user.id;
        const allocation = await doctorServ.acceptOrgan({ organId, requestId, doctorId });
        return res.status(201).json({
            data : allocation,
            succes : true,
            message : 'Successfully reversed',
            err : {}
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data : {},
            succes : false,
            message : 'Could not accept',
            err : error
        })
    }
};

module.exports = {
    requestOrgan,
    acceptOrgan,
    findAllAvailable
}