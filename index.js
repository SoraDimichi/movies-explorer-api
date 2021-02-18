const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const { MONGO_URL, PORT } = require('./config');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const apiLimiter = require('./middlewares/limiter');
const celebrateErrorHandler = require('./middlewares/errorHandlers/celebrateErrorHandler');
const mongooseErrorHandler = require('./middlewares/errorHandlers/mongooseErrorHandler');
const errorHandler = require('./middlewares/errorHandlers/errorHandler');

const app = express();

const router = require('./routes');

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

app.use(apiLimiter);
app.use(bodyParser.json());
app.use(cors());
app.use(requestLogger);
app.use(helmet());

app.use('/', router);
app.use(celebrateErrorHandler);
app.use(mongooseErrorHandler);
app.use(errorLogger);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
