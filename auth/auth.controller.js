const User =require('./auth.dao');
const jwt = require('jsonwebtoken');
const bcrypt = require ('bcrypt');
const SECRET_KEY = 'secretkey123456';


exports.createUser = (req,res,next) => {
    const newUser = {
        user_type: req.body.user_type,
        email: req.body.email,
        password: req.body.password,
        date_register: req.body.date_register,
        employee: {
            dni: req.body.employee.dni,
            person: {
                name: req.body.employee.person.name,
                last_name_1: req.body.employee.person.last_name_1,
                last_name_2: req.body.employee.person.last_name_2
            },
            name_branch: req.body.employee.name_branch
        }
    }

    User.create (
        newUser, 
        (err,user)=>{
            if (err)
                return res.status(500).send('server error');
            const expiresIn = 24 * 60 * 60;
            const accessToken = jwt.sign({id: user.id},SECRET_KEY,{expiresIn: expiresIn});
            res.send({user});
        } 
    );
}

exports.loginUser = (req,res,next)=>{
    const userData = {
        email: req.body.email,
        password: req.body.password,
    }
    User.findOne(
        {email: userData.email},
        (err,user) =>{
            if (err)
                return res.status(500).send('Server error');
            if(!user){
                //email does'nt exist
                res.status(409).send({message: 'something is wrong'});
            } else {
                const resultPassword = userData.password;

                if (resultPassword) {
                    const expiresIn = 24*60*60;
                    const accessToken = jwt.sign({id: user.id}, SECRET_KEY, {expiresIn: expiresIn});
                    res.send({userData});
                } else{
                    //password wrong
                    res.status(409).send({message: 'something is wrong'});
                }
            }
        }
    )
}