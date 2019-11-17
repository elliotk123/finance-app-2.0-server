const express = require('express');
const app = express();
const port = 3000;
const frequencyRouter = require('./router/frequencyRouter');
const bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use('/frequencies', frequencyRouter);
app.listen(port, () => console.log(`Listening on port ${port}!`));