const routes = require('express').Router();
const Dados = require('../Controller/controller');

routes.get('/', Dados.getAll);

module.exports = routes;
