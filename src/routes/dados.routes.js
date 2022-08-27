const routes = require('express').Router();
const Dados = require('../Controller/controller');
const { validObjectBody, validId } = require('../middlewares/middlewares');

routes.get('/', Dados.getAll);
routes.get('/:id', validId, Dados.getById);
routes.post('/create', validObjectBody, Dados.create);

module.exports = routes;
