const Organizacion = require('../models/organizacion');

/**
 * Funcion para crear una nueva organizacion.
 */
function crearOrganizacion(req, res, next) {
  const org = Organizacion.build(req.body);

  org
    .save()
    .then((organizacion) => {
      return res.status(201).send(organizacion);
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
  Organizacion.findByPk(req.params.id)
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
  Organizacion.update(req.body, { where: { id_organizacion: req.params.id } })
    .then((organizacion) => {
      return res.status(201).send(organizacion);
    })
    .catch(next);
}

/**
 * Funcion para eliminar una organizacion
 */
function eliminarOrganizacion(req, res) {
  const organizacion = Organizacion.findByPk(req.params.id);
  if (organizacion === null) {
    return res.sendStatus(401);
  } else {
    Organizacion.destroy({ where: { id_organizacion: req.params.id } })
      .then(() => {
        return res.sendStatus(200);
      })
      .catch((err) => {
        return res.sendStatus(500);
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
