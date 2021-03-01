const Donacion = require('../models/donacion');

/**
 * Funcion para crear una nueva donacion.
 * @param {*} req
 * @param {*} res
 */
function crearDonacion(req, res) {
  var donacion = new Donacion(req.body);
  res.status(200).send(donacion);
}

/**
 * Funcion para simular responder la consulta de las donaciones.
 * Se envian las donaciones simuladas
 * @param {*} req
 * @param {*} res
 */
function consultarDonaciones(req, res) {
  var donacion1 = new Donacion(1, 2, 1, 1200, "Aceptada");
  var donacion2 = new Donacion(2, 1, 2, 3000, "Validando");
  res.send([donacion1, donacion2]);
}

/**
 * Funcion para responder una UNICA donacion
 * @param {*} req
 * @param {*} res
 */

function consultarDonacion(req, res) {
  var donacion1 = new Donacion(1, 2, 1, 1200, "Aceptada");
  var donacion2 = new Donacion(2, 1, 2, 3000, "Validando");

  res.send(
    [donacion1, donacion2].filter((donacion) => donacion.id === +req.params.id)
  );
}

/**
 * Funcion para simular la modificacion de los detalles de una donacion.
 * @param {*} req
 * @param {*} res
 */

function modificarDonacion(req, res) {
  // simulando un usuario previamente existente que el cliente modifica
  var donacion2 = new Donacion(req.params.id, 2, 1, 3000, "Aceptada");
  var modificaciones = req.body;
  donacion2 = { ...donacion2, ...modificaciones };
  res.send(donacion2);
}

/**
 * Funcion para cancelar una donacion
 * @param {*} req
 * @param {*} res
 */
function cancelarDonacion(req, res) {
  res.status(200).send(`La Donacion ${req.params.id} ha sido cancelar`);
}

// exportamos las funciones definidas
module.exports = {
  crearDonacion,
  modificarDonacion,
  consultarDonaciones,
  cancelarDonacion,
  consultarDonacion,
};
