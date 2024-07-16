const User =require('../models/user.model');
const dateService = require('../services/date.service');


const UserController = {

    createUser: async (req,res,next)=>{
        try {
            const dataJsonUser = {
                user_type: this.generateUserType(req.body.PositionEmployee),
                email: this.generateEmail(req.body.NombreUsuario,req.body.APUsuario),
                password: req.body.DniUsuario,
                date_register: dateService.getCurrentDateFormatted(),
                employee: {
                    person: {
                        name: req.body.employee.person.NombreUsuario,
                        last_name_1: req.body.employee.person.APUsuario,
                        last_name_2: req.body.employee.person.AMUsuario,
                        dni:req.body.employee.person.DniUsuario,
                    },
                    name_branch: req.body.employee.SucursalUsuario,
                    position: req.body.employee.PositionEmployee,
                    
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
                return res.status(500).send('server error');
        }
    },
    
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
        let email = `${name}.${lastName1}@marvisur.com`;
        //verificando que email ya exista
        return email;
    },




}

module.exports = UserController;