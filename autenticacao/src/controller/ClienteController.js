const Cliente = require('../model/Cliente');
//const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');


function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400,
    });
}
const controller = {
   
    salvar:  (req, res) => {
            
            const cliente = Cliente.create(req.body);
            cliente.password = undefined;

            return res.send({
                cliente,
                token: generateToken({ id: cliente.id }),
            });
       
    },
    autenticar :async (req,res) =>{
        const { email,password } = req.body;
        
        const cliente = await Cliente.findOne({ email }).select('+password');
    
        if (!cliente){
             return res.status(400).send({error : 'usuario não encontrado'});
        }
       
    
        if(!await compare(password, cliente.password)){
            return res.status(400).send({ error: 'Invalid password'});
        }
            
            cliente.password = undefined;
    
            
    
        res.send({ cliente,
             token: generateToken({id: cliente.id}), 
            });    
    }

};

module.exports = controller;