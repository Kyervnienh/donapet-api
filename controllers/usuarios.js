const Usuario = require('../models/usuario')

// función para crear un usuario
function crearUsuario(req, res,next) {
  const usr = Usuario.build(req.body)

  usr.save().then(user => {
    return res.status(201).json(user.toAuthJSON())
  }).catch(next);
}

// función para obtener todos los usuarios
function obtenerUsuarios(req, res) {
  Usuario.findAll().then(users => {
    return res.json(users)
  }).catch(error => {
    return res.sendStatus(401)
  })
}

// función para obtener un usuario por id
function obtenerUsuario(req, res) {
  Usuario.findOne({where: {id_usuario: req.params.id_usuario}}).then(user => {
    return res.json(user)
  }).catch(error => {
    return res.sendStatus(401)
  })
}

// función para modificar un usuario
function modificarUsuario(req, res,next) {
  const usr = Usuario.create({
    id : req.params.id,
    ...req.body
  })

  usr.save().then(user => {
    return res.status(201).json(user.toAuthJSON())
  }).catch(next);
}

// función para eliminar un usuario
function eliminarUsuario(req, res) {
  const usr = Usuario.findByPk(req.usuario.id);
  if (usr === null){
    return res.sendStatus(401)
  } else {
    usr.destroy().then(usr => {
      return res.status(200)
    }).catch(err => {
      return res.sendStatus(500)
    })
  }
}

module.exports = {
  crearUsuario,
  obtenerUsuarios,
  obtenerUsuario,
  modificarUsuario,
  eliminarUsuario,
};
