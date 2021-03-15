const Usuario = require('../models/usuario')
const passport = require('passport');

// función para crear un usuario
function crearUsuario(req, res, next) {
  const usr = Usuario.build(req.body) 
  usr.crearPassword(req.body.password)     // Se guarda la contraseña encriptada
  usr.save().then(user => {
    return res.status(201).json(user.toAuthJSON())
  }).catch(next);
}

// función para obtener todos los usuarios
function obtenerUsuarios(req, res) {
  Usuario.findAll().then(users => {    // Obtiene todos los usuarios

    let usersPublicData = []
    for(var i in users){

      usersPublicData[i] = users[i].publicData(); // guarda la información pública en un arreglo
    }

    return res.json(usersPublicData)   // muestra la información pública de los usuarios
  }).catch(error => {
    return res.sendStatus(401)
  })
}

// función para obtener un usuario por id
function obtenerUsuario(req, res) {
  Usuario.findByPk(req.params.id).then(user => {
    return res.json(user.publicData())
  }).catch(error => {
    return res.sendStatus(401)
  })
}

// función para modificar un usuario
function modificarUsuario(req, res, next) {
  Usuario.update(req.body, { where: { id_usuario: req.params.id } })
    .then(user => {
      return res.sendStatus(201).json(user.toAuthJSON())
    }).catch(next);
}

// función para eliminar un usuario
function eliminarUsuario(req, res) {
  const usr = Usuario.findByPk(req.params.id);   // encuentra al usuario por Id
  if (usr === null) {
    return res.sendStatus(401)                   // si no existe manda un error
  } else {
    Usuario.destroy({ where: { id_usuario: req.params.id } }).then(() => {  // si lo encuentra lo elimina
      return res.sendStatus(200)
    }).catch(err => {
      return res.sendStatus(500)               // si el usuario existe pero no lo puede eliminar devuelve un 500
    })
  }
}

// función para iniciar sesión
function iniciarSesion(req, res, next){
  if (!req.body.correo) {
    return res.status(422).json({ errors: { correo: "no puede estar vacío" } }); // se comprueba que el campo "correo" no esté vacío
  }

  if (!req.body.password) {
    return res.status(422).json({ errors: { password: "no puede estar vacío" } }); // se comprueba que el campo "password" no esté vacío
  } 
  
  passport.authenticate('local', { session: false }, function (err, user, info) {  // autentica el login
    if (err) { return next(err); }

    if (user) {
      user.token = user.generarJWT();
      return res.json({ user: user.toAuthJSON() });
    } else {
      return res.status(422).json(info);
    }
  })(req, res, next);
}

module.exports = {
  crearUsuario,
  obtenerUsuarios,
  obtenerUsuario,
  modificarUsuario,
  eliminarUsuario,
  iniciarSesion
};
