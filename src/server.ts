import express from 'express';
import cors from 'cors';
import path from 'path';
import 'express-async-errors';
import routes from './routes';
import errorHandler from './errors/handler';

import './database/connection';

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

// Rota = conjunto
// Recuso = usuário

// Métodos HTTP = GET; POST, PUT, DELETE
// Parâmetros

// GET = Buscar uma informação (lista, item)
// POST = Criando uma informação
// PUT = Editando uma informação
// DELETE = Deletetando uma informação

// Query Params = http://localhost:3333/user?search=gilberto;
// Route Params = http://localhost:3333/users/1/ (Identificar um recurso);
// Body = http://localhost:3333/users/ (Identificar um recurso);



app.listen(3333);