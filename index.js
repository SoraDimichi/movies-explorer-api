const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const { MONGO_URL, PORT } = require('./config');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const celebrateErrorHandler = require('./middlewares/celebrateErrorHandler');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

const router = require('./routes');

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());
app.use(cors());
app.use(requestLogger);
app.use(helmet());

app.use('/', router);
app.use(celebrateErrorHandler);
app.use(errorHandler);
app.use(errorLogger);

/* eslint-disable no-console */
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
/* eslint-disable no-console */
