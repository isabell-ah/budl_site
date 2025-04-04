const express = require('express');
const app = express();

const port = 2000;
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(bodyParser.json());
app.use(cors());

require('./db');

app.use('/', require('./routes/home'));
app.use('/st', require('./routes/static'));
app.use('/mainmedia', require('./routes/mainmedia'));

app.listen(port, () => {
  console.log(`Budalangi Backend on port ${port}`);
});
