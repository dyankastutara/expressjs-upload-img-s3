const express = require('express');

const indexRouter = require('./routes/index');
const uploadsRouter = require('./routes/uploads');

const app = express();

app.set('port', process.env.PORT || 8080)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/upload', uploadsRouter);

app.listen(app.get('port'), () => {
  console.log("Application Start in port "+app.get('port'));
});

module.exports = app;
