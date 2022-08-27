const Dados = require('../models/Dados');

const verificaCpf = (cpf) => Dados.findOne({ cpf: cpf });
const verificaNome = (nome) => Dados.findOne({ nome: nome });

const getAll = async (req, res) => await Dados.find();

const getById = async (id) => await Dados.findById(id);

const create = async (novoItem) => await Dados.create(novoItem);

const update = async (id, editaDados) =>
	await Dados.findByIdAndUpdate(id, editaDados).setOptions({
		returnOriginal: false,
	});

const deleteDados = async (id) => await Dados.findByIdAndDelete(id);

module.exports = {
	verificaCpf,
	verificaNome,
	getAll,
	create,
	getById,
	update,
	deleteDados,
};
