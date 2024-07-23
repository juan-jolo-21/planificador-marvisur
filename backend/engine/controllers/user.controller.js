const User =require('../models/user.model');
const dateService = require('../services/date.service');


const UserController = {


    generateUserType: (positionEmployee) => {
        let thatUserType='';
        if (positionEmployee === 'empacador')
            thatUserType = 'manloader';
        else if (positionEmployee === 'supervisor de descargas')
            thatUserType = 'register';
        else if (positionEmployee === 'digitador')
            thatUserType = 'register';

        return thatUserType;
    },

    generateEmail: (name,lastName1) =>  {
        let email = `${name.toLowerCase()}.${lastName1.toLowerCase()}@marvisur.com`;
        //verificando que email ya exista
        return email;
    },
    createUser: async (req,res,next)=>{

        try {
            const dataJsonUser = {
                user_type: UserController.generateUserType(req.body.PositionEmployee),
                email: UserController.generateEmail(req.body.NombreUsuario,req.body.APUsuario),
                password: req.body.DniUsuario,
                date_register: dateService.getCurrentDateFormatted(),
                employee: {
                    person: {
                        name: req.body.NombreUsuario,
                        last_name_1: req.body.APUsuario,
                        last_name_2: req.body.AMUsuario,
                        dni:req.body.DniUsuario,
                    },
                    name_branch: req.body.SucursalUsuario,
                    position: req.body.PositionEmployee,
                    
                },
                
            }
            const newUser = new User(dataJsonUser);
            await newUser.save();
            let jsonresponse = dataJsonUser;
            delete jsonresponse.password;

            res.status(201).json(jsonresponse);
        } catch (err) {
            if (err && err.code === 11000)
                return res.status(409).send('Email already exists');
            else
                return res.status(500).send(console.log(err));
        }
    },
    
    




}

module.exports = UserController;