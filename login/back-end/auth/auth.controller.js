const User =require('./auth.model');
const jwt = require('jsonwebtoken');
const bcrypt = require ('bcrypt');
const SECRET_KEY = 'secretkey123456';

const AuthController = {
    createUser: async (req,res,next) =>{
        try {
            const dataJsonUser = {
                user_type: req.body.user_type,
                email: req.body.email,
                /*encriptacion de la contraseña
                password: bcrypt.hashSync(req.body.password),
                */
        
                /*sin encriptacion de la contraseña*/
        
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
            const newUser = new User(dataJsonUser);
            await newUser.save();
            const expiresIn = 24 * 60 * 60;
            const accessToken = jwt.sign({id: user.id},SECRET_KEY,{expiresIn: expiresIn});
            let dataUserWithToken = user;
            delete dataUserWithToken.password;
            delete dataUserWithToken.date_register;
            dataUserWithToken.accessToken = accessToken;
            dataUserWithToken.expiresIn = expiresIn;
            res.send({dataUserWithToken});
        } catch (err) {
            if (err && err.code === 11000)
                return res.status(409).send('Email already exists');
            else
                return res.status(500).send('server error');
        }
    },

    loginUser:  async (req,res,next) => {
        try {
            const userData = {
                email: req.body.email,
                password: req.body.password
            };
            const user = await User.findOne({email: userData.email});
            if(!user){
                //email does'nt exist
                res.status(409).send({message: 'user not found'});
            } else {
                /*uso de enciprtacion
                const resultPassword = bcrypt.compare(userData.password,user.password);
                */
                /*sin encriptacion*/
                const resultPassword = userData.password === user.password;
                if (resultPassword) {
                    const expiresIn = 24*60*60;
                    const accessToken = jwt.sign({id: user.id}, SECRET_KEY, {expiresIn: expiresIn});
                    //res.send(user.email);
                    //console.log(user);
                    let dataUserWithToken = {
                        user_type: user.user_type,
                        email: user.email,
                        employee: user.employee,
                        expiresIn: expiresIn,
                        accessToken: accessToken
                    };
                    res.json(dataUserWithToken);
                } else{
                    //password wrong
                    res.status(409).send({message: 'password incorrect'});
                }
                
            }
        } catch (error) {
            return res.status(500).send('Server error');
        }
    }
};

module.exports = AuthController;