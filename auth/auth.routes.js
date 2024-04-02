const express = require('express');
const router = express.Router();

const Users = require ('./auth.controller');

module.exports = (router) => {
    router.post('/register', Users.createUser);
    router.post('/login', Users.loginUser);
}