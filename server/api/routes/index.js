const express = require('express')
const router = express.Router()

const ctrlUsers = require('../controllers/users.controller.js')
const ctrlAadhaar = require('../controllers/aadhaar.controller.js')
const ctrlVoterid = require('../controllers/voterid.controller.js')

router
    .route('/users/register')
    .post(ctrlUsers.register)

router
    .route('/users/login')
    .post(ctrlUsers.login)

router
    .route('/aadhaar')
    .post(ctrlUsers.authenticate,ctrlAadhaar.aadhaarAddOne) 

router
    .route('/aadhaar')
    .get(ctrlUsers.authenticate,ctrlAadhaar.aadhaarGetOne) 
    
router
    .route('/voterid')
    .post(ctrlUsers.authenticate,ctrlVoterid.voteridAddOne) 

router
    .route('/voterid')
    .get(ctrlUsers.authenticate,ctrlVoterid.voteridGetOne) 

router
    .route('/authenticate')
    .post(ctrlUsers.indexAuthenticate)

module.exports = router