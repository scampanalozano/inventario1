const express = require('express');
const morgan = require('morgan');
const cors = require ('cors');

const routes = require('./routes/routes')

const app = express();
// permite que le servidor se reinice automaticamente con un cambio
app.use(morgan('dev'))

// esta función permite leer los datos que vengan
app.use(express.json());
app.use(cors());

app.use(routes)

app.listen(4000)
console.log('server')