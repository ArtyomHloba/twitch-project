const express = require('express');
const cors = require('cors');
const multer = require('multer');
const { errorHandlers } = require('./middleware');
const router = require('./routes');

const app = express();

const upload = multer();

app.use(cors());
app.use(express.json());

app.use(upload.none());

app.use('/api', router);
app.use(errorHandlers.errorHandler);

module.exports = app;
