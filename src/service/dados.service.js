const Dados = require('../models/Dados')

const getAll = async (req, res) => await Dados.find();


module.exports = {
  getAll
}
