// Import Dependencies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const errorHandler = require('errorhandler');
const cors = require('cors');
const morgan = require('morgan');

const apiRouter = require('./api/api.js');

// Create PORT
const PORT = process.env.PORT || 4000;

// Mount Dependencies
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/api', apiRouter);

app.use(errorHandler());


app.listen(PORT, () => {
    console.log(`Server listening on PORT: ${PORT}`);
});