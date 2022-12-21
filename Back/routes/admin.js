'use strict'

var express = require('express');
var clienteController = require('../controllers/AdminController');

var api = express.Router();

api.post('/registro_admin',clienteController.registro_admin);
api.post('/login_admin',clienteController.login_admin);

module.exports = api;