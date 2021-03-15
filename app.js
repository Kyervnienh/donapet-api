var express = require('express'),
  bodyParser = require('body-parser'),
  cors = require('cors');

// Objeto global de la app
var app = express();

// configuración de middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('./config/passport');

app.use('/v1', require('./routes'));

// Manejando los errores 404
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// Iniciando el servidor...
var server = app.listen(process.env.PORT || 3000, function () {
  console.log('Escuchando en el puerto ' + server.address().port);
});


/**
 * Importacion de Swagger
 */

 const swaggerUI = require("swagger-ui-express");
 const swaggerJsDoc = require("swagger-jsdoc");
 /**
 * Informacion acerca de la API
 */

  const swaggerOptions = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "DonaPet API",
        version: "1.0.0",
        description: "API para realizar donaciones a instituciones a cuidado de los animales",
      },
      servers: [
        {
          url: "https://donapet.herokuapp.com/",
        },
      ],
    },
    apis: ["./routes/*.js"],
  };
  
 const swaggerDocs = swaggerJsDoc(swaggerOptions);

 app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));


