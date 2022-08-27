const mongoose = require('mongoose');

const dadosSchema = new mongoose.Schema({
	nome: { type: String, require: true },
	cpf: { type: Number, require: true, index: { unique: true } },
	email: { type: String, require: true },
	tel: { type: Number, require: true },
	sexo: { type: String, require: true },
	dataNacimento: { type: Date, require: true },
});

const dados = mongoose.model('Dados', dadosSchema, 'dados');

module.exports = dados;
