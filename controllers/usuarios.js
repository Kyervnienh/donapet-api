const Usuario = require('../models/usuario')

function crearUsuario(req, res) {
  var usuario = new Usuario(req.body)    // Creando un usuario y respondiendolo
  res.status(201).send(usuario)
}

function obtenerUsuarios(req, res) {
  var usuario1 = new Usuario(1, 'Kevin', 'Lopez', 'kevin@mail.com')
  var usuario2 = new Usuario(2, 'Jesrig', 'Pineda', 'jesrig@mail.com')  // Simulando dos usuarios y respondiendolos
  res.send([usuario1, usuario2])
}

function modificarUsuario(req, res) {
  var usuario1 = new Usuario(req.params.id, 'Raquel', 'Vazquez', 'raquel@mail.com')
  var modificaciones = req.body                                                      // simulando un usuario existente que se modifica
  usuario1 = { ...usuario1, ...modificaciones }
  res.send(usuario1)
}

function eliminarUsuario(req, res) {
  res.status(200).send(`Usuario ${req.params.id} eliminado`); // se simula una eliminación de usuario, regresando un 200
}

module.exports = {
  crearUsuario,
  obtenerUsuarios,
  modificarUsuario,
  eliminarUsuario
}