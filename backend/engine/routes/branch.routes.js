const express = require('express');
const router = express.Router();

const BranchController = require('../controllers/branch.controller');

router.get('/names',BranchController.getAllNamesBranches);


module.exports =  router;