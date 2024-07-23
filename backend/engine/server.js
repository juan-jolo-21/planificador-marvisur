'use strict'

const cors = require('cors');
const express = require('express');
const properties = require('./config/properties');
const DB = require ('./config/db');
const app =express();
const router = express.Router();
const morgan = require('morgan');

DB();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());//no hay limites de acceso
app.use(morgan('dev'));

app.use('/',router);
router.get('/',(req,res)=>res.send('engine service is ready'))

app.use('/branches',require('./routes/branch.routes'))
app.use('/users',require('./routes/user.routes'))

app.listen(properties.PORT, ()=>console.log(`engine service running on port ${properties.PORT}`));