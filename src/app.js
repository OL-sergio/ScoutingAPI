// JavaScript source code
const express = require('express');
const cors = require('cors');

const app = express();

// ==> Rotas da API:
const index = require('./routes/index');
const ActivitiesRoute = require('./routes/activities.routes');
const AutenticacaoRoute = require('./routes/autenticacao.routes');
const ScoutRoute = require('./routes/scout.routes');
const StaffRoute = require('./routes/staff.routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

app.use('/api/', ActivitiesRoute);
app.use('/api/', ScoutRoute);
app.use('/api/', StaffRoute);
app.use('/user/', AutenticacaoRoute);

app.use(index);

module.exports = app;
