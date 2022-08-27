require('dotenv').config();

const validObjectBody = (req, res, next) => {
	const item = req.body;

	if (
		!item.nome &&
		!item.cpf &&
		!item.email &&
		!item.tel &&
		!item.sexo &&
		!item.dataNacimento
	) {
		return res.status(400).send({ message: 'Preencha todos os campos' });
	}

	next();
};


module.exports = {
  validObjectBody
}
