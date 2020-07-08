const express = require('express');

const clienteCtrl = require('../controller/ClienteController');
//const projectCtrl = require('../controller/ProjectController');

const router = express.Router();

router.post('/registrar', clienteCtrl.salvar);

router.post('/autenticar', clienteCtrl.autenticar);

module.exports = router;
