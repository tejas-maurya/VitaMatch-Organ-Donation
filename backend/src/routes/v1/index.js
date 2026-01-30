const express = require('express');
const router = express.Router();
const userRoutes = require('./userRoutes');
const donorRoutes = require('./donorRoutes');
const doctorRoutes = require('./doctorRoutes');
const notificationRoutes = require('./notificationRoutes');

router.use('/user',userRoutes);
router.use('/donor',donorRoutes);
router.use('/doctor',doctorRoutes);
router.use('/notification',notificationRoutes)

module.exports = router