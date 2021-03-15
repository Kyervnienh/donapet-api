var express = require('express'),
  bodyParser = require('body-parser'),
  cors = require('cors');

// Objeto global de la app
var app = express();

// configuración de middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

<<<<<<< HEAD
// Agregamos el código de nuestro router (routes/index.js)
app.use('/v1', require('./routes'));

// Manejando los errores 404
app.use(function (req, res, next) {
=======
require('./config/passport');

app.use('/v1', require('./routes'));

// Manejando los errores 404
app.use(function(req, res, next) {
>>>>>>> develop
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Iniciando el servidor...
<<<<<<< HEAD
var server = app.listen(process.env.PORT || 3000, function () {
=======
var server = app.listen(process.env.PORT || 3000, function(){
>>>>>>> develop
  console.log('Escuchando en el puerto ' + server.address().port);
});
