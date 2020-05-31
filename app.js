const express = require('express');
const namedErrors = require('./utils/namedError.json');
const app = express();
const port = 3000;
const weeksRouter = require('./router/weeksRouter');
const bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use('/weeks', weeksRouter);
app.use(function (err, req, res, next) {
    console.log(err);
    var errorCode = 500;
    switch (err.message) {
        case namedErrors.NotFound:
            errorCode = 404;
            break;
        default:
            errorCode = 500;
    }
    res.status(errorCode).send(err.message)
})
app.listen(port, () => console.log(`Listening on port ${port}!`));
