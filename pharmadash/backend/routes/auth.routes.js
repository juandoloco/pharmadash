const { Router } = require('express');
const routerVenta = Router();

const { getPro } = require('../controllers/auth.controller.js');

routerVenta.get('/getPro',    getPro  );

module.exports = routerVenta;