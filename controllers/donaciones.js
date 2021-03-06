const Donacion = require('../models/donacion');

/**
 * Funcion para crear una nueva donacion.
 * @param {*} req
 * @param {*} res
 */
function crearDonacion(req, res, next) {
  const donacion = Donacion.build(req.body);

  donacion.save().then(donativo => {
    return res.status(200).json(donativo)
  }).catch(next);
}

/**
 * Funcion para consultar las donaciones.
 * @param {*} req
 * @param {*} res
 */
function consultarDonaciones(req, res) {
  Donacion.findAll().then(donativos => {
    return res.json(donativos)
  }).catch(error => {
    return res.sendStatus(401)
  })  
}


/**
 * Funcion para responder una UNICA donacion
 * @param {*} req
 * @param {*} res
 */

function consultarDonacion(req, res) {
  Donacion.findByPk(req.params.id).then(user => {
    return res.json(user)
  }).catch(error => {
    return res.sendStatus(401)
  })
}

/**
 * Funcion la modificacion de los detalles de una donacion.
 * @param {*} req
 * @param {*} res
 */

function modificarDonacion(req, res, next ) {
  Donacion.update(req.body, {where: { id_donacion: req.params.id}})
  .then(donativo => {
    return res.sendStatus(200).json(donativo)
  }).catch(next);
}

/**
 * Funcion para eliminar/cancelar una donacion
 * @param {*} req
 * @param {*} res
 */
function cancelarDonacion(req, res) {
  const donacion = Donacion.findByPk(req.params.id);
  if (donacion === null){
    return res.sendStatus(401)
  } else {
    Donacion.destroy({where: {id_donacion: req.params.id}}).then(() => {
      return res.sendStatus(200)
    }).catch(err => {
      return res.sendStatus(500)
    })
  }
}

// exportamos las funciones definidas
module.exports = {
  crearDonacion,
  modificarDonacion,
  consultarDonaciones,
  cancelarDonacion,
  consultarDonacion,
};

