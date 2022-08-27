const routes = require('express').Router();
const Dados = require('../Controller/controller');
const {validObjectBody} = require('../middlewares/middlewares')


routes.get('/', Dados.getAll);
routes.post('/create',validObjectBody,Dados.create)

module.exports = routes;
