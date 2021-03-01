const Organizacion = require('../models/organizacion');

/**
 * Funcion para crear una nueva organizacion.
 */
function crearOrganizacion(req, res) {
  var organizacion = new Organizacion(req.body);
  res.status(200).send(organizacion);
}

/**
 * Funcion para simular responder la consulta de las organizaciones.
 * Se envian las organizaciones simuladas
 */
function consultarOrganizacion(req, res) {
  var organizacion1 = new Organizacion(
    1,
    "Karita",
    "Travesía Rocío, 526, Bajo 3º, Bilzen",
    34608791090,
    "Juan José Barragán",
    "jose.ba@karita.com"
  );
  var organizacion2 = new Organizacion(
    2,
    "Animals",
    "Plaça Isabel, 16, Entre suelo 7º, Bilzen",
    34903281006,
    "Iria Portillo",
    "iria.po@animals.com"
  );
  res.send([organizacion1, organizacion2]);
}

/**
 * Funcion para simular la modificacion de los detalles de una organizacion.
 */

function modificarOrganizacion(req, res) {
  // simulando una organizacion previamente existente que el administrador modifica
  var organizacion1 = new Organizacion(
    req.params.id,
    "maxvida",
    "Calle Castañeda, 3, 0º E, Bilzen",
    686355853,
    "Óscar Gurule Hijo",
    "oscar.gu@maxvida.com"
  );
  var modificaciones = req.body;
  organizacion1 = { ...organizacion1, ...modificaciones };
  res.send(organizacion1);
}

/**
 * Funcion para eliminar una organizacion
 */
function eliminarOrganizacion(req, res) {
  res.status(200).send(`La Organizacion ${req.params.id} ha sido eliminada`);
}


// exportamos las funciones definidas
module.exports = {
  crearOrganizacion,
  modificarOrganizacion,
  consultarOrganizacion,
  eliminarOrganizacion,
};
