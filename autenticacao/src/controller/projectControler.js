const express = require('express');
const authMiddleware = require('../middlewars/auth');

const router = express.Router();

router.use(authMiddleware);

router.get('/', (req,res) =>{
    res.send({ ok:true });
});

module.exports = controller;