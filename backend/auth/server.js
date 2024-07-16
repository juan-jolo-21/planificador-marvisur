'use strict'
//cors util para aceptar rutas de otros 
const cors = require ('cors');
const authRoutes = require('./service/auth.routes')
const express = require('express');
const properties = require('./config/properties');
const DB = require ('./config/db');
DB(); 
const app =express();
const router = express.Router();


app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use(cors());//no hay limites de acceso

app.use('/',router);
authRoutes(router);

router.get(
    '/',
    (req,res) =>{
        res.send('hello from home');
    }
)


app.listen(properties.PORT, ()=>console.log(`auth service running on port ${properties.PORT}`));