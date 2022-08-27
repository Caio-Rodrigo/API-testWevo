const Service = require('../service/dados.service');

const getAll = async (req, res) => {
	const allDados = await Service.getAll();
	try {
		if (allDados.length === 0) {
			return res.status(200).send({ message: 'Dados Vazil' });
		}
		res.send(allDados);
	} catch (err) {
		res.status(500).send({ error: err.message });
	}
};


module.exports ={
  getAll,
}
