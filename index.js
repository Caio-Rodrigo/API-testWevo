require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectToDatabase = require('./src/Database/database');
const dados = require('./src/routes/dados.routes');
const swaggerRouter = require('./src/Swagger/swagger.routes');

const port = process.env.PORT || 3005;

const app = express();

app.use(cors());
app.use(express.json());

connectToDatabase();

app.use('/api', swaggerRouter);
app.use('/', dados);

/* const dados = [{
  id:1,
  nome:'Joao',
  CPF:456258741-66,
Email:'j@gmail.com',
Tel:'(18)3775-3540',
Sexo:'Masculino',
DataNascimento:'10/05/1999'
},{
  id:2,
  nome:'Maria',
  CPF:456785741-96,
Email:'m@gmail.com',
Tel:'(18)3775-9615',
Sexo:'Feminino',
DataNascimento:'27/08/1999'
},{
  id:3,
  nome:'Duda',
  CPF:778258741-69,
Email:'d@gmail.com',
Tel:'(11)5575-3540',
Sexo:'Feminino',
DataNascimento:'11/09/1990'
}
]
 */

app.listen(port, () =>
	console.log(`Server listening on http://localhost:${port}`),
);
