const Service = require('../service/dados.service');

const getAll = async (req, res) => {
	const todosDados = await Service.getAll();
	try {
		if (todosDados.length === 0) {
			return res.status(200).send({ message: 'Dados Vazil' });
		}
		res.send(todosDados);
	} catch (err) {
		res.status(500).send({ error: err.message });
	}
};

const getById = async (req, res) => {
	const id = req.params.id;
	const item = await Service.getById(id);

	res.send(item);
};

const create = async (req, res) => {
	const item = req.body;
	const { cpf, nome } = req.body;

	const usuarioValido = await Service.verificaNome(nome);
	if (usuarioValido) {
		return res.status(400).send({ message: 'O Nome ja existe no banco' });
	}

	const cpfValido = await Service.verificaCpf(cpf);
	if (cpfValido) {
		return res.status(400).send({ message: 'O CPF ja existe no banco' });
	}

	const novoItem = await Service.create(item).catch((err) => {
		console.log(err.message);
	});

	if (!novoItem) {
		return res.status(500).send({ error: 'Erro ao criar um novo usuario' });
	}

	res.status(201).send(novoItem);
};

module.exports = {
	getAll,
	create,
	getById,
};
