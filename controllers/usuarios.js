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
  Usuario.findByPk(req.params.id).then(user => {
    return res.json(user)
  }).catch(error => {
    return res.sendStatus(401)
  })
}

// función para modificar un usuario
function modificarUsuario(req, res,next) {
  Usuario.update(req.body, {where: { id_usuario: req.params.id}})
  .then(user => {
    return res.sendStatus(201).json(user.toAuthJSON())
  }).catch(next);
}

// función para eliminar un usuario
function eliminarUsuario(req, res) {
  const usr = Usuario.findByPk(req.params.id);
  if (usr === null){
    return res.sendStatus(401)
  } else {
    Usuario.destroy({where: {id_usuario: req.params.id}}).then(() => {
      return res.sendStatus(200)
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
