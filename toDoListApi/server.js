var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/toDoListModel'),
  bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');

app.use(bodyParser.urlencoded({ extended:true}));
app.use(bodyParser.json());
/*app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});*/

var routes = require('./api/routes/todoListRoutes');
routes(app);


app.listen(port);

console.log('toDo list RESTful API server started on: ' + port);
