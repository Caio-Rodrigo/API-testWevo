require('dotenv').config();
const mongoose = require('mongoose')

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

const validId = (req,res,next)=>{
	const id = req.params.id

	if (!mongoose.Types.ObjectId.isValid(id)){
		return res.status(400).send({ message: 'Insira um ID valido!' });
	}
	next();
}


module.exports = {
  validObjectBody,
	validId,
}
