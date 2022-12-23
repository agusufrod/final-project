require('dotenv').config();
const express = require('express');
const app = express();
const unitRouter = require('./src/route/unit');
const supplierRouter = require('./src/route/supplier');
const morgan = require('morgan');
const bodyParser = require('body-parser');
// app.use((req, res, next) => {
//   res.json({
//     status: 200,
//     message: 'Welcome To Express v2',
//   });
// });
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api/v1/unit', unitRouter);
app.use('/api/v1/supplier', supplierRouter);
module.exports = app;
