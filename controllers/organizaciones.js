const Organizacion = require('../models/organizacion');

/**
 * Funcion para crear una nueva organizacion.
 */
function crearOrganizacion(req, res, next) {
  var organizacion = Organizacion.build(req.body);

  organizacion
    .save()
    .then((organizacion) => {
      return res.status(200).json(organizacion.toAuthJSON());
    })
    .catch(next);
}

/**
 * Funcion para consultar las organizaciones.
 */
function consultarOrganizaciones(req, res) {
  Organizacion.findAll()
    .then((organizaciones) => {
      return res.json(organizaciones);
    })
    .catch((error) => {
      return res.sendStatus(401);
    });
}

/**
 * Funcion para responder una UNICA organizacion
 */

function consultarOrganizacion(req, res) {
  Organizacion.findOne({})
    .then((organizacion) => {
      return res.json(organizacion);
    })
    .catch((error) => {
      return res.sendStatus(401);
    });
}

/**
 * Funcion para modificar una organizacion.
 */

function modificarOrganizacion(req, res, next) {
  const organizacion = Organizacion.create({
    id: req.params.id,
    ...req.body,
  });
  organizacion
    .save()
    .then((organizacion) => {
      return res.status(201).json(organizacion.toAuthJSON());
    })
    .catch(next);
}

/**
 * Funcion para eliminar una organizacion
 */
function eliminarOrganizacion(req, res) {
  const organizacion = Organizacion.findByPk(req.organizacion.id);
  if (organizacion === null) {
    return res.sendStatus(401);
  } else {
    organizacion
      .destroy()
      .then((organizacion) => {
        return res.status(200);
      })
      .catch((err) => {
        return res.status(500);
      });
  }
}

// exportamos las funciones definidas
module.exports = {
  crearOrganizacion,
  modificarOrganizacion,
  consultarOrganizacion,
  consultarOrganizaciones,
  eliminarOrganizacion,
};
